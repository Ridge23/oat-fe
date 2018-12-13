import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';

import en from 'react-intl/locale-data/en';

import { FILTERERED_AVAILABLE_LANGUAGES } from 'app-constants';

addLocaleData(en);

/**
 * Enabled Languages
 */
const enabledLanguages = FILTERERED_AVAILABLE_LANGUAGES;

const localeData = {};

enabledLanguages.forEach(async (localeName) => {
    const messages = getLocaleMessages(localeName);

    localeData[ localeName ] = {
        messages
    };
});

/**
 * Gets all locale messages and sets up locale for application.
 *
 * @param {string} localeName
 */
function getLocaleMessages(localeName) {
    const basicLocaleData = require(`i18n/locales/${localeName}.js`);
    const custLocaleData = require(`i18n/locales/customer/${localeName}.js`);

    const messages = flattenMessages(basicLocaleData.default.messages);

    Object.assign(messages, flattenMessages(custLocaleData.default.messages));

    return messages;
}

/**
 * Util to flatten nested messages
 *
 * @param nestedMessages
 * @param prefix
 * @return {*}
 */
function flattenMessages(nestedMessages = {}, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[ key ];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            messages[ prefixedKey ] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }
        return messages;
    }, {});
}

/**
 * React Intl Redux Wrapper
 *
 * @param props
 * @constructor
 */
const IntlWrapper = ({ intl, children }) => <IntlProvider {...intl}>{children}</IntlProvider>;

/**
 * IntlWrapper propTypes validation
 *
 * @prop {element} children - isRequired
 * @prop {object} intl - isRequired
 */
IntlWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    intl: PropTypes.object.isRequired
};

/**
 * Mapping the Redux state to the IntlWrapper props
 *
 * @param state
 * @return {object}
 */
function mapStateToProps(state) {
    return {
        intl: state.intl
    };
}

export default connect(mapStateToProps)(IntlWrapper);
export { localeData, enabledLanguages };
