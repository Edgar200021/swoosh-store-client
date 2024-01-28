import {cn} from '../../helpers/cn'

import {Button} from '../ui/Button'
import {Input} from '../ui/Input'

import footerLogo from '../../assets/icons/footer-logo.svg'
import instagram from '../../assets/icons/instagram.svg'
import vk from '../../assets/icons/vk.svg'
import twitter from '../../assets/icons/twitter.svg'
import readyCode from '../../assets/icons/readycode.svg'
import {Collapsible} from '../Collapsible/Collapsible'
import {useResize} from '../../hooks/useResize'
import {useRef} from 'react'

interface Props {
  className?: string
}

export const Footer = ({className}: Props) => {
  const ref = useRef<HTMLElement | null>(null)
  const width = useResize(ref)


  return (
      <footer
          ref={ref}
          className={cn('bg-[#1E1E1E] pt-[50px] pb-[33px]', className)}
      >
        <div className="container flex gap-x-40 lg-tablet:gap-x-10  gap-y-10 flex-wrap justify-between mb-[50px]">
          <div
              className="max-w-[214px] lg-phone:gap-x-5  lg-phone:flex lg-phone:max-w-full lg-phone:flex-wrap lg-phone:justify-between  ">
            <div className="flex gap-x-[10px] mb-[55px] lg-phone:mb-6 ">
              <img
                  src={footerLogo}
                  className="h-[30px] w-[90px]"
                  alt="Swoosh store"
              />
              <span className="uppercase text-2xl font-extrabold text-white leading-4">
              Swoosh
              <span className="block pt-2 text text-[#1E1E1E]">store</span>
            </span>
            </div>
            <ul className="flex gap-x-3 mb-[14px] ">
              <li className="w-[46px] h-[46px]">
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={instagram} alt="instagram"/>
                </a>
              </li>
              <li className="w-[46px] h-[46px]">
                <a href="https://vk.com/" target="_blank">
                  <img src={vk} alt="vk"/>
                </a>
              </li>
              <li className="w-[46px] h-[46px]">
                <a href="https://twitter.com/?lang=ru" target="_blank">
                  <img src={twitter} alt="twitter"/>
                </a>
              </li>
            </ul>
            <span
                className="text-[13px] text-[#6B6B6B] block max-w-[180px] lg-phone:max-w-full lg-phone:text-center lg-phone:w-full">
            Instagram является запрещенной соц.сетью в РФ
          </span>
          </div>
          <div
              className="text-white flex justify-between  phone:flex-col phone:gap-x-0 phone:gap-y-[10px] phone:items-center gap-x-[60px]  tablet:grow-0 phone:grow">
            <div className="phone:pb-[10px] phone:border-b-[1px] phone:border-white/10 phone:w-full phone:text-center">
               <span className={cn("block font-medium text-sm uppercase text-[#707070] mb-6", {
                 hidden: width <= 400
               })}>Информация</span>
              <Collapsible
                  renderTrigger={fn => (
                      <Button
                          className={cn('hidden font-medium text-sm uppercase text-[#707070]', {
                            'inline-block mb-2': width <= 400,
                          })}
                          onClick={() => fn(prev => !prev)}
                          variant="clear"
                      >
                        Информация
                      </Button>
                  )}
                  collapsed={width > 400 ? true : undefined}
              >
                <ul className="space-y-2">
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="about"
                    >
                      О магазине
                    </Button>
                  </li>
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="blog"
                    >
                      Наш блог
                    </Button>
                  </li>
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="delivery"
                    >
                      Доставка
                    </Button>
                  </li>
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="payment"
                    >
                      Оплата
                    </Button>
                  </li>
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="contacts"
                    >
                      Контакты
                    </Button>
                  </li>
                </ul>
              </Collapsible>
            </div>
            <div className="phone:pb-[10px] phone:border-b-[1px] phone:border-white/10 phone:w-full phone:text-center">
            <span className={cn("block font-medium text-sm uppercase text-[#707070] mb-6", {
              hidden: width <= 400
            })}>Товары</span>
              <Collapsible
                  renderTrigger={fn => (
                      <Button
                          className={cn('hidden font-medium text-sm uppercase text-[#707070]', {
                            'inline-block mb-2': width <= 400,
                          })}
                          onClick={() => fn(prev => !prev)}
                          variant="clear"
                      >
                        Товары
                      </Button>
                  )}
                  collapsed={width > 400 ? true : undefined}
              >
                <ul className="space-y-2">
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="products"
                    >
                      Каталог
                    </Button>
                  </li>
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
              </Collapsible>
            </div>
            <div className="phone:pb-[10px] phone:border-b-[1px] phone:border-white/10 phone:w-full phone:text-center">
            <span className={cn("block font-medium text-sm uppercase text-[#707070] mb-6", {
              hidden: width <= 400
            })}>
              Магазин
            </span>
              <Collapsible
                  renderTrigger={fn => (
                      <Button
                          className={cn('hidden font-medium text-sm uppercase text-[#707070]', {
                            'inline-block mb-2': width <= 400,
                          })}
                          onClick={() => fn(prev => !prev)}
                          variant="clear"
                      >
                        Информация
                      </Button>
                  )}
                  collapsed={width > 400 ? true : undefined}
              >
                <ul className="space-y-2">
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="/account"
                    >
                      Личный кабинет
                    </Button>
                  </li>
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block transition-transform duration-300 ease"
                        variant="clear"
                        to="/favorites"
                    >
                      Избранное
                    </Button>
                  </li>
                  <li>
                    <Button
                        className="hover:-translate-y-1 inline-block  transition-transform duration-300 ease"
                        variant="clear"
                        to="/cart"
                    >
                      Корзина
                    </Button>
                  </li>
                </ul>
              </Collapsible>
            </div>
          </div>
          <div className="text-white md-phone:grow md-phone:text-center">
          <span className="block font-medium text-sm uppercase text-[#707070] mb-6">
            Подписка на новости
          </span>
            <span className="block mb-6">Подпишитесь на новости и скидки</span>
            <div className="border-[1px] border-white/10 py-[10px] px-4 flex gap-x-5">
              <Input
                  className="bg-transparent  placeholder:text-white placeholder:font-medium focus:outline-none border-r-[2px] border-r-white/10 border-solid border-y-0 border-l-0 "
                  type="email"
                  placeholder="Email"
              />
              <Button variant="clear" className="text-[#FF6915] font-medium">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        <hr className="block h-px border-0 border-b-[1px] p-0 border-white/10 border-solid mb-[33px] "/>
        <div
            className="container flex items-center justify-between text-white gap-x-10 tablet:flex-col tablet:gap-x-0 tablet:gap-y-5 tablet:text-center">
        <span>
          © 2023 - Swoosh Store - Интернет-магазин ориганальных кроссовок
        </span>
          <span className="underline text-nowrap">
          Политика конфиденциальности
        </span>
          <Button className="shrink-0" variant="clear" to="">
            <img src={readyCode} alt=""/>
          </Button>
        </div>
      </footer>
  )
}
