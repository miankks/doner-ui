const packageGloals = [
  { project: 'CRISPR', institute: 'Karolinska', donationGoal: 1000000, status: 400000, percentage: 60 },
  { project: 'CRISPR2', institute: 'Sehlgrenska', donationGoal: 1500000, status: 400000, percentage: 50 },
  { project: 'CRISPR3', institute: 'AS Lund', donationGoal: 500000, status: 400000, percentage: 70 }
]

class packageGoalsApi {
  static getProjectDonationGoals() {
    return packageGloals
  }
}
export default packageGoalsApi
