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
 * Display package info.
 */
console.log(`INFO: ${name} v${version}`);

/**
 * Check if `package.json` exists.
 */
const packageJsonPath = resolve(cwd, 'package.json');
if (existsSync(packageJsonPath)) {
  console.log('INFO: `package.json` found');
} else {
  console.log('INFO: `package.json` not found, initializing new package');
  execSync('npm init --yes', execSyncOptions);
}

/**
 * Install dependencies.
 */
console.log('INFO: installing devDependencies');
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
const filesPath = resolve(__dirname, 'files');
readdirSync(filesPath).forEach(filename => {
  const source = resolve(filesPath, filename);
  const destination = resolve(cwd, filename);
  console.log(`INFO: copying \`${filename}\``);
  copyFileSync(source, destination);
});
