/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import { Router } from 'express'

import auth from '../middleware/auth'
import getLogger from '../logging'

const logger = getLogger('controllers/api')

const router = Router()

import allPackages from './allPackages.json'
import allGrants from './allGrants.json'
import allDonations from './allDonations.json'
//import allSubdonations from './allSubdonations.json'

router.get('/current_user', auth.ensureAuthenticated, (req, res) => {
  let user = {
    ...req.user,
    name: req.user.firstname
  }

  res.json(user)
})


router.get('/donations', auth.ensureAuthenticated, (req, res) => {
  let donations = allDonations.filter((donation) => { return donation.donatorId == req.user.id })

  logger.debug(donations)

  try {
    let populated = donations.map((donation) => {
      let p = allPackages.filter((p) => { return p.id == donation.packageId })[0]

      logger.debug(' -- ', p)

      let projects = p.grants.map((grantId) => {
        let g = allGrants.filter((grant) => { return grant.id == grantId })[0]

        return { ...g }
      })

      return {
        ...donation,
        researchPackage: { ...p, projects }
      }
    })

    res.json(populated)
  } catch(error) {
    logger.error('donations', error)
    res.status(501).json([])
  }
})

router.post('/donations', auth.ensureAuthenticated, (req, res) => {
  res.json({ status: 'ok'})
})

router.get('/packages/active', auth.ensureAuthenticated, (req, res) => {
  res.json(allPackages.filter((project) => { return project.active == true}))
})

router.get('/packages/:id', auth.ensureAuthenticated, (req, res) => {
  let pack = allPackages.filter((project) => { return project.id == req.params.id })[0] || null
  
  if (pack) {
    pack.projects = allGrants.filter((grant) => { return grant.packageId == req.params.id })
    
    pack.donations = allDonations.filter((donation) => { return donation.donatorId == req.user.id && donation.packageId == req.params.id })
  }

  res.json(pack)
})


export default router
