import { cn } from '../../utils/cn'

import user from '../../assets/icons/user.svg'
import logo from '../../assets/icons/logo.svg'
import hearth from '../../assets/icons/hearth.svg'
import cart from '../../assets/icons/cart.svg'

import { Button } from '../ui/Button'
import { MobileMenu } from '../MobileMenu/MobileMenu'

interface Props {
  className?: string
}

export const HeaderMobile = ({ className }: Props) => {
  return (
    <header
      className={cn('h-[60px] w-full fixed backdrop-blur-xl z-50', className)}
    >
      <div className="border-[#EAEAEA] border-b-[1px]  ">
        <div className="container flex items-center gap-x-8 phone:gap-x-2   ">
          <div className="w-[88px]  pr-[30px]  flex items-center justify-center py-5  border-r-[1px] border-r-[#EAEAEA] shrink-0 md-phone:order-1 md-phone:pr-0 md-phone:pl-[30px] md-phone:border-r-0 md-phone:border-l-[1px]">
            <Button variant="clear" to="/">
              <img src={logo} alt="Swoosh Store" />
            </Button>
          </div>

          <MobileMenu />

          <div className="ml-auto [&>*]:px-4 [&>*]:py-5 [&>*]:border-solid [&>*]:border-[#EAEAEA] [&>*]:border-l-[1px]  flex items-center shrink-0 order-3">
            <Button
              className="inline-block w-full h-full border-r-[1px] phone:hidden"
              variant="clear"
            >
              <img className="w-4 h-4" src={user} alt="User" />
            </Button>
            <Button className="inline-block w-full h-full" variant="clear">
              <img className="w-4 h-4" src={hearth} alt="Hearth" />
            </Button>
            <Button
              className="inline-block w-full h-full border-r-[1px]"
              variant="clear"
            >
              <img className="w-4 h-4" src={cart} alt="User" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
