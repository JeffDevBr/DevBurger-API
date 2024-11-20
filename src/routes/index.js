import { Router } from 'express'
import userRoutes from './userRoutes.js'

const routes = new Router()

routes.use(userRoutes)

export default routes