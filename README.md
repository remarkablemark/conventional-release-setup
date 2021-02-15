# conventional-release-setup

[![NPM](https://nodei.co/npm/conventional-release-setup.png)](https://nodei.co/npm/conventional-release-setup/)

[![NPM version](https://img.shields.io/npm/v/conventional-release-setup.svg)](https://www.npmjs.com/package/conventional-release-setup)
[![Build Status](https://travis-ci.org/remarkablemark/conventional-release-setup.svg?branch=master)](https://travis-ci.org/remarkablemark/conventional-release-setup)

Sets up an npm package for committing and releasing with [conventional commits](https://www.conventionalcommits.org/):

```sh
npx conventional-release-setup
```

## Install

To install the package globally:

```sh
# with npm
npm install --global conventional-release-setup

# with yarn
yarn global add conventional-release-setup
```

## Usage

If the package is installed globally, you can execute it in the command-line:

```sh
conventional-release-setup
```

Otherwise, you can install and execute the package binary like so:

```sh
npx conventional-release-setup
```

## Explanation

What does the script do?

It updates `package.json`:

- appends `-alpha` to version
- adds script `release`

Installs devDependencies:

- [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) - lints commit messages
- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) - config with [conventional commits](https://conventionalcommits.org/) rules
- [husky](https://www.npmjs.com/package/husky) - sets up Git hooks
- [standard-version](https://www.npmjs.com/package/standard-version) - generates changelog, bumps version, creates Git commit and tag

Copies configs to your project:

- [.commitlintrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.commitlintrc.json)
- [.huskyrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.huskyrc.json)

## Release

If `-alpha` is appended to your `package.json` version:

```json
{
  "version": "1.0.0-alpha"
}
```

You can run a release like so:

```sh
npm run release # npx standard-version --no-verify
```

Otherwise, you can [release as a target type imperatively](https://github.com/conventional-changelog/standard-version#release-as-a-target-type-imperatively-npm-version-like):

```sh
npx standard-version --release-as 1.0.0
```

Or if you want to use the current version as your [first release](https://github.com/conventional-changelog/standard-version#first-release):

```sh
npx standard-version --first-release
```

## Lint

Lint files:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
npm run release
git push --follow-tags && npm publish
```

## License

[MIT](https://github.com/remarkablemark/conventional-release-setup/blob/master/LICENSE)
