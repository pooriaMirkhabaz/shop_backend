import IBasket from './contracts/IBasket'
import BasketMemoryProvider from './providers/BasketMemoryProvider'
import BasketRedisProvider from './providers/BasketRedisProvider'

class BasketProviderFactory {
  private providers : Map<string, IBasket> = new Map<string, IBasket>()

  constructor () {
    this.providers.set('memory', new BasketMemoryProvider())
    this.providers.set('redis', new BasketRedisProvider())
  }

  public registerProvider (name : string, provider : IBasket) {
    if (!this.has(name)) {
      this.providers.set(name, provider)
    }
    throw new Error(`Provider ${name} exist`)
  }

  public getProviders (name : string) {
    if (this.has(name)) {
      return this.providers.get(name)
    }
    throw new Error(`Provider ${name} does not exist`)
  }

  private has (name : string) {
    return this.providers.has(name)
  }
}
export default BasketProviderFactory
