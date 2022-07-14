import { NextFunction, Request, Response } from 'express'

class productsController {
  async items (req : Request, res : Response, next: NextFunction) {
    try {
      res.status(200).send({
        code: 200,
        success: true,
        data: {
          products: [
            {
              id: 1,
              title: 'title 1'
            },
            {
              id: 2,
              title: 'title 2'
            },
            {
              id: 3,
              title: 'title 3'
            }

          ]
        }
      })
    } catch (error) {
      next(error)
    }
  }
}
export default productsController
