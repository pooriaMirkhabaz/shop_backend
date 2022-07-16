import ICoupon from './../../../../components/coupon/model/ICoupon'
import IUser from './../../../../components/users/model/IUser'

export default interface ICouponHandler {
      setNext(handler : ICouponHandler) : ICouponHandler
      process(user : IUser, coupon : ICoupon) : ICoupon | null
}
