/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import { Router } from 'express'

import blockchainDonator from '../api/blockchain-donator'
import auth from '../middleware/auth'
import getLogger from '../logging'

const logger = getLogger('controllers/api')

const router = Router()

router.get('/current_user', auth.ensureAuthenticated, (req, res) => {
  let user = {
    ...req.user,
    name: req.user.firstname,
  }

  res.json(user)
})

router.get('/courses', auth.ensureAuthenticated, (req, res) => {
  blockchainDonator
    .getDonations(req.user.token, req.user.id)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      logger.error(error)
      res.json(null)
    })
})

router.post('/courses', auth.ensureAuthenticated, (req, res) => {
  if (req.body.amount <= 0 || !req.body.packageId) {
    res.status(400).json({ error: 'Bad input' })
    return
  }

  blockchainDonator
    .postDonation(
      req.user.token,
      req.user.id,
      req.body.amount,
      req.body.packageId
    )
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      logger.error(error)
      res.json(null)
    })
})

router.get('/packages/active', auth.ensureAuthenticated, (req, res) => {
  blockchainDonator
    .getActivePackages(req.user.token)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      logger.error(error)
      res.json(null)
    })
})

router.get('/packages/:id', auth.ensureAuthenticated, (req, res) => {
  blockchainDonator
    .getPackage(req.user.token, req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      logger.error(error)
      res.json(null)
    })
})

export default router
