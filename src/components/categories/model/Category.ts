import { model, Schema } from 'mongoose'
import ICategory from './ICategory'

const CategorySchema : Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  total_product: { type: Number, default: 0 },
  groups: { type: [Object] },
  created_at: { type: Date, default: Date.now }
})

export default model<ICategory>('category', CategorySchema)
