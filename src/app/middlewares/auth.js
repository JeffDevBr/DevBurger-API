import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import authConfig from '../../config/auth.js'

async function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authToken.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decoded.id 

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}

export default authMiddleware
