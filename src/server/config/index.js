/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import path from 'path'
import nconf from 'nconf'

nconf
  //.argv({ 
  //  separator: '__',
  //  parseValues:true
  //})
  .env({
    separator: '__',
    lowerCase: true,
    parseValues: true
  })
  .file({
    file: path.join(__dirname, './config.json')
  })
  .defaults({
    morgan: {
      enabled: false
    },
    blockchain: {
      enabled: false
    },
    port: 3001
  })

export default nconf
