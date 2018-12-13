const initState = {
    users: [],
    page: 1,
    isFetching: false,
    filter: '',
    itemsPerPage: 10,
    totalRows: 0,
    user: {}
};

const REQUEST_USERS_ACTION = 'REQUEST_USERS';
const RECEIVE_USERS_ACTION = 'RECEIVE_USERS';
const RECEIVE_USERS_FAILED_ACTION = 'RECEIVE_USERS_FAILED';

const REQUEST_USER_ACTION = 'REQUEST_USER';
const RECEIVE_USER_ACTION = 'RECEIVE_USER';
const RECEIVE_USER_FAILED_ACTION = 'RECEIVE_USER_FAILED';

const Users = (state = initState, action) => {
    switch (action.type) {
        case REQUEST_USER_ACTION:
        case REQUEST_USERS_ACTION: {
            return {
                ...state,
                isFetching: true
            };
        }
        case RECEIVE_USERS_ACTION: {
            return {
                ...state,
                isFetching: false,
                users: action.users,
                totalRows: action.totalRows
            };
        }
        case RECEIVE_USER_ACTION: {
            return {
                ...state,
                isFetching: false,
                user: action.user
            };
        }
        case RECEIVE_USER_FAILED_ACTION:
        case RECEIVE_USERS_FAILED_ACTION: {
            return {
                ...state,
                isFetching: false
            };
        }
        default: {
            return state;
        }
    }
};

export {
    Users as default,
    REQUEST_USERS_ACTION,
    RECEIVE_USERS_ACTION,
    RECEIVE_USERS_FAILED_ACTION,
    REQUEST_USER_ACTION,
    RECEIVE_USER_ACTION,
    RECEIVE_USER_FAILED_ACTION
};
