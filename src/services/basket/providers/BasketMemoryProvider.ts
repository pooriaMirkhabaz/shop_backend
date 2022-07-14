import IProduct from '../../../components/products/model/IProduct'
import IBasket from './../contracts/IBasket'

class BasketMemoryProvider implements IBasket {
  private basketItems : IProduct[] = []

  public add (product: IProduct): Promise<boolean> {
    this.basketItems.push(product)
    return Promise.resolve(true)
  }

  public remove (product: IProduct): Promise<boolean> {
    return this.has(product)
  }

  public clear (): void {
    this.basketItems = []
  }

  public items (): Promise<IProduct[]> {
    return Promise.resolve(this.basketItems)
  }

  public count (): Promise<number> {
    return Promise.resolve(this.basketItems.length)
  }

  public total (): Promise<number> {
    const totalBasket = this.basketItems.reduce((total, product : IProduct) => {
      return total + product.price
    }, 0)
    return Promise.resolve(totalBasket)
  }

  public has (product: IProduct): Promise<boolean> {
    return Promise.resolve(this.basketItems.includes(product))
  }
}

export default BasketMemoryProvider
