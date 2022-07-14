import { model, Schema } from 'mongoose'
import IProductOffer from './IProductOffer'
import ProductOfferItemsSchema from './ProductOfferItems'

const ProductOffer : Schema = new Schema({
  products: { type: [ProductOfferItemsSchema], required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now }
})

export default model<IProductOffer>('ProductOffer', ProductOffer)
