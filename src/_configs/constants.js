/* eslint import/prefer-default-export: 0 */
/* eslint prefer-destructuring: 0 */

import _intersection from 'lodash/intersection';

export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = [DEFAULT_LANGUAGE];
export const AVAILABLE_LANGUAGES = process.env.ERS_APP_AVAILABLE_LANGUAGES;
export const FILTERERED_AVAILABLE_LANGUAGES = _intersection(
    SUPPORTED_LANGUAGES,
    AVAILABLE_LANGUAGES.split(',')
);
