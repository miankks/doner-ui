/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import logging from './logging'
import config from './config'

import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'

import passport from './passport'
import controllers from './controllers'

const logger = logging('server')

const app = express()

app.enable('trust proxy')
app.use(function (req, res, next) {
  if (req.secure || process.env.BLUEMIX_REGION === undefined) {
    next()
  } else {
    res.redirect('https://' + req.headers.host + req.url)
  }
})

if (config.get('morgan:enabled')) {
  const morgan = require('morgan')
  app.use(morgan('dev'))
}
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

app.use(session({
  secret: config.get('session_secret'),
  name: config.get('cookie_name'),
  proxy: true,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

const router = express.Router()
  .use('/', controllers)
  .use('/', express.static(__dirname + '/static'))

router.get('/*', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

app.use(router)

const port = config.get('port')
const server = app.listen(port, () => {
  logger.info(`Server started on: http://localhost:${port}/`)
})

export default server
