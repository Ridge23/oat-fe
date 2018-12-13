import React from 'react';
import { injectIntl } from 'react-intl';
import { Router, Route } from 'react-router-dom';

import appRoutes from 'app-routes';
import { history } from 'store';

import logo from './images/logo.svg';
import './styles/App.scss';

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div>
                    {Object.values(appRoutes).map(({ path, component }) => {
                        return <Route exact path={path} component={component} key={path} />;
                    })}
                </div>
            </div>
        </Router>
    );
}

export default injectIntl(App);
