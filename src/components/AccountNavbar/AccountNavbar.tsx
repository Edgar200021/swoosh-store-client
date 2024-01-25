import {cn} from "../../utils/cn.ts";


import sprites from '../../assets/icons/sprite.svg'
import {Button} from "../ui/Button.tsx";
interface Props {
    className?: string
}


export const AccountNavbar = ({className}: Props) => {
    return (
        <aside className={cn('max-w-xs w-full md-tablet:max-w-full ', className)}>
            <ul className='border-[#EAEAEA] border-x-[1px] divide-y-[1px] divide-[#EAEAEA] md-tablet:flex [&>li]:md-tablet:max-w-[120px] [&>li]:md-tablet:min-w-[90px] [&>li]:md-tablet:min-h-[32px] [&>li]:md-tablet:w-full md-tablet:divide-x-[1px] md-tablet:divide-y-0 md-tablet:border-y-[1px] md-tablet:border-y-[#EAEAEA] '>
                <li>
                    <Button to="/personal-account"
                            className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white flex md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4 md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black border-t-[#EAEAEA] border-t-[1px] border-solid uppercase font-medium text-[13px]  hover:text-white transition-colors duration-300 ease  group md-tablet:border-t-0'
                            variant='clear'>
                        <svg
                            className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                            <use xlinkHref={`${sprites}#user-edit`}/>
                        </svg>

                        Редактировать профиль

                    </Button>

                </li>
                <li>
                    <Button to="orders"
                            className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white aria-[current=page]:[&>svg]:hidden  flex md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4 md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black uppercase font-medium text-[13px]  hover:text-white transition-colors duration-300 ease  group'
                            variant='clear'>
                        <svg
                            className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                            <use xlinkHref={`${sprites}#my-orders`}/>
                        </svg>

                        Мои заказы

                    </Button>

                </li>
                <li>
                    <Button to="addresses"
                            className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white flex md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4  md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black uppercase font-medium text-[13px] hover:text-white transition-colors duration-300 ease  group'
                            variant='clear'>
                        <svg
                            className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                            <use xlinkHref={`${sprites}#address`}/>
                        </svg>

                        Мой адрес

                    </Button>

                </li>
                <li>
                    <Button to="favorite-products"
                            className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white flex md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4 md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black uppercase font-medium text-[13px] hover:text-white transition-colors duration-300 ease  group'
                            variant='clear'>
                        <svg
                            className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                            <use xlinkHref={`${sprites}#favorite-products`}/>
                        </svg>

                        Избранные товары

                    </Button>

                </li>
                <li>
                    <Button to="change-password"
                            className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white flex  md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4 md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black uppercase font-medium text-[13px] hover:text-white transition-colors duration-300 ease  group'
                            variant='clear'>
                        <svg
                            className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                            <use xlinkHref={`${sprites}#change-password`}/>
                        </svg>

                        Сменить пароль

                    </Button>

                </li>
                <li>
                    <Button to="/"
                            className='py-[26px] px-[30px] aria-[current=page]:bg-black aria-[current=page]:text-white flex md-tablet:flex-col  md-tablet:gap-x-0 md-tablet:gap-y-4 md-tablet:text-center md-tablet:py-4 md-tablet:px-4 md-tablet:text-[11px] items-center gap-x-[10px] hover:bg-black uppercase font-medium text-[13px] border-b-[#EAEAEA] border-b-[1px] border-solid hover:text-white transition-colors duration-300 ease group md-tablet:border-b-0'
                            variant='clear'>
                        <svg
                            className='w-6 h-6 opacity-90 stroke-[#C7C7C7] group-hover:stroke-white transition-colors duration-300 ease'>
                            <use xlinkHref={`${sprites}#logout`}/>
                        </svg>

                        выйт из аккаунта

                    </Button>

                </li>
            </ul>
        </aside>
    );
};
