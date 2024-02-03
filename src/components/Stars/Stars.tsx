import {Star} from "@/components/ui/Star.tsx";
import {useState} from "react";
import {cn} from "@/helpers/cn.ts";

interface Props {
	className?: string
	quantity?: number
	initialRating: number
}

export const Stars = ({className, quantity = 5, initialRating}: Props) => {
	const [selectedRating, setSelectedRating] = useState(initialRating)
	const [hoveredRating, setHoveredRating] = useState<number | null>(null)

	return <ul className={cn('flex gap-x-1', className)}>
		{
			Array.from({length: quantity}, (_, i) =>
					<li key={i}>
						<Star className='cursor-pointer'
									fill='#fff'
									onMouseOver={() => setHoveredRating(i + 1)}
									onMouseLeave={() => setHoveredRating(null)}
									onClick={() => setSelectedRating(i + 1)}
									full={hoveredRating ? hoveredRating >= i + 1 : selectedRating >= i + 1}
									/>
					</li>
			)
		}
	</ul>

}
