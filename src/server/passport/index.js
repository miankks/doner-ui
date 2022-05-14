/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import passport from 'passport'
import { Strategy } from 'passport-local'

import getLogger from '../logging'
import config from '../config'
import { enrollUser } from '../api/blockchain'
import users from '../users.js'

const logger = getLogger('passport')

passport.serializeUser((user, done) => {
  logger.debug('serialize', user.id, user.token)
  let userJSON = JSON.stringify(user)

  done(null, userJSON)
})

passport.deserializeUser((userJSON, done) => {
  logger.debug('deserialize', userJSON)
  let user = JSON.parse(userJSON)

  done(null, user)
})

let strategy = new Strategy(
  function (username, password, done) {
    if (!username.match(/^[\w.\-+%]+@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/)) {
      return done('Email could not be verified.', null)
    }

    let user = users.filter((user) => { return user.username == username && user.password == password })[0] || null

    if (user) {
      if (config.get('blockchain:enabled')) {
        enrollUser(user.id)
          .then((token) => {

            done(null, {
              ...user,
              token
            })
          })
          .catch((error) => {
            logger.error('enroll error', error)
            done('Unabled to enroll to blockchain')
          })
      } else {
        done(null, user)
      }
    } else {
      done('Username/password not found.', null)
    }
  }
)

passport.use(strategy)

export default passport
