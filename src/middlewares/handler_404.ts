import { Application, NextFunction, Request, Response } from 'express'

class Handler404 {
  private app : Application
  constructor (app : Application) {
    this.app = app
  }

  public run () {
    this.app.use((req : Request, res : Response, next : NextFunction) => {
      res.status(404).send({
        code: 404,
        status: false,
        msg: 'Request not valid ...!'
      })
    })
  }
}
export default Handler404
