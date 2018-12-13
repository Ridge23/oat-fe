const initState = {
    users: [],
    page: 1,
    isFetching: false,
    filter: '',
    itemsPerPage: 10
};

const REQUEST_USERS_ACTION = 'REQUEST_USERS';
const RECEIVE_USERS_ACTION = 'RECEIVE_USERS';
const RECEIVE_USERS_FAILED_ACTION = 'RECEIVE_USERS_FAILED';

const Users = (state = initState, action) => {
    switch (action.type) {
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
                users: action.users
            }
        }
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

export { Users as default, REQUEST_USERS_ACTION, RECEIVE_USERS_ACTION, RECEIVE_USERS_FAILED_ACTION };
