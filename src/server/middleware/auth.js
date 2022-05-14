/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next()

  res.status(401).json({})
}

function ensureNotAuthenticated(req, res, next) {
  if (!req.isAuthenticated())
    return next()

  res.send({})
}

export default { ensureAuthenticated, ensureNotAuthenticated }
