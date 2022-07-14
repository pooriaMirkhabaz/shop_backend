import { Application, ErrorRequestHandler, NextFunction, Request, Response } from 'express'

class Handler500 {
  private app : Application
  constructor (app : Application) {
    this.app = app
  }

  public run () {
    this.app.use((error : Error, req : Request, res : Response, next : NextFunction) => {
      res.status(500).send({
        code: 500,
        status: false,
        msg: 'server error',
        error
      })
    })
  }
}
export default Handler500
