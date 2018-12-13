import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Input } from 'semantic-ui-react';

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

        this.filterCallback = this.filterCallback.bind(this);
    }
    componentDidMount() {
        const { offset, limit } = this.state;

        this.props.fetchUsers('', offset, limit);
    }

    filterCallback(event) {
        const { offset, limit } = this.state;
        const inputValue = event.target.value;

        this.props.fetchUsers(inputValue.length > 2 ? inputValue : '', offset, limit);
    }

    render() {
        const { users, totalRows, fetchUsers } = this.props;
        const { limit, offset } = this.state;

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
                    <Input placeholder="Search by name..." onChange={this.filterCallback} />
                    <OwnTable
                        rows={users}
                        header={header}
                        totalRows={totalRows}
                        itemsOnPage={limit}
                        offset={offset}
                        fetchFunction={fetchUsers}
                    />
                </div>
            </Layout>
        );
    }
}

Home.propTypes = {
    users: PropTypes.array,
    fetchUsers: PropTypes.func.isRequired,
    totalRows: PropTypes.number.isRequired
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
