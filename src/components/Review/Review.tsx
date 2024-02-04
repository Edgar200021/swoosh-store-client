import {Stars} from "@/components/Stars/Stars.tsx";
import {formatDate} from "@/helpers/date.ts";
import {cn} from "@/helpers/cn.ts";
import {Review as ReviewType} from '../../store/review/interfaces.ts'

interface Props extends ReviewType{
	className?: string
}


export const Review = ({className, text,images,rating,user: {name,id}, createdAt}: Props) => {

	console.log(createdAt)
	return <div className={cn("flex flex-col gap-y-2 max-w-[640px] w-full", className)}>
		<span className="block text-[#2f2f2f] text-xl">{name || 'Анонимный'}</span>
		<div className="flex items-center gap-x-5">
			<Stars clickable={false} stroke='#454A4C' initialRating={rating}/>
			{formatDate(new Date(createdAt))}
		</div>
		<p className='text-[#363636] space tracking-wide'>{text}</p>
		{images && <ul className='flex gap-x-2 pt-5'>{images.map(i => <li className='max-h-[115px] max-w-[172px] min-h-[105px] min-w-40 mini-phone:min-w-32  '>
			<img src={i} className='h-full object-contain' alt={"review"}/>
		</li>)}
		</ul>}

	</div>
}
