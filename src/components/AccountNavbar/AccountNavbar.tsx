import {ACCOUNT_NAVBAR} from '../../config/constants.ts'
import {useLazyLogoutQuery} from '../../store/auth/authApi.ts'
import {cn} from '../../utils/cn.ts'


import {Button} from '../ui/Button.tsx'
import {Collapsible} from "../Collapsible/Collapsible.tsx";
import {useResize} from "../../hooks/useResize.ts";
import {MutableRefObject, useRef, useState} from "react";

interface Props {
  className?: string
}


export const AccountNavbar = ({className}: Props) => {
  const [logout, {isLoading}] = useLazyLogoutQuery()
  const [collapsed, setCollapsed] = useState(false)
  const ref = useRef<HTMLElement | null>(null)
  const width = useResize(ref, true)


  if (isLoading) return <h1>Loading...</h1>


  return (
      <div ref={ref as MutableRefObject<HTMLDivElement>}
           className={cn('max-w-xs w-full md-tablet:max-w-full  ', className)}>
        <Button onClick={() => setCollapsed(prev => !prev)} variant='clear'
                className=' w-full border-[1px] mb-5 font-medium text-[13px] uppercase p-5 hidden border-[#EAEAEA] border-solid md-phone:block'>{!collapsed ? 'Открыть ' : 'Закрыть '}
          меню кабинета</Button>
        <Collapsible collapsed={width <= 460 ? collapsed : true}
        >
          <aside>
            <ul
                className='border-[#EAEAEA] border-x-[1px] border-b-[#EAEAEA] border-b-[1px] md-tablet:flex [&>li]:md-tablet:max-w-[120px] [&>li]:md-tablet:min-w-[90px] [&>li]:md-tablet:min-h-[32px] [&>li]:md-tablet:w-full md-tablet:divide-x-[1px] md-tablet:divide-y-0 md-tablet:border-y-[1px] md-tablet:border-y-[#EAEAEA] md-tablet:[&>li>a]:h-full lg-phone:grid lg-phone:grid-rows-2 lg-phone:grid-cols-3  lg-phone:[&>li]:max-w-full lg-phone:divide-y-[1px] md-phone:block '>
              {ACCOUNT_NAVBAR.map(({to, label, icon}) => {

                const handleClick = to === '/' ? () => logout(null) : () => width <= 400 && setCollapsed(false)

                return <li key={label}>
                  <Button onClick={handleClick}
                          to={to}
                          className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white flex lg-tablet:px-[20px] md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4 md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black border-t-[#EAEAEA] border-t-[1px] border-solid uppercase font-medium text-[13px]  hover:text-white transition-colors duration-300 ease  group md-tablet:border-t-0 md-phone:px-3 md-phone:py-4 md-phone:gap-y-2'
                          variant='clear'>
                    <svg
                        className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                      <use xlinkHref={icon}/>
                    </svg>

                    {label}
                  </Button>
                </li>
              })}
            </ul>
          </aside>
        </Collapsible>
      </div>
  )
}
