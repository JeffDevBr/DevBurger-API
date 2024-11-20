import { Router } from 'express'

const userRoutes = new Router()

userRoutes.get('/', (req, res) => {
    return req.status(200).json({message: "Hello World!"})
})

export default userRoutes