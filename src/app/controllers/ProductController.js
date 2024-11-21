import * as Yup from 'yup'
import Product from '../models/Product.js'

class ProductController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required('O nome é obrigatório'),
            price: Yup.number().integer().required('O preço é obrigatório'),
            category: Yup.string().required('A categoria é obrigatória'),
            description: Yup.string().nullable().max(1000, 'A descrição pode ter no máximo 1000 caracteres'),
        })

        try {
            schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json({ error: 'Falha na validação', messages: err.errors })
        }

        const { filename: path } = req.file
        const { name, price, category, description } = req.body

        const product = await Product.create({
            name,
            price,
            category,
            description,
            path
        })


        return res.status(201).json(product)
    }

    async index(req, res) {
        const products = await Product.findAll()

        return res.json(products)
    }
}

export default new ProductController()
