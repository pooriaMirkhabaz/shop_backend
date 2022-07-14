import IProduct from './../../../components/products/model/IProduct'

export default interface IBasket {
      add(product : IProduct) : Promise<boolean>;
      remove(product : IProduct) : Promise<boolean>;
      clear() : void;
      items() : Promise<IProduct[]>;
      count() : Promise<number>;
      total() : Promise<number>;
      has(product : IProduct) : Promise<boolean>;
}
