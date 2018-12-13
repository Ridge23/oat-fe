import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';

import store from 'store';
import IntlWrapper from 'i18n/Intl';

import App from 'components/App';

// import registerServiceWorker from './registerServiceWorker';

sessionService.initSessionService(store);

render(
    <Provider store={store}>
        <IntlWrapper>
            <App />
        </IntlWrapper>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
