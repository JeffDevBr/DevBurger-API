import { Router } from 'express'
import UserController from '../app/controllers/UserController.js'

const userRoutes = new Router()

userRoutes.post('/users', UserController.store )

export default userRoutes