import { Document } from 'mongoose'
export default interface IUser extends Document {
      name : string;
      mobile : string;
      email : string;
      image : string;
      wallet: string;
      total_orders : number;
      addresses : [object];
      token : string;
      status : number
      createdAt : Date
}
