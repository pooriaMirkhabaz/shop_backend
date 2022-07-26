import { Document } from 'mongoose'

export default interface ICategoryAttributes extends Document {
      hash : string;
      title : string;
      slug : string;
      filterable : boolean;
      hasPrice : boolean;
}
