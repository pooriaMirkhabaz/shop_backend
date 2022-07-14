import {Router} from 'express'
import controller from './productsController';

const productsRouter = Router()

// controllers
const productsController = new controller();

// routes
productsRouter.get('/', productsController.items)

export default productsRouter