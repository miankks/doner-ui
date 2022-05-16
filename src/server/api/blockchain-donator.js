import blockchain from './blockchain'

import getLogger from '../logging'

const logger = getLogger('api/blockchain-donator')

export function getDonations(token, donatorId) {
  return blockchain
    .queryDonationByDonator(token, donatorId)
    .then((donations) => {
      logger.debug('donations =', donations)
      let promises = []

      donations.forEach((donation) => {
        let p = blockchain.queryRecord(token, donation.packageId).then((rp) => {
          logger.debug('rp =', rp)
          donation.researchPackage = rp

          return blockchain
            .getGrantsAndSubdonations(token, rp.id, donatorId, donation.id)
            .then((grants) => {
              rp.projects = grants

              return Promise.resolve()
            })
        })

        promises.push(p)
      })

      return Promise.all(promises).then(() => {
        return donations
      })
    })
}

export function postDonation(token, donatorId, amount, packageId) {
  return blockchain.postDonation(token, donatorId, amount, packageId)
}

export function getActivePackages(token) {
  return blockchain.queryAllPackages(token).then((packages) => {
    return packages.filter((p) => {
      return p.active == true
    })
  })
}

export function getPackage(token, packageId) {
  return blockchain.queryRecord(token, packageId).then((rp) => {
    let promises = []
    rp.projects = []

    rp.grants.forEach((grantId) => {
      let p = blockchain.queryRecord(token, grantId).then((grant) => {
        rp.projects.push(grant)

        // return blockchain.getGrantsAndSubdonations(token, rp.id, donatorId, donation.id)
        //   .then((grants) => {
        //     rp.projects = grants

        return Promise.resolve()
        // })
      })

      promises.push(p)
    })

    return Promise.all(promises).then(() => {
      return rp
    })
  })
}

export default {
  getDonations,
  postDonation,
  getActivePackages,
  getPackage,
}
