import { Application, Router } from 'express'
import RouterEngine from './router'

// routers
import homeRouters from './../components/home/homeRouters'
import articleRouter from '../components/articles/articleRouters'
import categoryRouter from '../components/categories/categoryRouters'
import userRouter from './../components/users/userRouters'

class RouteService {
  private app : Application
  private router : RouterEngine

  constructor (app : Application) {
    this.app = app
    this.router = new RouterEngine()
    this.bindRouters()
  }

  private bindRouters () {
    this.router.registerRouters('/api/v1/home', homeRouters)
    this.router.registerRouters('/api/v1/articles', articleRouter)
    this.router.registerRouters('/api/v1/category', categoryRouter)
    this.router.registerRouters('/api/v1/user', userRouter)
  }

  public startRouter () {
    this.router.getRouters().forEach((router : Router, route : string) => {
      this.app.use(route, router)
    })
  }
}
export default RouteService
