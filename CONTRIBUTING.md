# Contributing

First Time? Get up a running:
```
git clone git@bitbucket.org:quillio/js-data-strucutres.git
cd ./js-data-strucutres
npm i -g lerna
lerna boostrap
```

## Working on a module
This repository is divided into multiple scoped npm packages. That means
that each directory under the `packages` directory is an independent module
that:
1. Is published as its own module on NPM
2. Should never import any part of a sibling module by file path
3. Never be published independently

When working on one of the modules make it your current directory.
From the modules directory we can run commands specifically for that module like:
1. Adding new npm dependencies with `yarn add <new-package>`
 
### Commands

Run the specs
`npm t`
