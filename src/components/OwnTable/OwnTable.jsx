import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label, Menu, Table } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class OwnTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { header, rows } = this.props;

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {header.map((headerItem) => {
                            return <Table.HeaderCell key={headerItem.key}>{headerItem.value}</Table.HeaderCell>;
                        })}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {rows.map((row) => {
                        const cells = header.map(({ key }) => {
                            return <Table.Cell key={`${row.id}-${row.key}`}>{row[ key ]}</Table.Cell>;
                        });

                        return <Table.Row key={row.id}>{cells}</Table.Row>;
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
        );
    }
}

OwnTable.propTypes = {
    rows: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired
};

export default OwnTable;
