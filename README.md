# Billions

Interactions with the [Discogs API](https://www.discogs.com/developers)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Development & Release Process

### Pre-development

- Create an issue in GitHub describing the required changes

### Development

- Create a feature branch off `master` and reference the issue number in the name, e.g.

```
git checkout -b ISSUE/#23
```

- Develop and commit. Commit messages can be anything, short and meanigful
- When a feature is complete push the branch to remote and raise a PR
- Ensure the PR title follows the [Conventional Commits specification](https://conventionalcommits.org) specification. An example title is

```
feat: New results page
```

- Squash & merge the PR to `master`

#### Notes

- Commit messages on `master` in the CLI are enforced via [commitlint](https://github.com/conventional-changelog/commitlint)
- PR titles on GitHub are enforced via [Semantic Pull Requests](https://github.com/zeke/semantic-pull-requests)

### Release

- Based on the commit messages [standard-version](https://github.com/conventional-changelog/standard-version) is used to bump version and generate the changelog

```bash
yarn release
yarn publish-release
```

## TODO

- Add React Playroom
- Add Storybook
- Split into monorepo so that Playroom and Storybook are in separate packages

## Random things

- Should each screen specify padding or should it be global in a root Box?
