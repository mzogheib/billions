# Billions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Getting Started

1. Clone the repo
2. Create a `.env` file in the root directory. Get your personal access token [here](https://www.discogs.com/settings/developers).

```bash
REACT_APP_DISCOGS_TOKEN=replace-with-personal-access-token
```

3. Start

```bash
yarn start
```

## Linting & Code Formatting

- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

## Commit Messages

- Commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).
- They are enforced via [commitlint](https://github.com/conventional-changelog/commitlint) on the `master` branch.
- GitHub enforces PR titles also follow this specification.

## Releases & Changelog

- Based on the commit messages [standard-version](https://github.com/conventional-changelog/standard-version) is used to bump version and generate the changelog

```bash
yarn release
```

## TODO

- Add React Playroom
- Add Storybook
- Split into monorepo so that Playroom and Storybook are in separate packages

## Random things

- Should each screen specify padding or should it be global in a root Box?
