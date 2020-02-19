# conventional-release-setup

[![NPM](https://nodei.co/npm/conventional-release-setup.png)](https://nodei.co/npm/conventional-release-setup/)

[![NPM version](https://img.shields.io/npm/v/conventional-release-setup.svg)](https://www.npmjs.com/package/conventional-release-setup)
[![Build Status](https://travis-ci.org/remarkablemark/conventional-release-setup.svg?branch=master)](https://travis-ci.org/remarkablemark/conventional-release-setup)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/conventional-release-setup/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/conventional-release-setup?branch=master)

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

What does this script do?

It installs the devDependencies:

- [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) - lints commit messages
- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) - config with [conventional commits](https://conventionalcommits.org/) rules
- [husky](https://www.npmjs.com/package/husky) - sets up Git hooks
- [standard-version](https://www.npmjs.com/package/standard-version) - generates changelog and bumps version

And copies the configs to your project root:

- [.commitlintrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.commitlintrc.json)
- [.huskyrc](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.huskyrc)

For your first release, it's recommended to do the following:

```sh
# git stash
$ npm version 1.0.0
$ git add package.json
$ git commit -m 'chore(package): bump version to 1.0.0'
$ npx standard-version --first-release
# git stash pop
```

See [standard-version > First Release](https://github.com/conventional-changelog/standard-version#first-release) for more details.

## Release

Only collaborators with credentials can release and publish:

```sh
$ npm run release
$ git push --follow-tags && npm publish
```

## License

[MIT](https://github.com/remarkablemark/conventional-release-setup/blob/master/LICENSE)
