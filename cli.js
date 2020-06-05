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
 * Logs to console.
 *
 * @param {...*} args
 */
const log = (...args) => console.log('INFO:', ...args);

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
  execSync('npm init --yes', execSyncOptions);
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
execSync(
  `npm install --save-dev ${devDependencies.join(' ')}`,
  execSyncOptions
);

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
