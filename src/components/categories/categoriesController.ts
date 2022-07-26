/* eslint-disable no-prototype-builtins */
import { NextFunction, Request, Response } from 'express'
import categoryModel from './model/Category'

class categoriesController {
  public async items (req : Request, res : Response, next: NextFunction) {
    try {
      let projection : any = []
      if (req.query.hasOwnProperty('fields')) {
        const fields : string = req.query.fields as string
        projection = fields.trim().split(',').reduce((value, current) => {
          return {
            [current.trim()]: 1,
            ...value
          }
        }, {})
      }

      const categories = await categoryModel.find({}, projection).sort({ created_at: -1 })
      res.status(200).send({
        code: 200,
        success: true,
        data: categories
      })
    } catch (error) {
      next(error)
    }
  }

  public async store (req : Request, res : Response, next: NextFunction) {
    const category = req.body
    try {
      await categoryModel.create(category)
      res.status(201).send({
        code: 200,
        status: true,
        msg: 'دسته بندی جدید با موفقیت اضافه شد'
      })
    } catch (error) {
      next(error)
    }
  }
}

export default categoriesController
