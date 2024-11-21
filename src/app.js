import express from 'express'
import routes from './routes/index.js'  
import xssClean from 'xss-clean'
import './database/index.js'
import path from 'path'

const uploadFolder = path.resolve(new URL('.', import.meta.url).pathname, '..', 'uploads')

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(xssClean())
    this.app.use('/product-files', express.static(uploadFolder))
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
