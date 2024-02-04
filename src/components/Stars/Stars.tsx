import {Star} from "@/components/ui/Star.tsx";
import {useState} from "react";
import {cn} from "@/helpers/cn.ts";
import {Button} from "@/components/ui/Button.tsx";

interface Props {
	className?: string
	quantity?: number
	initialRating: number
	clickable?: boolean
	fill?: string
	stroke?: string
	onRating?: (rating: number) => void
}

export const Stars = ({className, quantity = 5, initialRating, clickable = true, onRating, fill = '#fff', stroke}: Props) => {
	const [selectedRating, setSelectedRating] = useState(initialRating)
	const [hoveredRating, setHoveredRating] = useState<number | null>(null)


	return <ul className={cn('flex gap-x-1', className)}>
		{
			Array.from({length: quantity}, (_, i) =>
					<li className='w-5 h-5' key={i}>
						<Button
								onMouseOver={clickable ? () => setHoveredRating(i + 1) : undefined}
								onMouseLeave={clickable ? () => setHoveredRating(null) : undefined}
								onClick={() => {
									onRating?.(i + 1)
									setSelectedRating(i + 1)
								}}
								type='button'
								className={clickable ? 'cursor-pointer' : 'cursor-auto'} disabled={!clickable}  variant='clear'>
						<Star
									fill={fill}
									stroke={stroke}
									full={hoveredRating ? hoveredRating >= i + 1 : selectedRating >= i + 1}
									/>
						</Button>
					</li>
			)
		}
	</ul>

}
