# conventional-release-setup

[![NPM](https://nodei.co/npm/conventional-release-setup.png)](https://nodei.co/npm/conventional-release-setup/)

[![NPM version](https://img.shields.io/npm/v/conventional-release-setup.svg)](https://www.npmjs.com/package/conventional-release-setup)
[![build](https://github.com/remarkablemark/conventional-release-setup/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/conventional-release-setup/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/conventional-release-setup/graph/badge.svg?token=9U6TQRNAZ9)](https://codecov.io/gh/remarkablemark/conventional-release-setup)

Sets up an npm project for committing and releasing with [Conventional Commits](https://www.conventionalcommits.org/):

```sh
npx conventional-release-setup@latest
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

If you want to release with [standard-version](https://www.npmjs.com/package/standard-version), then use v1:

```sh
npx conventional-release-setup@1
```

## What It Does

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
- copies the configs:
  - [.github/workflows/release-please.yml](https://github.com/googleapis/release-please-action) - generates changelog, bumps version, and creates git commit, tag, and release
  - [.commitlintrc.json](https://github.com/remarkablemark/conventional-release-setup/blob/master/files/.commitlintrc.json)
- adds husky hook `commit-msg`

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please-action).

## License

[MIT](https://github.com/remarkablemark/conventional-release-setup/blob/master/LICENSE)
