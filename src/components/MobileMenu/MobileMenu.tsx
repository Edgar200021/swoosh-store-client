import {cn} from '../../helpers/cn'
import {ProductSearch} from '../ProductSearch/ProductSearch'
import {Button} from '../ui/Button'

import {CATALOG} from '../../config/constants.tsx'
import {Collapsible} from '../Collapsible/Collapsible'

import userIcon from '../../assets/icons/user.svg'
import hearthIcon from '../../assets/icons/hearth.svg'
import cartIcon from '../../assets/icons/cart.svg'
import arrowIcon from '../../assets/icons/arrow.svg'
import {Nav} from '../Nav/Nav'
import {useEffect, useState} from 'react'
import {useOutsideClick} from '../../hooks/useOutsideClick'
import sprites from "../../assets/icons/sprite.svg";
import {useAppSelector} from "../../store/store.ts";
import {getUser} from "../../store/user/userSlice.ts";

interface Props {
  className?: string
}

export const MobileMenu = ({className}: Props) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const ref = useOutsideClick<HTMLDivElement>(closeMenu)
  const user = useAppSelector(getUser)


  function closeMenu() {
    setIsOpened(false)
  }

  useEffect(() => {
    if (isMounted) {
      const timerId = setTimeout(() => setIsOpened(true), 200)
      document.body.style.overflow = 'hidden'

      return () => clearTimeout(timerId)
    }
  }, [isMounted])

  useEffect(() => {
    if (!isOpened) {
      const timerId = setTimeout(() => setIsMounted(false), 500)
      document.body.style.overflow = 'auto'

      return () => clearTimeout(timerId)
    }
  }, [isOpened])

  return (
      <>
        <Button
            variant="clear"
            className={cn(
                'pl-[52px] md-phone:py-[8px] md-phone:translate-y-1  items-start  relative before:absolute before:w-9 before:h-[2px] before:bg-black before:left-0 before:bottom-1 after:absolute after:w-7 after:h-[2px] after:bg-black after:left-2 after:top-2 md-phone:after:top-0 md-phone:before:0 transition-colors duration-200 before:transition-colors before:duration-200 before:ease after:transition-colors after:duration-200 after:ease ease',
                {
                  'text-[#FB5A00] after:bg-[#FB5A00] before:bg-[#FB5A00]': isMounted,
                }
            )}
            onClick={() => setIsMounted(true)}
        >
          <span className="md-phone:hidden">Меню</span>
        </Button>

        {isMounted ? (
            <div
                className={cn(
                    'absolute top-0 w-full min-h-screen h-full bg-black/70 backdrop-blur-md z-[70] -left-[100%] transition-all duration-500 ease',
                    className,
                    {'left-0': !!isOpened}
                )}
            >
              <Button
                  variant="clear"
                  className="absolute left-[340px] mini-phone:left-[300px] top-2 text-white"
                  onClick={closeMenu}
              >
                X
              </Button>
              <div
                  ref={ref as React.RefObject<HTMLDivElement>}
                  className="max-w-[330px] mini-phone:max-w-[290px] bg-white h-full overflow-y-auto   "
              >
                <ProductSearch className="mb-3" collapsible={false}/>
                <div className="flex items-center gap-x-2 px-3 mb-5">
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

                  <div className="flex ml-auto gap-x-8">
                    <Button className="inline-block w-full h-full" variant="clear">
                      <img className="w-4 h-4" src={hearthIcon} alt="Hearth"/>
                    </Button>
                    <Button
                        className="inline-block w-full h-full border-r-[1px]"
                        variant="clear"
                    >
                      <img className="w-4 h-4" src={cartIcon} alt="User"/>
                    </Button>
                  </div>
                </div>
                <span className="block bg-black text-white py-5 px-4 mb-3 uppercase font-medium text-sm">
              Каталог
            </span>

                <div className=" divide-y-2  divide-[#EAEAEA]  ">
                  <div className="pl-6 pr-4 pb-2 ">
                    {CATALOG.map(({label, values}) => {
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

                  <Nav className="px-4 py-4"/>
                </div>
              </div>
            </div>
        ) : null}
      </>
  )
}
