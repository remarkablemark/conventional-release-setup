# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.2.1](https://github.com/remarkablemark/conventional-release-setup/compare/v2.2.0...v2.2.1) (2024-03-04)


### Miscellaneous Chores

* release 2.2.1 ([2507b63](https://github.com/remarkablemark/conventional-release-setup/commit/2507b63b42ff51f92647102e63cdbecaf12cbd78))

## [2.2.0](https://github.com/remarkablemark/conventional-release-setup/compare/v2.1.0...v2.2.0) (2024-01-26)


### Features

* **husky:** migrate husky from 8 to 9 ([178f49f](https://github.com/remarkablemark/conventional-release-setup/commit/178f49f5cc3a35f95ed9c7a5553bd3c50276b3ec))

## [2.1.0](https://github.com/remarkablemark/conventional-release-setup/compare/v2.0.0...v2.1.0) (2024-01-14)


### Features

* **files:** update .github/workflows/release-please.yml to use v4 ([cf52163](https://github.com/remarkablemark/conventional-release-setup/commit/cf521636b3b1f3f641f9737f57fee541ac517eba))

## [2.0.0](https://github.com/remarkablemark/conventional-release-setup/compare/v1.2.2...v2.0.0) (2023-09-02)


### ⚠ BREAKING CHANGES

* replace `standard-version` with `release-please.yml`

### Features

* replace `standard-version` with `release-please.yml` ([f2eaa64](https://github.com/remarkablemark/conventional-release-setup/commit/f2eaa645ffbfa3611cd742f9c5c49f6c41bbdc02))

## [1.2.2](https://github.com/remarkablemark/conventional-release-setup/compare/v1.2.1...v1.2.2) (2022-06-06)

### Bug Fixes

- **index:** fix script so $1 is added to husky hook commit-msg ([49b894a](https://github.com/remarkablemark/conventional-release-setup/commit/49b894abeacb5509c1ac857d76ae87996875a4ce))

## [1.2.1](https://github.com/remarkablemark/conventional-release-setup/compare/v1.2.0...v1.2.1) (2021-02-28)

### Bug Fixes

- **index:** add husky hooks and commit only if git repo exists ([0821957](https://github.com/remarkablemark/conventional-release-setup/commit/082195750a233460099e6f99f4dfade5915533ac))
- **index:** prepend package.json scripts instead of overriding them ([f8dd146](https://github.com/remarkablemark/conventional-release-setup/commit/f8dd146aabd31e22930bbc2965f2bf05d25043d6))

## [1.2.0](https://github.com/remarkablemark/conventional-release-setup/compare/v1.1.1...v1.2.0) (2021-02-16)

### Features

- **husky:** update script to set up husky v5 ([510090a](https://github.com/remarkablemark/conventional-release-setup/commit/510090aac7e94ba7b1d98d44193639947fa83fbc))

## [1.1.1](https://github.com/remarkablemark/conventional-release-setup/compare/v1.1.0...v1.1.1) (2020-06-20)

### Bug Fixes

- **index:** do not append `-alpha` to package.json version ([ec2ea84](https://github.com/remarkablemark/conventional-release-setup/commit/ec2ea84bd1dc35dd5c03083d84a4318a3b2738e4))

## [1.1.0](https://github.com/remarkablemark/conventional-release-setup/compare/v1.0.1...v1.1.0) (2020-06-05)

### Features

- **cli:** add files to git and commit changes with message ([c878c3d](https://github.com/remarkablemark/conventional-release-setup/commit/c878c3d918d47b3e3f33b4eb9886d54d269754ed))
- **cli:** log exit status code and when script is done ([a887f17](https://github.com/remarkablemark/conventional-release-setup/commit/a887f1728430e0e6effc45eed0204910ea1cbc11))
- **cli:** set version to 1.0.0-alpha if new package.json initialized ([4fb2c10](https://github.com/remarkablemark/conventional-release-setup/commit/4fb2c108253cb5cfa07a34f68b82fcc634b5d4e9))
- **index:** run git commands if working directory is a git repo ([14a61d8](https://github.com/remarkablemark/conventional-release-setup/commit/14a61d89615dbf6da17d42ff88592e0d45af61d2))
- **index:** update package.json version and scripts.release ([f51e1ae](https://github.com/remarkablemark/conventional-release-setup/commit/f51e1ae9b11066def68c2c90a1800351c4c5b261))

### Bug Fixes

- **index:** remove backticks in git commit command and tidy logs ([040c3c4](https://github.com/remarkablemark/conventional-release-setup/commit/040c3c4588e8cbdabffb31240629dc4540848eef))

## [1.0.1](https://github.com/remarkablemark/conventional-release-setup/compare/v1.0.0...v1.0.1) (2020-03-24)

## 1.0.0 (2020-02-17)

### Features

- **cli:** add script that installs devDependencies & copies files ([5d4d36c](https://github.com/remarkablemark/conventional-release-setup/commit/5d4d36cafa4b94a87d616eeb9603a807daf30260))
- **files:** add `.commitlintrc.json` and `.huskyrc` ([5e1ea33](https://github.com/remarkablemark/conventional-release-setup/commit/5e1ea33794b01fa82e42e5520e7bb17a77da2e98))
