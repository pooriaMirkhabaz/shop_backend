import { Document } from 'mongoose'
import ICategoryAttributes from './ICategoryAttributes'

export default interface ICategoryGroups extends Document {
      hash : string;
      title : string;
      slug : string;
      attributes : [ICategoryAttributes];
}
