/* eslint-disable new-cap */
import { Router } from 'express'
import controller from './categoriesController'

const categoryRouter = Router()

// controllers
const categoryController = new controller()

// routes
categoryRouter.get('/', categoryController.items)
categoryRouter.post('/', categoryController.store)

export default categoryRouter
