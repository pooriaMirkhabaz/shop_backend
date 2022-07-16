import ICoupon from '../../../../components/coupon/model/ICoupon'
import AbstractCouponHandler from './AbstractCouponHandler'
import IUser from './../../../../components/users/model/IUser'

export default class LimitCouponHandler extends AbstractCouponHandler {
  public process (user : IUser, coupon: ICoupon): ICoupon | null {
    if (coupon.used >= coupon.limit) {
      throw new Error('این کد تخفیف معتبر نمیباشد')
    }
    return super.process(user, coupon)
  }
}
