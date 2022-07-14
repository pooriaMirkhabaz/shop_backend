import '../infrastructure/connections'
import App from './app'
const port = process.env.APP_PORT as unknown as number
const application = new App(port)
application.start()
