import { combineReducers } from 'redux';

import { sessionReducer } from 'redux-react-session';
import IntlReducer from './IntlReducer';
import UsersReducer from './Users';

const appReducer = combineReducers({
    intl: IntlReducer,
    session: sessionReducer,
    users: UsersReducer
});

export default appReducer;
