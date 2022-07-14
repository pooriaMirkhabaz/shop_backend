import { Document } from 'mongoose'
import IProductAttributes from './IProductAttributes'

export default interface IProductCategory extends Document {
      title : string;
      total_product : number;
      attributes : [IProductAttributes];
}
