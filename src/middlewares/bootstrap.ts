import { Application } from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

class BootStrap {
  private app : Application

  constructor (app : Application) {
    this.app = app
  }

  public start () {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(cors())
  }
}

export default BootStrap
