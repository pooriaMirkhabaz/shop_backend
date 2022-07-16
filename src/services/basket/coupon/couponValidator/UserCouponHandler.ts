import ICoupon from '../../../../components/coupon/model/ICoupon'
import AbstractCouponHandler from './AbstractCouponHandler'
import IUser from './../../../../components/users/model/IUser'

export default class UserCouponHandler extends AbstractCouponHandler {
  public process (user : IUser, coupon: ICoupon): ICoupon | null {
    const { userConstraint } = coupon.constraints
    if (user.id !== userConstraint.id) {
      throw new Error('این کد تخفیف برای کاربری شما صادر نشده است')
    }
    return super.process(user, coupon)
  }
}
