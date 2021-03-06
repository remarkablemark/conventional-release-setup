# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.2.1](https://github.com/remarkablemark/conventional-release-setup/compare/v1.2.0...v1.2.1) (2021-02-28)


### Bug Fixes

* **index:** add husky hooks and commit only if git repo exists ([0821957](https://github.com/remarkablemark/conventional-release-setup/commit/082195750a233460099e6f99f4dfade5915533ac))
* **index:** prepend package.json scripts instead of overriding them ([f8dd146](https://github.com/remarkablemark/conventional-release-setup/commit/f8dd146aabd31e22930bbc2965f2bf05d25043d6))

## [1.2.0](https://github.com/remarkablemark/conventional-release-setup/compare/v1.1.1...v1.2.0) (2021-02-16)


### Features

* **husky:** update script to set up husky v5 ([510090a](https://github.com/remarkablemark/conventional-release-setup/commit/510090aac7e94ba7b1d98d44193639947fa83fbc))

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
