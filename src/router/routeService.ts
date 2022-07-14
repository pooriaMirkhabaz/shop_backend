import { Application, Router } from 'express'
import RouterEngine from './router'

// routers
import usersRouter from './../components/users/usersRouter'
import productsRouter from '../components/products/productsRouter'

class RouteService {
  private app : Application
  private router : RouterEngine

  constructor (app : Application) {
    this.app = app
    this.router = new RouterEngine()
    this.bindRouters()
  }

  private bindRouters () {
    this.router.registerRouters('/api/v1/users', usersRouter)
    this.router.registerRouters('/api/v1/products', productsRouter)
  }

  public startRouter () {
    this.router.getRouters().forEach((router : Router, route : string) => {
      this.app.use(route, router)
    })
  }
}
export default RouteService
