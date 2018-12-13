import { REQUEST_USERS_ACTION, RECEIVE_USERS_ACTION, RECEIVE_USERS_FAILED_ACTION } from 'reducers/Users';

import userService from 'services/UserService';

const requestUsers = () => {
    return {
        type: REQUEST_USERS_ACTION
    };
};

const receiveUsers = (users, totalRows) => {
    return {
        type: RECEIVE_USERS_ACTION,
        users,
        totalRows
    };
};

const receiveUsersFailed = (error) => {
    return {
        type: RECEIVE_USERS_FAILED_ACTION,
        error
    };
};

const fetchUsers = (filter = '', offset = 0, limit = 10) => {
    return async function(dispatch) {
        dispatch(requestUsers());

        try {
            const { data } = await userService.getUsers(filter, offset, limit);
            dispatch(receiveUsers(data.data, data.total));
        } catch (error) {
            dispatch(receiveUsersFailed(error));
            throw error;
        }
    };
};

export { fetchUsers, userService };
