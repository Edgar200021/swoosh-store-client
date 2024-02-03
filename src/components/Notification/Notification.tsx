import {cn} from "@/helpers/cn.ts";


import {Button} from "@/components/ui/Button.tsx";
import {NOTIFICATIONS} from "@/config/constants.tsx";
import {ReactNode} from "react";


interface Props {
	className?: string
	variant: keyof typeof NOTIFICATIONS
	supText?: string
	subText?: ReactNode
}


export const Notification = ({className, variant, subText, supText}: Props) => {
	return <div className={cn('flex flex-col items-center text-center max-w-[780px] mx-auto ', className)}>
		<img className='w-[75px] h-[86px] block mb-10 tablet:mb-5' src={NOTIFICATIONS[variant].icon} alt="Empty cart"/>
		<span
				className='font-medium text-4xl mb-5 tablet:text-[19px] tablet:leading-7'>{supText || NOTIFICATIONS[variant].supText}</span>
		{subText || NOTIFICATIONS[variant].subText}
		{variant !== 'error' && <Button to={NOTIFICATIONS[variant].to} className='max-w-[273px]' color='orange'>{variant === 'product' ? 'Перейти на главную' : 'Перейти в каталог'}</Button>}
	</div>
}