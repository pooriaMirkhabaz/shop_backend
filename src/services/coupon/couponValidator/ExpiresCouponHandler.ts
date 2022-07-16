import AbstractCouponHandler from './AbstractCouponHandler'
import ICoupon from './../../../components/coupon/model/ICoupon'
import IUser from './../../../components/users/model/IUser'

export default class ExpiresCouponHandler extends AbstractCouponHandler {
  public process (user : IUser, coupon: ICoupon): ICoupon | null {
    const now = new Date()
    if (now > coupon.expires_at) {
      throw new Error('تاریخ انقضای این کد تخفیف به پایان رسیده است')
    }
    return super.process(user, coupon)
  }
}
