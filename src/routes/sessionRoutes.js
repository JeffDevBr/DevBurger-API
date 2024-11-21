import { Router } from 'express'
import SessionController from '../app/controllers/SessionController.js'

const sessionRoutes = new Router()

sessionRoutes.post('/session', SessionController.store)

export default sessionRoutes
