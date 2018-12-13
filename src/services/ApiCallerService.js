import axios from 'axios';
import appConfig from 'app-config';

/**
 * Abstract layer for axios library.
 * It will help to store some application-wide logic for making request
 * (e.g, set authorisation header, cookie etc.)
 * Singleton.
 */
class ApiCallerService {
    constructor() {
        this.apiCaller = axios.create({
            baseURL: appConfig.api.backend.host,
            timeout: appConfig.api.backend.timeout,
            headers: {
                Accept: 'application/json'
            }
        });
    }

    get(url = '', config = {}) {
        return this.apiCaller.get(url, config);
    }

    post(url = '', data = {}) {
        return this.apiCaller.post(url, data);
    }

    patch(url = '', data = {}) {
        return this.apiCaller.patch(url, data);
    }

    delete(url = '', config = {}) {
        return this.apiCaller.delete(url, config);
    }

    setHeader(name = '', value = '') {
        this.apiCaller.defaults.headers.common[ name ] = value;
    }
}

export default new ApiCallerService();
