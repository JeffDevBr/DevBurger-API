import Sequelize, { Model } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.INTEGER,
                category: Sequelize.TEXT,
                description: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${process.env.BASE_URL}/product-files/${this.path}`
                    },
                },
            },
            {
                sequelize,
            }
        )

        return this
    }
}

export default Product
