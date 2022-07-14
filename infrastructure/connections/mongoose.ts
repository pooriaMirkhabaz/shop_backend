import * as mongoose from 'mongoose'

const MongoConnection = () => {
  // connect to mongoDB
  mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`)

  mongoose.connection.on('open', () => {
    console.log(`mongo connection in open : ${process.env.MONGO_PORT}`)
  })

  mongoose.connection.on('error', (error) => {
    console.log('failed to connect', error.message)
  })
}

export default MongoConnection
