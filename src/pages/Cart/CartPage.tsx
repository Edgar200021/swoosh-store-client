import {cn} from "@/helpers/cn.ts";
import {CartSneakerList, SneakersList} from "@/components/Lists/SneakersList.tsx";
import {Input} from "@/components/ui/Input.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {useCallback, useMemo, useState} from "react";
import {Notification} from "@/components/Notification/Notification.tsx";


interface Props {
	className?: string
}
export const CartPage = ({className}: Props) => {
	const [totalPrice, setTotalPrice] = useState<number>(0)
	const [isError, setIsError] = useState(false)

	const handleTotalPrice = useCallback((totalPrice: number)  => {
			setTotalPrice(totalPrice)
	},[])

	const productsLimit = useMemo(() => ({limit: 12}), [])

	return   <main className={cn('container pt-40 md-tablet:pt-20 mb-44 tablet:mb-20', className)}>
		<section className="pb-[90px] mb-[60px]">
			<h1 className='font-medium text-5xl mb-10'>Корзина товаров</h1>

			{isError ? <Notification className='max-w-[350px]' variant='error'/> : !totalPrice ? <Notification variant='basket'/>
									: <div className="flex gap-x-5 gap-y-14 justify-between items-start mini-desktop:flex-col relative">
						<CartSneakerList onError={setIsError}  onTotalPrice={handleTotalPrice} className='max-w-5xl w-full grow '/>
						<div className='bg-gray-300/30 p-5 pt-7 grow-0 max-w-xs w-full sticky top-32 right-0 mini-desktop:max-w-full'>
				<span className="block text-[#1d1d27] text-[28px] font-medium mb-6">
					Итого
				</span>
							<div className='grid grid-cols-[min-content,1fr,max-content] items-center gap-x-3 mb-10'>
								<span>Сумма</span>
								<span className="border-[1px] border-gray-300 border-dashed"></span>
								<span>{totalPrice.toFixed(2)} ₽</span>
							</div>
							<Input className='block !bg-transparent border-0 placeholder:text-black pb-2  ' placeholder='Промокод'/>
							<span className="block pl-4 mb-4"></span>
							<hr className='h-[2px] bg-black mb-10'/>
							<Button>Оформить заказ</Button>
						</div>
					</div>
			}
		</section>

			{!!totalPrice && !isError  && <section className='relative'>
				<h2 className='text-[45px] font-medium mb-10 max-w-[400px]'>Возможно вас заинтересует</h2>
				<SneakersList filter={{...productsLimit}} withSlider={true}/>
			</section>}

			</main>
}