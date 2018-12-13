import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';

import reducers from 'reducers';

// import authMiddleware from 'middlewares/authMiddleware'

const history = createBrowserHistory();

const middleware = [
    // authMiddleware
    thunkMiddleware,
    routerMiddleware(history)
];

const composeWithEnhancers = composeWithDevTools({
    maxAge: 500
});

const store = createStore(
    reducers,
    composeWithEnhancers(applyMiddleware(...middleware))
);

export { store as default, history };
