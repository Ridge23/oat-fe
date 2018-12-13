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

## Services

Axios https://github.com/axios/axios is used by default for making api requests.
``services`` directory has 2 classes:
- ApiCallerService - wrapper for axios, which is a common access point to axios config.
- ServiceAbstract - abstract class which must be extended by all services. This way we are sure to use ApiCallerService by all other services.

## Router

Skeleton uses react-router v4, which encourages "dynamic" usage - read more at https://reacttraining.com/react-router/web/guides/philosophy
However, skeleton provides possibility to declare routes in config via ``_config/routes.js``.
You can use this config and render <Route> components iterating through it, but it is not mandatory (just removes some boilerplate).

## Redux

Redux is used for store functionality in skeleton alongside with:

- react-redux https://github.com/reduxjs/react-redux
- redux-thunk https://github.com/reduxjs/redux-thunk
- redux-devtools https://github.com/zalmoxisus/redux-devtools-extension

Folder structure and usage are trivial:

1. Create reducer in ``/reducers`` folder
2. Define reducer in ``/reducers/index.js``
3. Create actions in ``/actions`` folder
4. Read redux-thunk docs carefully, as it provides you with quite good functionality
5. Install redux-devtools in your browser

## Authentication and authorization

For session mechanism redux-react-sessions ( https://www.npmjs.com/package/redux-react-session ) is used.
For authorization, authorization HOC was created (``components/App.js/authorization``). This HOC is required to fetch user data,
check users role and determine if user can access defined route.
``src/_configs/routes.js`` file contains some examples of users roles and usage of routes based on this mechanis.

## Tests

Jest by facebook is used for testing by default.
Some information:

- https://facebook.github.io/jest/
- https://facebook.github.io/jest/docs/en/getting-started.html
- https://www.youtube.com/watch?v=sGKEm3-NFXw&t=1670s

Some jest config is specified in package.json. If you add some webpack alises or module directories, please be sure to add them to jest config also.
Each component should have a jest test inside its directory in tests subfolder.
Run tests with commands:

``npm test``

or

``yarn test``