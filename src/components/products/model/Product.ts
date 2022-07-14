import { model, Schema } from 'mongoose'
import IProduct from './IProduct'
import ProductStatus from './ProductStatus'

const ProductSchema : Schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  discount_price: { type: Number, required: true, default: 0 },
  sale_price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  gallery: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
  attributes: { type: [Object] },
  status: { type: ProductStatus, default: ProductStatus.INIT },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: String, default: Date.now }
})

export default model<IProduct>('Product', ProductSchema)
