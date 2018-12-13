import { combineReducers } from 'redux';

import { sessionReducer } from 'redux-react-session';
import IntlReducer from './IntlReducer';

const appReducer = combineReducers({
    intl: IntlReducer,
    session: sessionReducer
});

export default appReducer;
