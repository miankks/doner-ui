import React, { Component } from 'react'
import '../HeadingTable/HeadingTable.css'


class HeadingTable extends Component {
  render() {
    return (
      <div className="table-style">
        <span>ID Gåva</span>
        <span className="table-span">Paket</span>
        <span className="table-span">Datum</span>
        <span className="table-span">Din Donation</span>
        <span className="table-span">Din Gåva</span>
      </div>
    )
  }
}

export default HeadingTable
