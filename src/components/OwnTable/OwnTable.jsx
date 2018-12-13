import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Table } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class OwnTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.pageClickAction = this.pageClickAction.bind(this);
    }

    pageClickAction(pageNumber) {
        const { itemsOnPage, fetchFunction } = this.props;

        return () => {
            const offset = pageNumber * itemsOnPage;
            fetchFunction('', offset, itemsOnPage);
        };
    }

    renderHeader() {
        const { header } = this.props;

        return (
            <Table.Header>
                <Table.Row>
                    {header.map((headerItem) => {
                        return <Table.HeaderCell key={headerItem.key}>{headerItem.value}</Table.HeaderCell>;
                    })}
                </Table.Row>
            </Table.Header>
        );
    }

    renderBody() {
        const { header, rows } = this.props;
        return (
            <Table.Body>
                {rows.map((row) => {
                    const cells = header.map(({ key }) => {
                        return <Table.Cell key={`${row.id}-${key}`}>{row[ key ]}</Table.Cell>;
                    });

                    return <Table.Row key={row.id}>{cells}</Table.Row>;
                })}
            </Table.Body>
        );
    }

    renderFooter() {
        const { totalRows, itemsOnPage } = this.props;

        const numberOfPages = Math.floor(totalRows / itemsOnPage);

        const pageButtons = [];

        // eslint-disable-next-line
        for (let number = 0; number < numberOfPages; number++) {
            pageButtons.push(
                <Menu.Item as="a" onClick={this.pageClickAction(number)} key={number}>
                    {number + 1}
                </Menu.Item>
            );
        }

        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan="3">
                        {numberOfPages > 0 && (
                            <Menu floated="right" pagination>
                                {pageButtons}
                            </Menu>
                        )}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        );
    }

    render() {
        return (
            <Table celled>
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
            </Table>
        );
    }
}

OwnTable.propTypes = {
    rows: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired,
    totalRows: PropTypes.number.isRequired,
    itemsOnPage: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    fetchFunction: PropTypes.func.isRequired
};

export default OwnTable;
