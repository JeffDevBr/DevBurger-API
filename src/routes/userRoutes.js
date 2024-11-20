import { Router } from 'express'
import {v4} from 'uuid'
import User from '../app/models/User.js'

const userRoutes = new Router()

userRoutes.get('/', async (req, res) => {
    const user = await User.create({
        id: v4(),
        name: "Jefferson",
        email: "jeffersosn@email.com",
        password_hash: "asdfasdf",
    })
    return req.status(200).json({message: "user"})
})

export default userRoutes