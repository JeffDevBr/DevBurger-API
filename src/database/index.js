import Sequelize from "sequelize"
import User from '../app/models/User.js'
import databaseConfig from '../config/database.js'
import Product from "../app/models/Product.js"

const models = [User, Product]

class Database {
    constructor() {
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig.development)
        models.map(model => model.init(this.connection))
    }
}

export default new Database()   
