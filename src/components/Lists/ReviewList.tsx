import {Sneaker} from "@/store/sneaker/interfaces.ts";
import {useGetAllReviewsQuery} from "@/store/review/reviewApi.ts";
import {cn} from "@/helpers/cn.ts";
import {BaseFilter} from "@/types/types.ts";
import {Review} from "@/components/Review/Review.tsx";
import {Notification} from "@/components/Notification/Notification.tsx";
import {Spinner} from "@/components/ui/Spinner.tsx";
import {useGetSearchParams} from "@/hooks/useGetSearchParams.ts";
import {Paginate} from "@/components/Paginate/Paginate.tsx";

interface Props {
	className?: string
	sneakerId: Sneaker['_id']
	filter?:Partial<BaseFilter>
}


export const ReviewList = ({sneakerId, className}: Props) => {
	const filter = useGetSearchParams('page', 'limit', 'sort', 'fields')
	const {data, error, isLoading, isFetching} = useGetAllReviewsQuery({productId: sneakerId, filter})

	if (isLoading) return <Spinner/>
	if (!data || error) return <Notification variant='error' className='max-w-[350px]'/>

	console.log(data)

	return <div className={cn('flex flex-col gap-x-10', className)}>
		<ul className='flex flex-col gap-y-[30px]'>
			{data.data.map(r => <Review key={r._id} {...r}/>)}
		</ul>
		<Paginate totalQuantity={data.quantity} limit={Number(filter.limit) || 5}/>
	</div>
}