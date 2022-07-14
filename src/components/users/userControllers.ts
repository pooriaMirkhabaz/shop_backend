import { NextFunction, Request, Response } from 'express'
import userModel from './model/User'

class userControllers {
  public async index (req : Request, res : Response, next : NextFunction) {
    try {
      res.status(200).send({
        code: 200,
        status: true,
        data: [
          {
            id: 1,
            title: 'user 1'
          },
          {
            id: 2,
            title: 'user 2'
          }
        ]
      })
    } catch (error) {
      next(error)
    }
  }

  public async create (req : Request, res : Response, next : NextFunction) {
    try {
      const newUser = await new userModel({
        mobile: '1234567890'
      })
      newUser.save()
      res.status(201).send({
        code: 201,
        status: true,
        msg: 'new user created',
        newUser
      })
    } catch (error) {
      next(error)
    }
  }
}
export default userControllers
