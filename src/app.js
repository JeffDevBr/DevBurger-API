import express from 'express'
import routes from './routes/index.js'  
import xssClean from 'xss-clean'
import './database/index.js'

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(xssClean())

  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
