import { Document } from 'mongoose'

export default interface IOrderLine extends Document {
      product : object;
      price : number;
      image : string;
      created_at : Date;
}
