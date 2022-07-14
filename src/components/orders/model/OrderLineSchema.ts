import { Schema } from 'mongoose'

const OrderLineSchema : Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
})

export default OrderLineSchema
