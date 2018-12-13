import React from 'react';
import { Redirect } from 'react-router';

const authorization = (allowedRoles) => {
    return (WrappedComponent) => {
        return class WithAuthorization extends React.Component {
            constructor(props) {
                super(props);

                // @todo Load user somehow (from redux etc.)
                this.state = {
                    user: {
                        name: 'pavel',
                        role: 'user'
                    }
                };
            }

            render() {
                const { role } = this.state.user || '';

                if (allowedRoles.includes(role)) {
                    return <WrappedComponent {...this.props} />;
                }

                // @todo Extend this by returning forbidden page, redirection etc.
                return <Redirect to="/" />;
            }
        };
    };
};

export default authorization;
