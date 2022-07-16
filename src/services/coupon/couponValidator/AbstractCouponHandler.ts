import ICouponHandler from './ICouponHandler'
import ICoupon from './../../../components/coupon/model/ICoupon'
import IUser from './../../../components/users/model/IUser'

export default abstract class AbstractCouponHandler implements ICouponHandler {
  private nextHandler : ICouponHandler

  setNext (handler: ICouponHandler): ICouponHandler {
    this.nextHandler = handler
    return handler
  }

  process (user : IUser, coupon: ICoupon): ICoupon | null {
    if (this.nextHandler) {
      return this.nextHandler.process(user, coupon)
    }
    return null
  }
}
