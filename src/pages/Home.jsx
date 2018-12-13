import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Input, Select } from 'semantic-ui-react';

import { fetchUsers } from 'actions/Users';

import Layout from 'components/Layout';
import OwnTable from 'components/OwnTable';

import './assets/styles/home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 10,
            offset: 0
        };

        this.filterCallback = this.filterCallback.bind(this);
        this.pagesCallback = this.pagesCallback.bind(this);
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

    pagesCallback(event, { value }) {
        this.setState(
            {
                limit: value
            },
            () => {
                const { offset, limit } = this.state;
                this.props.fetchUsers('', offset, limit);
            }
        );
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

        const selectPagesOptions = [
            { key: 5, value: 5, text: '5' },
            { key: 10, value: 10, text: '10' },
            { key: 25, value: 25, text: '25' }
        ];

        return (
            <Layout>
                <h2>Users</h2>
                <div>
                    <div className="controls-container">
                        <div className="controls-container__seach-container">
                            <Input placeholder="Search by last name..." onChange={this.filterCallback} />
                        </div>
                        <div className="controls-container__pages-container">
                            <Select options={selectPagesOptions} value={limit} onChange={this.pagesCallback} />
                        </div>
                    </div>
                    <div>
                        <OwnTable
                            rows={users}
                            header={header}
                            totalRows={totalRows}
                            itemsOnPage={limit}
                            offset={offset}
                            fetchFunction={fetchUsers}
                        />
                    </div>
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
