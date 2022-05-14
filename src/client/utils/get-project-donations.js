
const projectDonationsHistory = [
  {project: 'Projekt1', institute: 'Karolinska', donation:'80000', status: 'Anslag mottaget', reports1: '2016', reports2: '2017'},
  {project: 'Projekt2', institute: 'Lund', donation:'80000',status: 'Anslag mottaget', reports1: '2017'},
  {project: 'Projekt3', institute: 'Uppsala', donation:'80000', status: 'Anslag mottaget', reports1: '2017'}
]
  
class projectDonationsApi {
  static getProjectDonations() {
    return projectDonationsHistory
  }
}
export default projectDonationsApi
  
