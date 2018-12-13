import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUsers } from 'actions/Users';

import { Icon, Label, Menu, Table } from 'semantic-ui-react';

import Layout from 'components/Layout';

import 'semantic-ui-css/semantic.min.css';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers('', 0, 10);
    }

    render() {
        const { users } = this.props;
        return (
            <Layout>
                <h2>Users</h2>
                <div>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Id</Table.HeaderCell>
                                <Table.HeaderCell>First Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {users.map((user) => {
                                return (
                                    <Table.Row key={user.id}>
                                        <Table.Cell>
                                            {user.id}
                                        </Table.Cell>
                                        <Table.Cell>{user.firstname}</Table.Cell>
                                        <Table.Cell>{user.lastname}</Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan="3">
                                    <Menu floated="right" pagination>
                                        <Menu.Item as="a" icon>
                                            <Icon name="chevron left" />
                                        </Menu.Item>
                                        <Menu.Item as="a">1</Menu.Item>
                                        <Menu.Item as="a">2</Menu.Item>
                                        <Menu.Item as="a">3</Menu.Item>
                                        <Menu.Item as="a">4</Menu.Item>
                                        <Menu.Item as="a" icon>
                                            <Icon name="chevron right" />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
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
        users: state.users.users
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
