# Eslint Config Atomic Jolt

## Purpose
For a long time we used the Airbnb config for out lint rules. However, now we have reached a point where we are confident that we know how we like to develop and what styles we like to follow. This package defines all of the rules that we follow at Atomic Jolt.

## Installation
`yarn install eslint-plugin-atomicjolt`

In your eslintrc.yml file you should have something like the following:
```
---
ecmaFeatures:
  jsx: true
  modules: true
env:
  browser: true
  es6: true
extends: atomicjolt
parser: babel-eslint
plugins:
  - react
  - jsx-a11y
  - import
globals:
  describe: false
  beforeAll: false
  beforeEach: false
  afterEach: false
  it: false
  expect: false
  xit: false
  spyOn: false
  jasmine: false
  module: false
  jest: false
  Rollbar: false
  __DEV__: false
```

## Changing rules
Please don't just ignore or add rules in your project's eslintrc file. If you think there is a rule worth following or ignoring then please submit a pr to this repo so that we can be consistent across projects.
