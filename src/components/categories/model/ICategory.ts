import { Document } from 'mongoose'
import ICategoryGroups from './ICategoryGroups'

export default interface ICategory extends Document {
      title : string;
      slug : string;
      total_product : number;
      groups : [ICategoryGroups];
      created_at : Date;
}
