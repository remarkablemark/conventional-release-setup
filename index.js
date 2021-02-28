#!/usr/bin/env node

const { copyFileSync, existsSync, readdirSync, writeFileSync } = require('fs');
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

/**
 * Writes to file.
 *
 * @param {String} file
 * @param {*} data
 */
const write = (file, data) =>
  writeFileSync(
    file,
    (typeof data === 'string' ? data : JSON.stringify(data, null, 2)) + '\n'
  );

process.on('exit', code => {
  log(`Exiting with code: ${code}`);
});

/**
 * Display package info.
 */
log(`${name} v${version}`);

/**
 * Check if current working directory is a git repository.
 */
let isGit;
try {
  exec(`git -C ${cwd} rev-parse`);
  isGit = true;
} catch (error) {
  isGit = false;
}

/**
 * Check if `package.json` exists.
 */
const packageJsonPath = resolve(cwd, 'package.json');
if (existsSync(packageJsonPath)) {
  log('Found `package.json`');
} else {
  log('Unable to find `package.json`, initializing new package...');
  exec('npm init --yes');
}

/**
 * devDependencies.
 */
const devDependencies = [
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'husky',
  'standard-version'
];

/**
 * Update `package.json`.
 */
const packageJson = require(packageJsonPath);
packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.release = 'standard-version --no-verify';
packageJson.scripts.postinstall = 'husky install';
if (!packageJson.private) {
  devDependencies.push('pinst');
  packageJson.scripts.prepublishOnly = 'pinst --disable';
  packageJson.scripts.postpublish = 'pinst --enable';
}
write(packageJsonPath, packageJson);

/**
 * Install dependencies.
 */
log('Installing devDependencies...');
exec(`npm install --save-dev ${devDependencies.join(' ')}`);
isGit && exec('git add package.json');

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
  isGit && exec(`git add ${filename}`);
});

/**
 * Add hooks.
 */
if (isGit) {
  log('Adding hooks...');
  exec(`npx husky install`);
  exec(`npx husky add .husky/commit-msg 'npx commitlint --edit $1'`);
  exec('git add .husky/');
}

/**
 * Commit changes.
 */
if (isGit) {
  log('Committing changes...');
  exec(
    `git commit -m 'chore: set up conventional release' -m '${name} v${version}'`
  );
}

log(`Finished ${name}`);
