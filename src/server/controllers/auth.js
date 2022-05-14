/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import { Router } from 'express'

import passport from '../passport'
import auth from '../middleware/auth'

import users from '../users.js'

const router = Router()

router.get('/users',
  (req, res) => {
    res.json(users)
  }
)

router.post('/login',
  auth.ensureNotAuthenticated,
  passport.authenticate('local'),
  (req, res) => {
    res.send({
      id: req.user.id,
      username: req.user.username,
      name: req.user.firstname,
      token: req.user.token
    })
  }
)

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout()
    res.send({ msg: 'logging out' })
  } else {
    res.send({ msg: 'no user to log out' })
  }
})

export default router
