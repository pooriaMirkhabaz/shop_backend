import { Schema } from 'mongoose'

const UserAddress : Schema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  zip_code: { type: Number, required: true }
})

export default UserAddress
