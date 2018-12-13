import authorization from 'helpers/authorization';

import Home from 'pages/Home';
import About from 'pages/About';
import Topics from 'pages/Topics';

const user = authorization(['user', 'manager', 'admin']);
const manager = authorization(['manager', 'admin']);

const routes = {
    Home: {
        path: '/',
        component: Home
    },
    About: {
        path: '/about',
        component: user(About)
    },
    Topics: {
        path: '/topics',
        component: manager(Topics)
    }
};

export default routes;
