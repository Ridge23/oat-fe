import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
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
                    <h1 className="App-title">
                        <FormattedMessage id="app.title" />
                    </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
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
