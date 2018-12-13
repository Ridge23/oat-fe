import React from 'react';
import PropTypes from 'prop-types';

import './assets/styles/layout.scss';

function Layout({ children }) {
    return <div className="layout">{children}</div>;
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
