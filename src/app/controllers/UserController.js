import { v4 } from 'uuid'
import * as Yup from 'yup'
import User from '../models/User.js'

class UserController {
    async store(req, res) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
                password: Yup.string().required('Senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres'),
                admin: Yup.boolean()
            })

            await schema.validate(req.body, { abortEarly: false })

            const { name, email, password, admin } = req.body

            const userExists = await User.findOne({ where: { email } })
            if (userExists) {
                return res.status(400).json({ error: 'Usuário já existe' })
            }

            const user = await User.create({
                id: v4(),
                name,
                email,
                password,
                admin,
            })

            return res.status(201).json({ id: user.id, name, email, admin })
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = {}
                error.inner.forEach((err) => {
                    errors[err.path] = err.message
                })
                return res.status(400).json({ errors })
            }

            return res.status(500).json({ error: 'Erro interno do servidor ao criar usuário' })
        }
    }
}

export default new UserController()
