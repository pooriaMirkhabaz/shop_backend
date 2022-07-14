import { Router } from 'express'

// controller
import controller from './usersController'
const userRouter = Router()
const userControllers = new controller()

// routes
userRouter.get('/', userControllers.index)
userRouter.post('/', userControllers.create)

export default userRouter
