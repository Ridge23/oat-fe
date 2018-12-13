const config = {
    api: {
        backend: {
            host: process.env.ERS_APP_BACKEND_HOST,
            timeout: 1000
        }
    }
};

config.defaultDateFormat = 'DD/MM/YYYY';

export default config;
