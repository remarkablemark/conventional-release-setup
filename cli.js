#!/usr/bin/env node

const { copyFileSync, existsSync, readdirSync } = require('fs');
const { execSync } = require('child_process');
const { resolve } = require('path');

const { name, version } = require('./package');

/**
 * Display package info.
 */
console.log(`INFO: ${name} v${version}`);

const cwd = process.cwd();

const execSyncOptions = {
  cwd: cwd,
  stdio: 'inherit'
};

const packageJsonPath = resolve(cwd, 'package.json');

/**
 * Check if `package.json` exists.
 */
if (!existsSync(packageJsonPath)) {
  console.log('INFO: `package.json` not found, initializing new package');
  execSync('npm init --yes', execSyncOptions);
} else {
  console.log('INFO: `package.json` found');
}

const devDependencies = [
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'husky',
  'standard-version'
];

/**
 * Install dependencies.
 */
console.log('INFO: installing devDependencies');
execSync(
  `npm install --save-dev ${devDependencies.join(' ')}`,
  execSyncOptions
);

const filesPath = resolve(__dirname, 'files');

/**
 * Copy files.
 */
readdirSync(filesPath).forEach(filename => {
  const source = resolve(filesPath, filename);
  const destination = resolve(cwd, filename);
  console.log(`INFO: copying \`${filename}\``);
  copyFileSync(source, destination);
});
