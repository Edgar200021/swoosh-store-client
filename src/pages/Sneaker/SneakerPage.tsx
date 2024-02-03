import {useParams} from "react-router-dom";
import {useGetProductQuery} from "@/store/sneaker/sneakerApi.ts";
import {SingleSneaker} from "@/components/Sneaker/Sneaker.tsx";
import {cn} from "@/helpers/cn.ts";
import {Loader} from "@/components/ui/Loader.tsx";
import {Notification} from "@/components/Notification/Notification.tsx";
import {Tabs} from "@/components/Tabs/Tabs.tsx";
import {Review} from "@/components/Review/Review.tsx";

interface Props {
	className?: string
}


export const SneakerPage = ({className}: Props) => {
  const params = useParams()
	const {data, error,  isLoading} = useGetProductQuery(params.id!)


	if (isLoading) return <Loader/>
	if (!data || error) return <Notification variant='error' className='max-w-[350px]'/>
	return <main className={cn('pt-40 md-tablet:pt-20 mb-44 tablet:mb-20', className)}>
		<SingleSneaker {...data}>
			<Tabs  tabsInfo={[
				{tabTitle: 'Описание', tabContent: <SingleSneaker.Description/>},
				{tabTitle: 'Характеристики', tabContent: <SingleSneaker.Characteristics className='max-w-[525px]'/>},
				{tabTitle: 'Отзывы', tabContent: <Review/>}
			]}/>
		</SingleSneaker>

	</main>
}