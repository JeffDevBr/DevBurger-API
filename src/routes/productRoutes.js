import { Router } from 'express'
import ProductController from '../app/controllers/ProductController.js'
import multer from 'multer'
import multerConfig from '../config/multer.js'
import authMiddleware from '../app/middlewares/auth.js'

const productRoutes = new Router()
const upload = multer(multerConfig)

productRoutes.use(authMiddleware)
productRoutes.post('/products', upload.single('file'), ProductController.store)
productRoutes.get('/products', ProductController.index);

export default productRoutes
