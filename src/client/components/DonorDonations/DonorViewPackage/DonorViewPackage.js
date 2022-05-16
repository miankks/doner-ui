import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ExpandableTable, { compare } from '../../ExpandableTable/ExpandableTable'
import yearlyrepport from '../../../static/images/yearlyrepport.png'
import './Donor-View-Package.css'
import ProgressBarIndicator from '../../ProgressBarIndicator/ProgressBarIndicator'
import Amount from '../../Amount'
import Popup from 'reactjs-popup'

class DonorViewPackage extends Component {
  constructor(props) {
    super(props)
    this.renderExpansion = this.renderExpansion.bind(this)
  }

  headers() {
    return [
      {
        key: 'id',
        header: 'Gåva',
      },
      {
        key: 'dateOfDonation',
        header: 'Datum',
      },
      {
        key: '_researchPackage',
        header: 'Paket',
      },
      {
        key: '_amount',
        header: 'Belopp',
      },
    ]
  }

  createRows() {
    let rows = []

    this.props.donations.map((donation) => {
      rows.push({
        ...donation,
        _researchPackage: {
          id: donation.researchPackage.id,
          name: donation.researchPackage.name,
          render: (cell) => (
            <Link to={'/packages/' + cell.id}>{cell.name}</Link>
          ),
          sort: (cellA, cellB, { sortDirection, sortStates, locale }) => {
            if (sortDirection === sortStates.ASC) {
              return compare(cellB.name, cellA.name, locale)
            }

            return compare(cellA.name, cellB.name, locale)
          },
        },
        _amount: {
          amount: donation.amount,
          render: (cell) => <Amount amount={cell.amount} />,
          sort: (cellA, cellB, { sortDirection, sortStates, locale }) => {
            if (sortDirection === sortStates.ASC) {
              return compare(cellB.amount, cellA.amount, locale)
            }

            return compare(cellA.amount, cellB.amount, locale)
          },
        },
        dateOfDonation: {
          date: donation.dateOfDonation,
          render: (cell) => cell.date.substring(0, 10),
          sort: (cellA, cellB, { sortDirection, sortStates, locale }) => {
            if (sortDirection === sortStates.ASC) {
              return compare(cellB.amount, cellA.amount, locale)
            }

            return compare(cellA.amount, cellB.amount, locale)
          },
        },
      })
    })

    return rows
  }

  renderExpansion(id) {
    let donation = this.props.donations.filter((donation) => {
      return donation.id == id
    })[0]

    return (
      <div className="table-inside-accordian">
        <table>
          <tbody>
            <tr>
              <th style={{ color: '#4897d2', fontWeight: 'bold' }}>Projekt</th>
              <th style={{ color: '#4897d2', fontWeight: 'bold' }}>
                Forskningsinstitut
              </th>
              <th
                style={{
                  color: '#4897d2',
                  fontWeight: 'bold',
                  whiteSpace: 'pre',
                }}
              >
                <pre>
                  Ge en gåva Din gåva är mottagen Anslag Utbetalt Anslag
                  Mottaget Forskningsrapport
                </pre>
              </th>
              <th></th>
            </tr>
            {donation.researchPackage.projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.organisation}</td>
                <td
                  style={{
                    paddingTop: '30px',
                    paddingLeft: '30px',
                    width: '100%',
                  }}
                >
                  <ProgressBarIndicator
                    currentStep={project.status}
                    reports={project.reports}
                  />
                </td>
                <td>
                  {project.status == 'Rapport mottagen' ? (
                    <Popup
                      trigger={
                        <img src={yearlyrepport} style={{ width: '30px' }} />
                      }
                      position="left center"
                    >
                      <div>{project.annualReport}</div>
                    </Popup>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2
          style={{
            paddingTop: '30px',
            paddingLeft: '20px',
            fontWeight: 'bold',
          }}
        >
          Här är status för dina Kurser
        </h2>

        <ExpandableTable
          headers={this.headers()}
          rows={this.createRows()}
          renderExpansion={this.renderExpansion}
        />
      </div>
    )
  }
}

DonorViewPackage.propTypes = {
  donations: PropTypes.arrayOf(PropTypes.object),
}

export default DonorViewPackage
