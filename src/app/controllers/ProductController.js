import * as Yup from 'yup'

class ProductController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required('O nome é obrigatório'),
            price: Yup.number().integer().required('O preço é obrigatório'),
            category: Yup.string().required('A categoria é obrigatória'),
            description: Yup.string().nullable(),
        })

        try {
            schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json({ error: 'Falha na validação', messages: err.errors })
        }

        return res.status(201).json({ message: 'Produto criado com sucesso' })
    }
}

export default new ProductController()
