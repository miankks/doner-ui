import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Donation-package.css'
import { Button } from 'carbon-components-react'
import ProgressBar from '../ProgressBars/ProgressBar'
import { Redirect } from 'react-router-dom'
import Amount from '../Amount'
import BusinessCard from '../BusinessCard'
import { postDonation } from '../../actions'

const buttonAmounts = [100000, 50000, 20000]

class DonorPackage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: null,
      donationAmount: 0,
      donationInputValue: '',
      allProjects: this.props.researchPackage.projects
    }
  }

  renderMoreProgressBars = (project, i) => {
    return (
      <span key={i} style={{ marginLeft: '20px', width: '50px' }}>
        <ProgressBar width='60px' largerDigits={true} total={project.goal} current={project.amountRaised + this.state.donationAmount / this.state.allProjects.length} />
      </span>
    )
  }

  onDonationAmountButtonClick = (value) => {
    this.setState({
      donationAmount: value,
      donationInputValue: ''
    })
  }

  onDonationInputChange = (e) => {
    let amount = Number(e.target.value)

    if (!isNaN(amount) && amount >= 0) {
      this.setState({
        donationAmount: amount,
        value: e.target.value
      })
    }
  }

  onDonate = () => {
    let params = {
      packageId: this.props.researchPackage.id,
      amount: this.state.donationAmount
    }

    this.props.postDonation(params)
      .then(() => {
        this.setState({ redirectTo: '/ThankYou' })
      })
  }

  renderFundingStatus(researchPackage) {
    return (
      <React.Fragment>
        <div className='flex-row'>
          <div className='tile tile-funding'>
            <ProgressBar width='120px' total={researchPackage.goal} current={researchPackage.amountRaised + this.state.donationAmount} />
          </div>
          <div className='tile tile-funding'>
            {/* <div>{researchPackage.projectDescription}</div> */}
            <div className='tile-inner'>
              <div className='tile-inner-text flex-row blue-text'>
                <div className="tile tile-funding">
                  Vi har flera forskningsprojekt inom {researchPackage.name}.
                  {researchPackage.active ? (<React.Fragment><br />Med din gåva kommer du att bidra till alla dessa projekt.</React.Fragment>) : ''}
                </div>
              </div>
            </div>
            <div className='tile-inner flex-row'>
              {researchPackage.projects.map((research, i) => (
                <div className="tile tile-funding" key={i}>
                  <span className="indivisual-project-bar-name1">{research.name}</span>
                  <div style={{ color: 'darkgray' }}>{research.organisation}</div>
                  <div style={{ color: 'darkgray' }}>{research.department}</div>
                  {this.renderMoreProgressBars(research, i)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderDonationInput() {
    return (
      <React.Fragment>
        <fieldset className="js-howmuchtogive">
          <div className="gava-help-text">
            <div>Med hjälp av din gåva kan vi driva barncancerforskningen framåt.</div>
            <div>Se hur din gåva hjälper till att fylla paketet.</div> 
          </div>
          <label>Välj belopp</label>
          <div className="expanded button-group button-group--paygroup toggle">
            {buttonAmounts.map((amount, i) =>
              (<Button key={i} value={amount} onClick={() => { this.onDonationAmountButtonClick(amount) }} className="donationpackage-buttons" kind="secondary">
                <Amount amount={amount} />
              </Button>
              ))}
          </div>
          <input placeholder="Välj annat belopp (valfri, ex: 10 000)" autoCorrect="off" value={this.state.value} onChange={this.onDonationInputChange} data-val="true" data-val-greaterthan="Ogiltigt belopp" data-val-greaterthan-allowamountlimit="False" data-val-greaterthan-amountlimit="0" data-val-numeric="Använd inte bokstäver som SEK och KR i beloppsfältet." id="CurrentApplication_StepOneFormModel_FreeAmount" name="CurrentApplication.StepOneFormModel.FreeAmount" type="tel" />

          <div className="donate-button">
            <Button className='donationpackage-buttons'
              type="button" kind='secondary'
              onClick={this.onDonate}
              disabled={this.state.donationAmount <= 0 ? (true) : (false)}
            >Ge en gåva</Button>
          </div>

        </fieldset>

      </React.Fragment>
    )
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      let researchPackage = this.props.researchPackage

      return (
        <div className='row'>
          <div className='research-package-card' >
            <div className="research-package-text2">
              <div className="research-package-text1">
                <h1>{researchPackage.name}</h1>
                <h2>Mål: <Amount amount={researchPackage.goal} /></h2>
                {/* <h3 style={{ fontWeight: 'bold' }}>{researchPackage.name}<span style={{ fontSize: '30px' }}>.</span> Mål: <Amount amount={researchPackage.goal} /></h3> */}
                <p>{researchPackage.description}</p>
              </div>
            </div>

            {this.renderFundingStatus(researchPackage)}

            {researchPackage.active ? this.renderDonationInput() : ''}

            <BusinessCard />
          </div></div>
      )
    }
  }
}

DonorPackage.propTypes = {
  researchPackage: PropTypes.object,
  postDonation: PropTypes.func
}

export default connect(null, { postDonation })(DonorPackage)
