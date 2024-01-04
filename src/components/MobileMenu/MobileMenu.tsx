import { cn } from '../../utils/cn'
import { ProductSearch } from '../ProductSearch/ProductSearch'
import { Button } from '../ui/Button'

import { CATALOG } from '../../config/constants'
import { Collapsible } from '../Collapsible/Collapsible'

import userIcon from '../../assets/icons/user.svg'
import hearthIcon from '../../assets/icons/hearth.svg'
import cartIcon from '../../assets/icons/cart.svg'
import arrowIcon from '../../assets/icons/arrow.svg'
import { Nav } from '../Nav/Nav'

interface Props {
  className?: string
}

export const MobileMenu = ({ className }: Props) => {
  return (
    <>
      <Button
        variant="clear"
        className={cn(
          'pl-[52px] relative before:absolute before:w-9 before:h-[2px] before:bg-black before:left-0 before:bottom-1 after:absolute after:w-7 after:h-[2px] after:bg-black after:left-2 after:top-2 md-phone:after:top-0 md-phone:before:-bottom-2',
          {
            'text-[#FB5A00] after:bg-[#FB5A00] before:bg-[#FB5A00]': true,
          }
        )}
      >
        <span className="md-phone:hidden">Меню</span>
      </Button>

      <div
        className={cn(
          'absolute left-0 top-0 w-full min-h-screen h-full bg-black/70 backdrop-blur-md z-[70] ',
          className
        )}
      >
        <div className="max-w-[330px] bg-white h-full overflow-y-auto">
          <ProductSearch className="mb-3" collapsible={false} />
          <div className="flex items-center gap-x-2 px-3 mb-5">
            <div className="w-3 h-4 ">
              <img src={userIcon} alt="User" />
            </div>
            <div>
              <Button variant="clear" to="auth/sign-in">
                Вход
              </Button>
              <span>\</span>
              <Button variant="clear" to="auth/sign-up">
                Регистрация
              </Button>
            </div>
            <div className="flex ml-auto gap-x-8">
              <Button className="inline-block w-full h-full" variant="clear">
                <img className="w-4 h-4" src={hearthIcon} alt="Hearth" />
              </Button>
              <Button
                className="inline-block w-full h-full border-r-[1px]"
                variant="clear"
              >
                <img className="w-4 h-4" src={cartIcon} alt="User" />
              </Button>
            </div>
          </div>
          <span className="block bg-black text-white py-5 px-4 mb-3 uppercase font-medium text-sm">
            Каталог
          </span>

          <div className=" divide-y-2  divide-[#EAEAEA]  ">
            <div className="pl-6 pr-4 pb-2 ">
              {CATALOG.map(({ label, values }) => {
                return (
                  <Collapsible
                    key={label}
                    className="mb-1"
                    renderTrigger={(fn, isCollapsed) => (
                      <Button
                        variant="clear"
                        className="flex w-full items-center justify-between uppercase font-medium text-[15px] mb-1"
                        onClick={() => fn(prev => !prev)}
                      >
                        {label}
                        <img
                          className={cn(
                            'w-2 h-2  transition-transform duration-300 ease',
                            {
                              '-rotate-180 ': isCollapsed,
                            }
                          )}
                          src={arrowIcon}
                          alt="arrow"
                        />
                      </Button>
                    )}
                  >
                    <ul className="pl-4 text-sm">
                      {values.map(value => (
                        <li key={value}>
                          <Button variant="clear" to="shop">
                            {value}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                )
              })}
            </div>
            <Button
              className="uppercase block py-5 px-4 font-medium border-solid"
              variant="clear"
              to="products?for=men"
            >
              Мужские
            </Button>
            <Button
              className="uppercase block py-5 px-4 font-medium border-solid"
              variant="clear"
              to="products?for=women"
            >
              Женские
            </Button>
            <Button
              className="uppercase block py-5 px-4 font-medium border-solid"
              variant="clear"
              to="products?for=kids"
            >
              Детские
            </Button>
            <Button
              className="uppercase block py-5 px-4 font-medium border-solid"
              variant="clear"
              to="products?sale=true"
            >
              Распродажа
            </Button>

            <Nav className="px-4 py-4" />
          </div>
        </div>
      </div>
    </>
  )
}
