import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'

import { Catalog } from '../Catalog/Catalog'
import { ProductSearch } from '../ProductSearch/ProductSearch'

import userIcon from '../../assets/icons/user.svg'
import logo from '../../assets/icons/logo.svg'
import hearth from '../../assets/icons/hearth.svg'
import cart from '../../assets/icons/cart.svg'
import { Nav } from '../Nav/Nav'
import {useAppSelector} from "../../store/store.ts";
import {getUser} from "../../store/user/userSlice.ts";
import sprites from "../../assets/icons/sprite.svg";

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  const user = useAppSelector(getUser)


  return (
    <header
      className={cn(
        'fixed !z-50 w-full h-header shadow-xl bg-white ',
        className
      )}
    >
      <div className="container flex justify-between gap-x-5 items-center py-4 ">
        <Nav className="flex-row" />
        <div className="flex items-center gap-x-2">
          {user ? <Button
                  to='personal-account'
                    className='flex items-center gap-x-[10px] text-black'
                          variant={'clear'}>
            <svg
                className='w-6 h-6 opacity-90 stroke-black group-hover:stroke-white transition-colors duration-300 ease'>
              <use xlinkHref={`${sprites}#my-account`}/>
            </svg>
            Мой аккаунт

          </Button> : <>
            <div className="w-3 h-4 ">
              <img src={userIcon} alt="User"/>
            </div>
            <Button variant="clear" to="auth/sign-in">
              Вход
            </Button>
            <span>\</span>
            <Button variant="clear" to="auth/sign-up">
            Регистрация
            </Button></>}

        </div>
      </div>
      <div className="border-[#EAEAEA] border-y-[1px] relative ">
        <div className="container flex items-center gap-x-4 justify-between  ">
          <div
              className="w-[88px] h-5 pr-[30px]  flex items-center justify-center py-6 border-r-[1px] border-r-[#EAEAEA] shrink-0">
            <Button variant="clear" to="/">
              <img src={logo} alt="Swoosh Store" />
            </Button>
          </div>

          <ul className="text-[15px] font-medium flex gap-x-14 lg-tablet:gap-x-8  lg-tablet:text-[13px]">
            <Catalog className="left-0 top-12 " />
            <li>
              <Button
                className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                variant="clear"
                to="products?for=men"
              >
                Мужские
              </Button>
            </li>
            <li>
              <Button
                className="hover:-translate-y-1 inline-block transition-transform duration-300 ease"
                variant="clear"
                to="products?for=women"
              >
                Женские
              </Button>
            </li>
            <li>
              <Button
                className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                variant="clear"
                to="products?for=kids"
              >
                Детские
              </Button>
            </li>
            <li>
              <Button
                className="hover:-translate-y-1 inline-block transition-transform duration-300 ease"
                variant="clear"
                to="products?sale=true"
              >
                Распродажа
              </Button>
            </li>
          </ul>

          <div className="[&>*]:px-6 [&>*]:py-4 [&>*]:border-solid [&>*]:border-[#EAEAEA] [&>*]:border-l-[1px] lg-tablet:[&>*]:px-3 flex items-center shrink-0">
            <ProductSearch className="top-0 left-[50%] translate-x-[-55%] w-[1070px] lg-desktop:w-[65%]  desktop:w-[65%] desktop:translate-x-[-56%] h-full !p-0 !border-none" />
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
