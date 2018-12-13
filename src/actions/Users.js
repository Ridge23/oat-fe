import {
    REQUEST_USERS_ACTION,
    RECEIVE_USERS_ACTION,
    RECEIVE_USERS_FAILED_ACTION,
    REQUEST_USER_ACTION,
    RECEIVE_USER_ACTION,
    RECEIVE_USER_FAILED_ACTION
} from 'reducers/Users';

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

const requestUser = () => {
    return {
        type: REQUEST_USER_ACTION
    };
};

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER_ACTION,
        user
    };
};

const receiveUserFailed = (error) => {
    return {
        type: RECEIVE_USER_FAILED_ACTION,
        error
    };
};

const fetchUser = (id) => {
    return async function(dispatch) {
        dispatch(requestUser());

        try {
            const { data } = await userService.getUser(id);
            dispatch(receiveUser(data));
        } catch (error) {
            dispatch(receiveUserFailed(error));
            throw error;
        }
    };
};

export { fetchUsers, fetchUser };
