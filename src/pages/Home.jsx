import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUsers } from 'actions/Users';

import Layout from 'components/Layout';
import OwnTable from 'components/OwnTable/OwnTable';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 10,
            offset: 0
        };
    }
    componentDidMount() {
        const { offset, limit } = this.state;

        this.props.fetchUsers('', offset, limit);
    }

    render() {
        const { users } = this.props;

        const header = [
            {
                key: 'id',
                value: 'ID'
            },
            {
                key: 'firstname',
                value: 'First Name'
            },
            {
                key: 'lastname',
                value: 'Last Name'
            }
        ];

        return (
            <Layout>
                <h2>Users</h2>
                <div>
                    <OwnTable rows={users} header={header} />
                </div>
            </Layout>
        );
    }
}

Home.propTypes = {
    users: PropTypes.array,
    fetchUsers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users.users,
        totalRows: state.users.totalRows
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers(filter, offset, limit) {
            dispatch(fetchUsers(filter, offset, limit));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
