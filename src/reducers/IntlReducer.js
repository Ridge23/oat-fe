import { enabledLanguages, localeData } from 'i18n/Intl';

import { DEFAULT_LANGUAGE } from 'app-constants';

const defaultLocale = sessionStorage.getItem('locale') || DEFAULT_LANGUAGE; // 'en';

const defaultState = {
    locale: defaultLocale,
    enabledLanguages,
    ...(localeData[ defaultLocale ] || {})
};

/**
 * Reducer action types
 */
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

/**
 * Intl redux reducer
 *
 * @param {object} state
 * @param {string} action
 *
 * @return {state}
 */
const intlReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return Object.assign({}, state, {
                locale: action.locale,
                messages: action.messages
            });
        default:
            return state;
    }
};

export default intlReducer;
