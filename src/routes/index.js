import { Router } from 'express'
import userRoutes from './userRoutes.js'
import sessionRoutes from './sessionRoutes.js'
import productRoutes from './productRoutes.js'

const routes = new Router()

routes.use(userRoutes)
routes.use(sessionRoutes)
routes.use(productRoutes)

export default routes