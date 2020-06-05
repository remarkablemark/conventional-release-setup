#!/usr/bin/env node

const { copyFileSync, existsSync, readdirSync } = require('fs');
const { execSync } = require('child_process');
const { resolve } = require('path');

const { name, version } = require('./package');

const cwd = process.cwd();

const execSyncOptions = {
  cwd: cwd,
  stdio: 'inherit'
};

/**
 * Runs command.
 *
 * @param {String} command
 * @return {String}
 */
const exec = command => execSync(command, execSyncOptions);

/**
 * Logs to console.
 *
 * @param {...*} args
 */
const log = (...args) => console.log('INFO:', ...args);

process.on('exit', code => {
  log(`Exiting with code: ${code}`);
});

/**
 * Display package info.
 */
log(`${name} v${version}`);

/**
 * Check if `package.json` exists.
 */
const packageJsonPath = resolve(cwd, 'package.json');
if (existsSync(packageJsonPath)) {
  log('`package.json` found');
} else {
  log('`package.json` not found, initializing new package...');
  exec('npm init --yes');
}

/**
 * Install dependencies.
 */
log('Installing devDependencies...');
const devDependencies = [
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'husky',
  'standard-version'
];
exec(`npm install --save-dev ${devDependencies.join(' ')}`);

/**
 * Copy files.
 */
log('Copying files...');
const filesPath = resolve(__dirname, 'files');
readdirSync(filesPath).forEach(filename => {
  const source = resolve(filesPath, filename);
  const destination = resolve(cwd, filename);
  log(`Copying \`${filename}\``);
  copyFileSync(source, destination);
});

log(`${name} done`);
