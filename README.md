# Geenious

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
