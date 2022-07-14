import { Application } from 'express'
import * as swaggerUi from 'swagger-ui-express'
const swaggerDocument = require('./swaggerConfig.json')

class SwaggerApi {
  private app : Application

  constructor (app : Application) {
    this.app = app
  }

  public run () {
    this.app.use('/api-docs', swaggerUi.serve)
    this.app.use('/api-docs', swaggerUi.setup(swaggerDocument))
  }
}

export default SwaggerApi
