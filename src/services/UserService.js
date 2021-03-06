import ServiceAbstract from 'services/ServiceAbstract';

class UserService extends ServiceAbstract {
    getUsers(filter = '', offset = 0, limit = 10) {
        return this.apiCaller.get(`users/?offset=${offset}&limit=${limit}&lastname=${filter}`);
    }

    getUser(id) {
        return this.apiCaller.get(`users/${id}`);
    }
}

export default new UserService();
