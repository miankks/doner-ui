import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { DataTable } from 'carbon-components-react'
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
} = DataTable
import { compare as defaultCompare, defaultSortRow } from 'carbon-components-react/lib/components/DataTable/tools/sorting'

class ExpandableTable extends Component {
  customSort(cellA, cellB, { sortDirection, sortStates, locale }) {
    if (typeof cellA === 'object') {
      return cellA.sort(cellA, cellB, { sortDirection, sortStates, locale })
    }

    return defaultSortRow(cellA, cellB, { sortDirection, sortStates, locale })
  }


  render() {
    let renderExpansion = this.props.renderExpansion

    return (
      <DataTable
        headers={this.props.headers}
        rows={this.props.rows}
        sortRow={this.customSort}
        render={({ rows, headers, getHeaderProps, getRowProps }) => (
          <TableContainer title={this.props.title} style={{marginLeft:'20px',paddingTop:'20px',width:'97%'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  {headers.map(header => (
                    <TableHeader key={header.id} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  < React.Fragment key={row.id} >
                    <TableExpandRow {...getRowProps({ row })}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>
                          {typeof cell.value === 'object' ? cell.value.render(cell.value) : cell.value}
                        </TableCell>
                      ))}
                    </TableExpandRow>
                    {row.isExpanded && (
                      <TableExpandedRow>
                        <TableCell colSpan={headers.length + 1}>
                          {renderExpansion(row.id)}
                        </TableCell>
                      </TableExpandedRow>
                    )
                    }
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    )
  }
}

ExpandableTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  renderExpansion: PropTypes.func
}

export function compare(a, b, locale) { return defaultCompare(a, b, locale) }
export default ExpandableTable
