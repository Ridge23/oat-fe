import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout>Some content</Layout>, div);
    ReactDOM.unmountComponentAtNode(div);
});
