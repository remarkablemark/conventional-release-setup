# conventional-release-setup

[![NPM](https://nodei.co/npm/conventional-release-setup.png)](https://nodei.co/npm/conventional-release-setup/)

[![NPM version](https://img.shields.io/npm/v/conventional-release-setup.svg)](https://www.npmjs.com/package/conventional-release-setup)

<!--
[![Build Status](https://travis-ci.org/remarkablemark/conventional-release-setup.svg?branch=master)](https://travis-ci.org/remarkablemark/conventional-release-setup)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/conventional-release-setup/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/conventional-release-setup?branch=master)
-->

A command-line tool for setting up a package for committing and releasing with [conventional commits](https://www.conventionalcommits.org/):

```sh
$ npx conventional-release-setup
```

## Installation

To install the package globally:

```sh
# with npm
$ npm install --global conventional-release-setup

# with yarn
$ yarn global add conventional-release-setup
```

## Usage

If the package is installed globally, you can execute it in the command-line:

```sh
$ conventional-release-setup
```

Otherwise, you can install and execute the package binary like so:

```sh
$ npx conventional-release-setup
```

What does the script do?

It installs the devDependencies:

- [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) - lints commit messages
- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) - config with [conventional commits](https://conventionalcommits.org/) rules
- [husky](https://www.npmjs.com/package/husky) - sets up Git hooks
- [standard-version](https://www.npmjs.com/package/standard-version) - generates changelog, bumps version, creates Git commit and tag

And copies the configs to your project root:

- [.commitlintrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.commitlintrc.json)
- [.huskyrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.huskyrc.json)

For your first release, you can do the following:

```sh
$ npx standard-version --release-as 1.0.0
```

See [standard-version > Release as a Target Type Imperatively](https://github.com/conventional-changelog/standard-version#release-as-a-target-type-imperatively-npm-version-like).

Alternatively, you can run as [first release](https://github.com/conventional-changelog/standard-version#first-release) as well:

```sh
$ npx standard-version --first-release
```

## Release

Only collaborators with credentials can release and publish:

```sh
$ npm run release
$ git push --follow-tags && npm publish
```

## License

[MIT](https://github.com/remarkablemark/conventional-release-setup/blob/master/LICENSE)
