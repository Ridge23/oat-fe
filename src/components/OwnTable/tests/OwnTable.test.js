import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';

import OwnTable from '../OwnTable';

it('renders without crashing', () => {
    const div = document.createElement('div');
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

    const rows = [
        {
            id: 1,
            firstname: 'test',
            lastname: 'testtest'
        },
        {
            id: 2,
            firstname: 'test1',
            lastname: 'testtest1'
        },
        {
            id: 3,
            firstname: 'test2',
            lastname: 'testtest2'
        }
    ];

    const fetchFunction = function() {
        console.log('fetch');
    };

    const context = {};

    /* eslint-disable */
    ReactDOM.render(
        <StaticRouter context={context}>
            <OwnTable
                header={header}
                rows={rows}
                totalRows={2}
                itemsOnPage={2}
                offset={0}
                fetchFunction={fetchFunction}
            />
        </StaticRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
