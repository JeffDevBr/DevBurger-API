import Sequelize from "sequelize"
import User from '../app/models/User.js'
import databaseConfig from '../config/database.js'

const models = [User]

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
