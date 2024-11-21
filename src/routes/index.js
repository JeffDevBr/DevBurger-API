import { Router } from 'express'
import userRoutes from './userRoutes.js'
import sessionRoutes from './sessionRoutes.js'


const routes = new Router()

routes.use(userRoutes)
routes.use(sessionRoutes)

export default routes