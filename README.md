# Notes for Babel

Notes for understanding and configuring Babel

## Basic concepts

- Transpile: make code available in browsers/environments that don't support it

- APIs: objects and functionalities such as Map and async/generator functions

- Polyfill: code used to transpile APIs

- Inject: declare imports of code e.g. `require('polyfill')`

- `core-js`: polyfill for APIs such as `Map`, `Promise`, `Array.from`

- `regenerator-runtime`: polyfill for async/generator functions

- Babel: tool for transpiling/injecting syntaxes and APIs

- Babel plugins: packages for handling transpiling

- Babel presets: collection of plugins

## Babel 7 concepts

- `@babel/preset-env`: preset for transpiling syntaxes and injecting polyfill

- `@babel/plugin-transform-runtime`: plugin for saving codesize and injecting polyfill in other than in the global scope

- `@babel/runtime`: helpers and `regenerator-runtime` for `@babel/plugin-transform-runtime`

- `@babel/runtime-corejs3`: `core-js@3` and `regenerator-runtime` for `@babel/plugin-transform-runtime`

## Babel 7.4.0+

### Recommended configurations

#### Configuration 1

Syntax is transpiled and polyfill is injected based on `@babel/runtime-corejs3`

```js
const presets = ['@babel/preset-env'];
const plugins = [['@babel/plugin-transform-runtime', { corejs: 3 }]];

module.exports = { presets, plugins };
```

Running/Bundling requires `@babel/runtime-corejs3` as production dependency

```
npm i --save @babel/runtime-corejs3
```

#### Configuration 2

Syntax is transpiled and polyfill is injected based on `core-js@3` and `regenerator-runtime`

```js
const presets = [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]];

module.exports = { presets };
```

Running/Bundling requires core-js and regenerator-runtime as production dependencies

```
npm i --save core-js regenerator-runtime
```

### Limited configurations

#### Configuration 1

Syntax is transpiled but no polyfill is injected

```js
const presets = ['@babel/preset-env'];

module.exports = { presets };
```

#### Configuration 2

No syntax is transpiled and only polyfill for async functions is injected

```js
const plugins = ['@babel/plugin-transform-runtime'];

module.exports = { plugins };
```

Running/Bundling requires `@babel/runtime` as production dependency

```
npm i --save @babel/runtime
```

#### Configuration 3

No syntax is transpiled and polyfill is injected based on `@babel/runtime-corejs3`. Injection is declared with ES6 modules (not supported on NodeJS).

```js
const plugins = [['@babel/plugin-transform-runtime', { corejs: 3 }]];

module.exports = { plugins };
```

Running/Bundling requires `@babel/runtime-corejs3` as production dependency

```
npm i --save @babel/runtime-corejs3
```

#### Configuration 4

Syntax is transpiled and only polyfill for async/generator functions is injected

```js
const presets = ['@babel/preset-env'];
const plugins = ['@babel/plugin-transform-runtime'];

module.exports = { presets, plugins };
```

Running/Bundling requires `@babel/runtime` as production dependency

```
npm i --save @babel/runtime
```

### Undesired configurations (don'use them)

#### Configuration 1

Syntax is transpiled but polyfill is injected twice based on `core-js@3` and `@babel/runtime-corejs3`

```js
const presets = [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]];
const plugins = [['@babel/plugin-transform-runtime', { corejs: 3 }]];

module.exports = { presets, plugins };
```

#### Configuration 2

Syntax is transpiled but polyfill for async/generator functions is injected twice based on `core-js@3` and `@babel/runtime-corejs3`

```js
const presets = [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]];
const plugins = ['@babel/plugin-transform-runtime'];

module.exports = { presets, plugins };
```

## Babel < 7.4.0

#### Configuration 1

Syntax is transpiled and polyfill is injected based on `core-js@2`

```js
const presets = [['@babel/preset-env', { useBuiltIns: 'usage' }]];

module.exports = { presets };
```

Running/Bundling requires `core-js` and `regenerator-runtime` as production dependencies. Both are wrapped in `@babel/polyfill`

```
npm i --save @babel/polyfill
```
