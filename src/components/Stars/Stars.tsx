import {Star} from "@/components/ui/Star.tsx";
import {useState} from "react";
import {cn} from "@/helpers/cn.ts";
import {Button} from "@/components/ui/Button.tsx";

interface Props {
	className?: string
	quantity?: number
	initialRating: number
	clickable?: boolean
}

export const Stars = ({className, quantity = 5, initialRating, clickable}: Props) => {
	const [selectedRating, setSelectedRating] = useState(initialRating)
	const [hoveredRating, setHoveredRating] = useState<number | null>(null)

	return <ul className={cn('flex gap-x-1', className)}>
		{
			Array.from({length: quantity}, (_, i) =>
					<li className='w-5 h-5' key={i}>
						<Button className={clickable ? 'cursor-pointer' : 'cursor-auto'} disabled  variant='clear'>
						<Star
									fill='#fff'
									onMouseOver={clickable ? () => setHoveredRating(i + 1) : undefined}
									onMouseLeave={clickable ? () => setHoveredRating(null) : undefined}
									onClick={clickable ? () => setSelectedRating(i + 1) : undefined}
									full={hoveredRating ? hoveredRating >= i + 1 : selectedRating >= i + 1}
									/>
						</Button>
					</li>
			)
		}
	</ul>

}
