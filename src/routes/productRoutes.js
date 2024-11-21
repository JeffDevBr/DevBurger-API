import { Router } from 'express'
import ProductController from '../app/controllers/ProductController.js'
import multer from 'multer'
import multerConfig from '../config/multer.js'

const productRoutes = new Router()
const upload = multer(multerConfig)

productRoutes.post('/products', upload.single('file'), ProductController.store)

export default productRoutes
