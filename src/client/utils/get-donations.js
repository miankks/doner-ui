
const donationsHistory = [
  {
    donationId: '#BCF18XXYDE', donationPacket: 'LEUKEMI', donationDate: '180325', donationAmount: 200000 , donationStatus: 'Utbetald',
    yourDonationDate: '2018-03-25', donationPaidDate: '2018-06-05', receiveConrifmarion: '2018-06-08', yearlyReport: 'Årsrapport',
    desciption1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    desciption2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    donationId: '#BCF17HF5FC', donationPacket: 'SPÅDBARN', donationDate: '170415', donationAmount: 250000, donationStatus: 'Utbetald'
  },
  {
    donationId: '#BCF16GDSSJ', donationPacket: 'HJÄRNAN', donationDate: '160228', donationAmount: 250000, donationStatus: 'Anslag mott',
    yourDonationDate: '2016-06-05', donationPaidDate: '2016-09-08', receiveConrifmarion: '2019-09-10', yearlyReport: 'Årsrapport',
    desciption1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    desciption2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

class DonationApi {
  static getDonations() {
    return donationsHistory
  }
}
export default DonationApi
