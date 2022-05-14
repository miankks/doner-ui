const progressSteps = [
  { label: 'First Step', description: 'Paket 1' },
  { label: 'Second Step', description: 'Paket 2' },
  { label: 'Third Step', description: 'Paket 3' },
  { label: 'Fourth Step', description: 'Paket 3' },
  { label: 'Fifth Step', description: 'Paket 3' },
  { label: 'Sixth Step', description: 'Paket 3' },
]

class progressStepsApi {
  static getProjectDonationGoals() {
    return progressSteps
  }
}
export default progressStepsApi


