import { model, Schema } from 'mongoose'
import IOrder from './IOrder'
import OrderStatus from './OrderStatus'
import OrderLineSchema from './OrderLineSchema'
import UserAddressSchema from '../../users/model/UserAddressSchema'

const OrderSchema : Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  total_price: { type: Number, required: true },
  coupon: { type: Schema.Types.ObjectId, ref: 'coupon', default: null },
  final_price: { type: Number, required: true },
  order_lines: { type: [OrderLineSchema] },
  delivery_address: { type: [UserAddressSchema], required: true },
  status: { type: OrderStatus, default: OrderStatus.INIT },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }

})
export default model<IOrder>('order', OrderSchema)
