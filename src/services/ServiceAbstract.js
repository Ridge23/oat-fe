import ApiCaller from './ApiCallerService';

/**
 * Abstract class which must be extended by every service which does requests to backend.
 * It ensures usage of default apiCaller by services.
 */
class ServiceAbstract {
    constructor() {
        if (new.target === ServiceAbstract) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }

        this.apiCaller = ApiCaller;
    }
}

export default ServiceAbstract;
