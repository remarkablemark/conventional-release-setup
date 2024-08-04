#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { cwd, exec } from './utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pkg = require('../package.json');

/**
 * Logs to console.
 */
const log = (...args: any[]) => console.log('INFO:', ...args);

/**
 * Writes to file.
 */
const write = (file: string, data: any) =>
  fs.writeFileSync(
    file,
    (typeof data === 'string' ? data : JSON.stringify(data, null, 2)) + '\n',
  );

/**
 * Display exit code.
 */
process.on('exit', (code) => {
  log(`Exiting with code: ${code}`);
});

/**
 * Display package info.
 */
log(`${pkg.name} v${pkg.version}`);

/**
 * Check if current working directory is a git repository.
 */
let isGit: boolean;
try {
  exec(`git -C ${cwd} rev-parse`);
  isGit = true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
  isGit = false;
}

/**
 * Check if `package.json` exists.
 */
const packageJsonPath = path.resolve(cwd, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  log('`package.json` found');
} else {
  log('`package.json` not found, initializing `package.json`...');
  exec('npm init --yes');
}

/**
 * devDependencies.
 */
const devDependencies = [
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'husky',
];

/**
 * Update `package.json`.
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJson = require(packageJsonPath);
packageJson.scripts = packageJson.scripts || {};
const { prepare } = packageJson.scripts;

const huskyInit = 'husky';
packageJson.scripts.prepare = prepare
  ? `${huskyInit} && ${prepare}`
  : huskyInit;

write(packageJsonPath, packageJson);

/**
 * Install dependencies.
 */
log('Installing devDependencies...');
exec(`npm install --save-dev ${devDependencies.join(' ')}`);
if (isGit) {
  exec('git add package.json');
}

/**
 * Copy files.
 */
log('Copying files...');
fs.cpSync(path.resolve(__dirname, '../files'), cwd, { recursive: true });
if (isGit) {
  exec(`git add .commitlintrc.json .github/workflows/release-please.yml`);
}

/**
 * Add hooks.
 */
if (isGit) {
  log('Adding hooks...');
  exec(`npx ${huskyInit}`);
  const huskyCommitMsgPath = '.husky/commit-msg';
  exec(`echo 'npx commitlint --edit $1' >> ${huskyCommitMsgPath}`);
  exec(`git add ${huskyCommitMsgPath}`);
}

/**
 * Commit changes.
 */
if (isGit) {
  log('Committing changes...');
  exec(
    `git commit -m 'chore: set up conventional release' -m '${pkg.name} v${pkg.version}'`,
  );
}

log(`Finished ${pkg.name}`);
