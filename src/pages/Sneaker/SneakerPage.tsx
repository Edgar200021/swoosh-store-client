import {useParams} from "react-router-dom";
import {useGetProductQuery} from "@/store/sneaker/sneakerApi.ts";
import {SingleSneaker} from "@/components/Sneaker/Sneaker.tsx";
import {cn} from "@/helpers/cn.ts";

interface Props {
	className?: string
}


export const SneakerPage = ({className}: Props) => {
  const params = useParams()
	const {data} = useGetProductQuery(params.id!)


	if (!data) return
	return <main className={cn('pt-40 md-tablet:pt-20 mb-44 tablet:mb-20', className)}>
		<SingleSneaker {...data}/>
	</main>
}