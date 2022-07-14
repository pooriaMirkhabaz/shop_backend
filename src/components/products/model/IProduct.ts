import { Document } from 'mongoose'
import ProductStatus from './ProductStatus'
import IProductCategory from './IProductCategory'
import IProductAttributes from './IProductAttributes'

export default interface IProduct extends Document {
      title : string;
      price : number;
      discount_price : number;
      sale_price : number;
      thumbnail : string;
      gallery : [string];
      category : IProductCategory;
      attributes : [IProductAttributes];
      status : ProductStatus;
      created_at : Date;
      updated_at : Date;
}
