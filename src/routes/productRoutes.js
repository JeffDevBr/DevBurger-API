import { Router } from 'express'
import ProductController from '../app/controllers/ProductController.js'

const productRoutes = new Router()

productRoutes.post('/products', ProductController.store)

export default productRoutes
