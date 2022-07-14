import IProduct from '../../../components/products/model/IProduct'
import IBasket from './../contracts/IBasket'
import redisConnection from '../../../../infrastructure/connections/redis'
import IBasketConfigurable from './../contracts/IBasketConfigurable'

class BasketRedisProvider implements IBasket, IBasketConfigurable {
  private key : string

  public config (key: any): void {
    this.key = key
  }

  public async add (product: IProduct): Promise<boolean> {
    const result = await redisConnection.set(this.key, JSON.stringify(product)).then(result => true).catch(() => false)
    return result
  }

  public async remove (product: IProduct): Promise<boolean> {
    const items = await this.getItems()
    if (items.includes(product)) {
      const newItems = JSON.stringify(items.splice(items.indexOf(product), 1))
      redisConnection.del(this.key)
      redisConnection.set(this.key, newItems)
      return true
    }
    return false
  }

  public clear (): void {
    redisConnection.del(this.key)
  }

  public async items (): Promise<IProduct[]> {
    return await this.getItems()
  }

  public async count (): Promise<number> {
    const items = await this.getItems()
    return items.length
  }

  public async total (): Promise<number> {
    const items = await this.getItems()
    return items.reduce((total, product) => {
      return total + product.price
    }, 0)
  }

  public async has (product: IProduct): Promise<boolean> {
    const items = await this.getItems()
    return items.includes(product)
  }

  private async getItems () : Promise<IProduct[]> {
    const items = await redisConnection.get(this.key).then(result => result).catch(() => false)
    if (items) {
      const basketItems = JSON.parse(items as string)
      return basketItems
    }
    return []
  }
}
export default BasketRedisProvider
