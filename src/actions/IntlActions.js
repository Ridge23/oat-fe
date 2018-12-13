import Cookies from 'js-cookie';

import { localeData } from 'i18n/Intl';

/**
 * Reducer action types
 */
import { SWITCH_LANGUAGE } from 'reducers/IntlReducer';

/**
 * Language switching action
 * @param language
 * @return {function(*)}
 */
const switchLanguage = (language) => {
    // Creation of a cookie for the new selected language, validity of 7 days
    Cookies.set('locale', language, { expires: 7 });
    sessionStorage.setItem('locale', language);

    return (dispatch) => {
        dispatch({
            type: SWITCH_LANGUAGE,
            locale: language,
            messages: localeData[ language ].messages
        });
    };
};

export default switchLanguage;
