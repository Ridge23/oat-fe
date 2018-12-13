import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import IntlWrapper from 'i18n/Intl';
import store from 'store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <IntlWrapper>
                <App />
            </IntlWrapper>
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
