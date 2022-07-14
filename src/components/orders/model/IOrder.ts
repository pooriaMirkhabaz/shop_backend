import { Document } from 'mongoose'
import OrderStatus from './OrderStatus'
import IOrderLine from './IOrderLine'

export default interface IOrder extends Document {
      user : object;
      total_price : number;
      coupon : object;
      final_price : number;
      order_lines : IOrderLine;
      delivery_address : object;
      status : OrderStatus;
      created_at : Date;
      updated_at : Date;
}
