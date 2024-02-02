import {cn} from "@/helpers/cn.ts";

import emptyCartIcon from '../../assets/icons/empty-cart.svg'
import {Button} from "@/components/ui/Button.tsx";

interface Props {
	className?: string
}

export const EmptyCart = ({className}: Props) => {
	return <div className={cn('flex flex-col items-center text-center max-w-[780px] mx-auto', className)}>
		<img className='w-[75px] h-[86px] block mb-10 tablet:mb-5' src={emptyCartIcon} alt="Empty cart"/>
		<span className='font-medium text-4xl mb-5 tablet:text-[19px] tablet:leading-7'>Ваша корзина на данный момент пуста</span>
		<span className='font-[15px] mb-[30px] max-w-[670px] tablet:text-sm tablet:mb-5'>Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в корзину. На странице <b>"Каталог"</b> вы найдете много интересных товаров.</span>
		<Button to='/products' className='max-w-[273px]' color='orange'>Перейти в каталог</Button>
	</div>
}