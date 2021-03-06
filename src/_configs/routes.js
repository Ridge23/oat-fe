import Home from 'pages/Home';
import User from 'pages/User';

const routes = {
    Home: {
        path: '/',
        component: Home
    },
    User: {
        path: '/users/:id',
        component: User
    }
};

export default routes;
