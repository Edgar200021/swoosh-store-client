import {Stars} from "@/components/Stars/Stars.tsx";
import {formatDate} from "@/helpers/date.ts";
import {cn} from "@/helpers/cn.ts";
import review1 from '../../assets/review-1.jpg'
import review2 from '../../assets/review-2.jpg'

interface Props {
	className?: string
}


export const Review = ({className}: Props) => {

	return <div className={cn("flex flex-col gap-y-2 max-w-[640px] w-full", className)}>
		<span className="block text-[#2f2f2f] text-xl">Василий Евгеньевич</span>
		<div className="flex items-center gap-x-5">
			<Stars clickable={false} initialRating={2}/>
			{formatDate(new Date('2023-08-21'))}
		</div>
		<p className='text-[#363636] space tracking-wide'>Легкие, поддерживают стопу и идеально сидят на ноге. Воздушная подошва дарит ощущение плавного движения.
			Однозначно рекомендую!</p>
		<ul className='flex gap-x-2 pt-5'>
			<li className='max-h-[115px] max-w-[172px] min-h-[105px] min-w-40 mini-phone:min-w-32  '>
				<img src={review1}/>
			</li>
			<li  className='max-h-[115px] max-w-[172px] min-h-[105px] min-w-40 mini-phone:min-w-32 '>
				<img src={review2}/>

			</li>
		</ul>
	</div>
}
