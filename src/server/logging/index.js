/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import log4js from 'log4js'
import path from 'path'

log4js.configure(path.resolve(__dirname, 'log4js.json'), { reloadSecs: 30 })

export default log4js.getLogger
