import { Application } from 'express'
import BootStrap from './bootstrap'

class MiddleWare {
  private app : Application
  private bootstrap : BootStrap

  constructor (app : Application) {
    this.app = app
    this.bootstrap = new BootStrap(this.app)
  }

  public run () {
    this.bootstrap.start()
  }
}

export default MiddleWare
