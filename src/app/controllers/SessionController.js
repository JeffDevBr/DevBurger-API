import * as Yup from 'yup'
import User from '../models/User.js'

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json({ error: 'Validation fails', messages: err.errors })
        }

        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const { id, name, admin } = user

        return res.json({
            user: {
                id,
                name,
                email,
                admin,
            },

            message: 'User authenticated successfully',
        })
    }
}

export default new SessionController()