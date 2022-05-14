import React, { Component } from 'react'
import PropTypes from 'prop-types'
import progressbarStepsApi from '../../utils/get-progressbar-steps'
import { ProgressIndicator, ProgressStep } from 'carbon-components-react'

const steps = [
  {
    id: 'gift_given',
    label: 'Ge en gåva',
    description: 'Du har givit en gåva till ett forskingspaket'
  },
  {
    id: 'Anslag hos BCF',
    label: 'Din gåva är mottagen',
    description: 'Fonden har tagit emot din gåva och fördelat den mellan forskningsprojekten i paketet som du har valt'
  },

  {
    id: 'Anslag utbetalt',
    label: 'Anslag utbetalt',
    description: 'Fonden har betalat ut forskningsanslaget som du har bidragit till med din gåva'
  },
  {
    id: 'Anslag mottaget',
    label: 'Anslag mottaget',
    description: 'Anslaget, med din gåva, är mottaget av forskningsinstitutet'
  },
  {
    id: 'Rapport mottagen',
    label: 'Forsknings-rapport',
    description: 'Forskarens redovisning om forskningen som genomförts, tack vare din gåva, har kommit in',
  }
]


class ProgressIndicatorStatic extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      report: '',
      progressbarSteps: progressbarStepsApi.getProjectDonationGoals()
    }


  }


  render() {

    return (
      <div>
        <div className="ProgressSteps" style={{ width: '50%', paddingRight: '30px' }}></div>
        <div>
          <ProgressIndicator currentIndex={-1}>
            {steps.map((step) =>
              <ProgressStep key={step.id}
                label={<span className="Donera" style={{ color: '#4897d2' }}>{step.label}</span>}
                description={step.description}
              />


            )}
          </ProgressIndicator>

          <div className="textpopbox" style={{ width: '100%' }}>
            {this.state.text}
          </div>
        </div>
      </div>

    )
  }
}

ProgressIndicatorStatic.propTypes = {
  currentStep: PropTypes.string
}

export default ProgressIndicatorStatic
