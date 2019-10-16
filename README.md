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
