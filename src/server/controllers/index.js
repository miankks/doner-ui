/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import { Router } from 'express'

import config from '../config'
import api from './api'
import apiBlockchain from './api-blockchain'
import auth from './auth'

const router = Router()

if (config.get('blockchain:enabled')) {
  router.use('/api', apiBlockchain)
} else {
  router.use('/api', api)
}

router.use('/auth', auth)

export default router
