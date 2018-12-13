import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Table, Button } from 'semantic-ui-react';

import Layout from 'components/Layout';

import { history } from 'store';
import { fetchUser } from 'actions/Users';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const {
            match: {
                params: { id: userId }
            },
            fetchUser
        } = this.props;

        fetchUser(userId);
    }

    backAction() {
        history.push('/');
    }

    render() {
        const { user } = this.props;
        return (
            <Layout>
                <Button onClick={this.backAction}>Back</Button>
                <Table className="user-table">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>ID</Table.Cell>
                            <Table.Cell>{user.id}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Email</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Login</Table.Cell>
                            <Table.Cell>{user.login}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Password</Table.Cell>
                            <Table.Cell>{user.password}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Title</Table.Cell>
                            <Table.Cell>{user.title}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>First Name</Table.Cell>
                            <Table.Cell>{user.firstname}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Last Name</Table.Cell>
                            <Table.Cell>{user.lastname}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Gender</Table.Cell>
                            <Table.Cell>{user.gender}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Address</Table.Cell>
                            <Table.Cell>{user.address}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Picture</Table.Cell>
                            <Table.Cell>{user.picture}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Layout>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.users.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser(id) {
            dispatch(fetchUser(id));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
