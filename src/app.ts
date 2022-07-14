import * as express from 'express'
import { Application } from 'express'
import RouteService from './router/routeService'
import MiddleWare from './middlewares'
import Handler404 from './middlewares/handler_404'
import Handler500 from './middlewares/handler_500'
import SwaggerConfig from './middlewares/swagger'

class App {
  private port : number
  private app : Application
  private router : RouteService
  private middleware : MiddleWare
  private handler404 : Handler404
  private handler500 : Handler500
  private swagger : SwaggerConfig

  constructor (port : number) {
    this.app = express()
    this.port = port
    this.router = new RouteService(this.app)
    this.middleware = new MiddleWare(this.app)
    this.handler404 = new Handler404(this.app)
    this.handler500 = new Handler500(this.app)
    this.swagger = new SwaggerConfig(this.app)
  }

  start () : void {
    // middleware
    this.middleware.run()
    this.swagger.run()

    // start router
    this.router.startRouter()

    // Handler404
    this.handler404.run()
    // handler500
    this.handler500.run()

    this.app.listen(this.port, () => {
      console.log(`Server is Running on port : ${this.port}`)
    })
  }
}
export default App
