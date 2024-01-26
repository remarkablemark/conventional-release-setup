# conventional-release-setup

[![NPM](https://nodei.co/npm/conventional-release-setup.png)](https://nodei.co/npm/conventional-release-setup/)

[![NPM version](https://img.shields.io/npm/v/conventional-release-setup.svg)](https://www.npmjs.com/package/conventional-release-setup)
[![build](https://github.com/remarkablemark/conventional-release-setup/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/conventional-release-setup/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/conventional-release-setup/graph/badge.svg?token=9U6TQRNAZ9)](https://codecov.io/gh/remarkablemark/conventional-release-setup)

Sets up an npm project for committing and releasing with [Conventional Commits](https://www.conventionalcommits.org/):

```sh
npx conventional-release-setup
```

## Usage

Run the CLI:

```sh
npx conventional-release-setup
```

Or install the CLI globally and run:

```sh
npm install --global conventional-release-setup
conventional-release-setup
```

## Explanation

The script:

- updates `package.json`:
  - `version`
    - appends `-alpha`
  - `scripts`
    - prepends `release` with `husky install`
- installs devDependencies:
  - [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) - lints commit messages
  - [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) - config with [conventional commits](https://conventionalcommits.org/) rules
  - [husky](https://www.npmjs.com/package/husky) - sets up git hooks
  - [standard-version](https://www.npmjs.com/package/standard-version) - generates changelog, bumps version, and creates git commit and tag
- copies the config:
  - [.commitlintrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.commitlintrc.json)
- adds husky hook `commit-msg`

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

## Release

Release and publish are automated by [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/remarkablemark/conventional-release-setup/blob/master/LICENSE)
