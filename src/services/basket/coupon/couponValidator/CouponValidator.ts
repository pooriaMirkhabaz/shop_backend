import IUser from './../../../../components/users/model/IUser'
import ICoupon from './../../../../components/coupon/model/ICoupon'
import UserCouponHandler from './UserCouponHandler'
import LimitCouponHandler from './LimitCouponHandler'
import ExpiresCouponHandler from './ExpiresCouponHandler'

export default class CouponValidator {
  public handler (user : IUser, coupon : ICoupon) {
    const userCouponHandler = new UserCouponHandler()
    const limitCouponHandler = new LimitCouponHandler()
    const expireAtCouponHandler = new ExpiresCouponHandler()

    userCouponHandler.setNext(limitCouponHandler).setNext(expireAtCouponHandler)
    return userCouponHandler.process(user, coupon)
  }
}
