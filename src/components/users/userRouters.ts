import { Router } from 'express'

// controller
import controller from './userControllers'
const userRouter = Router()
const userControllers = new controller()

// routes
userRouter.get('/', userControllers.index)
userRouter.post('/', userControllers.create)

export default userRouter
