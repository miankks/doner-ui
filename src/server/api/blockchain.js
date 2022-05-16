import axios from 'axios'
import shortid from 'shortid'

import config from '../config'
import getLogger from '../logging'

const logger = getLogger('api/blockchain')

const blockchain = axios.create({
  baseURL: config.get('blockchain:url'),
  timeout: 60000,
})

const enrollPath = config.get('blockchain:enroll_path')
const chaincodePath = config.get('blockchain:chaincode_path')
const peers = config.get('blockchain:peers')

function generateId(type) {
  return type + '-' + shortid.generate()
}

function generateDate() {
  let d = new Date()
  return (
    d.toLocaleDateString('se-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }) +
    ' ' +
    d.toLocaleTimeString('se-SE', { hour: '2-digit', minute: '2-digit' })
  )
}

export function enrollUser(donatorId) {
  return blockchain
    .request({
      url: enrollPath,
      method: 'post',
      data: {
        username: donatorId,
        orgName: 'Org1',
      },
    })
    .then((response) => {
      logger.debug('enroll user response', response.status, response.data)
      if (response.status != 200) {
        return Promise.reject(response.data)
      }

      return Promise.resolve(response.data.token)
    })
}

export function queryRecord(token, id) {
  return blockchain
    .request({
      url: chaincodePath,
      method: 'get',
      headers: { authorization: `Bearer ${token}` },
      params: {
        peer: peers[0],
        fcn: 'queryRecord',
        args: `["${id}"]`,
      },
    })
    .then((response) => {
      logger.debug('queryRecord response', response.status, response.data)

      if (response.status != 200) {
        return Promise.reject(response.data)
      }

      return Promise.resolve(response.data)
    })
}

export function postDonation(token, donatorId, amount, packageId) {
  return blockchain
    .request({
      url: chaincodePath,
      method: 'post',
      headers: { authorization: `Bearer ${token}` },
      data: {
        peers: peers,
        fcn: 'submitDonation',
        args: [
          generateId('D'),
          donatorId,
          amount.toString(),
          packageId,
          generateId('SD'),
          generateDate(),
        ],
      },
    })
    .then((response) => {
      logger.debug('postDonation response', response.status, response.data)

      if (response.status != 200) {
        return Promise.reject(response.data)
      }

      return Promise.resolve(response.data)
    })
}

export function queryDonationByDonator(token, donatorId) {
  return blockchain
    .request({
      url: chaincodePath,
      method: 'get',
      headers: { authorization: `Bearer ${token}` },
      params: {
        peer: peers[0],
        fcn: 'queryDonationByDonator',
        args: `["${donatorId}"]`,
      },
    })
    .then((response) => {
      logger.debug(
        'queryDonationByDonator response',
        response.status,
        response.data
      )

      if (response.status != 200) {
        return Promise.reject(response.data)
      }

      return response.data
    })
}

export function queryAllPackages(token) {
  return blockchain
    .request({
      url: chaincodePath,
      method: 'get',
      headers: { authorization: `Bearer ${token}` },
      params: {
        peer: peers[0],
        fcn: 'queryAllPackages',
        args: '[""]',
      },
    })
    .then((response) => {
      logger.debug('queryAllPackages response', response.status, response.data)

      if (response.status != 200) {
        return Promise.reject(response.data)
      }

      return Promise.resolve(response.data)
    })
}

export function getGrantsAndSubdonations(
  token,
  packageId,
  donatorId,
  donationId
) {
  return blockchain
    .request({
      url: chaincodePath,
      method: 'get',
      headers: { authorization: `Bearer ${token}` },
      params: {
        peer: peers[0],
        fcn: 'getGrantsAndSubdonations',
        args: `["${packageId}", "${donatorId}", "${donationId}"]`,
      },
    })
    .then((response) => {
      logger.debug(
        'getGrantsAndSubdonations response',
        response.status,
        response.data
      )

      if (response.status != 200) {
        return Promise.reject(response.data)
      }

      return Promise.resolve(response.data)
    })
}

export default {
  enrollUser,
  queryRecord,

  postDonation,
  queryDonationByDonator,
  queryAllPackages,
  getGrantsAndSubdonations,
}
