# stack

[React](https://facebook.github.io/react/), [React Router](https://github.com/rackt/react-router), [Redux](https://github.com/rackt/redux), [Immutable.js](https://facebook.github.io/immutable-js/), [CSS Modules](https://github.com/css-modules/css-modules), [Karma](http://karma-runner.github.io/0.13/index.html), [Mocha](https://mochajs.org/) and [Restify](https://github.com/restify/node-restify) as an API layer.

## Installation
```
git clone https://github.com/damassi/stack
cd stack
npm install
```

## Development

```
npm start
open http://localhost:3333
open http://localhost:8080 (api)

npm test
npm run test:watch
npm run lint
npm run build

```

### Testing
Tests are co-located with their sources within a `__test__` directory. This pattern encourages broader testing practices and makes it easier to find stuff.
