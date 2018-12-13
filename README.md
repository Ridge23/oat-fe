React Skeleton App

## Intro

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Ejected version with some modifications is used.

To start development, do:

```
npm install
npm start
```

To create a production build, run:

``
npm run build
``

## Config

Application has 2 config folders, one in the root of application, another is src.

- /config has application build and webpack related configs
- /src/_config holds configs which are used by application itself

Every env-specific config (e.g. hostname, backend api URL) should be defined via ENV variable, which could be set in .env file in root folder.
If you define a new ENV var inside .env, put it in the .env.dist file as a stub, as .env is ignored by git.

Due to security reasons, each and every .env variable should be prefixed by "ERS_APP_" (this is due to the fact that webpack while building checks ALL the ENV vars on machine, and this prefix is used to filter out all ENV vars which do not belong to current application).

## Folder structure

/ folders:

- config - build-specific configs
- public - statics
- scripts - development
- src - application logic

/src folders:

- _config - holds application-specific configs
- actions - redux actions
- components - all standalone components and redux-containers
- middlewares - redux middlewares
- pages - components which represent some react-router route
- reducers - redux reducers
- services - business logic to call backend services etc.

## Router

Application uses react-router v4, which encourages "dynamic" usage - read more at https://reacttraining.com/react-router/web/guides/philosophy
However, skeleton provides possibility to declare routes in config via ``_config/routes.js``.
You can use this config and render <Route> components iterating through it, but it is not mandatory (just removes some boilerplate).

## Tests

Jest by facebook is used for testing by default.
Some information:

- https://facebook.github.io/jest/

Run tests with commands:

``npm test``

or

``yarn test``