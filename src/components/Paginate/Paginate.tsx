import ReactPaginate from "react-paginate";
import {cn} from "@/helpers/cn.ts";
import {useSearchParams} from "react-router-dom";
import {memo, MutableRefObject, useEffect, useRef} from "react";


interface Props {
	className?: string
	totalQuantity: number
	limit: number
	disabled?: boolean
	initialPage?: number
	prefetch?: (page: number) => void
}

export const Paginate = memo(({className, totalQuantity, limit, disabled, initialPage = 1, prefetch}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
	const ref = useRef<HTMLDivElement>(null)

	const onChange = (({selected}: {selected: number} )=> {
		searchParams.set('page', (selected + 1).toString())
		setSearchParams(searchParams)
	})

	const currentPage = Number(searchParams.get('page')),
			pageCount = Math.ceil(totalQuantity / limit)

	useEffect(() => {
		if (!ref.current || !prefetch) return
		const link = ref.current.querySelector('a[aria-label="Next page"]')
		const handler = () => {
			if (currentPage === pageCount) return
			prefetch(currentPage === 0 ? 2 : currentPage + 1)
		}

		link!.addEventListener('mouseenter', handler)

		return () => link!.removeEventListener('mouseenter', handler)
	}, [currentPage, pageCount])


	return <div ref={ref as MutableRefObject<HTMLDivElement>}>
		<ReactPaginate
				onPageChange={onChange}
				className={cn('paginate flex justify-center items-center gap-x-[10px] lg-phone:gap-x-2 md-phone:text-center md-phone:gap-y-3 md-phone:flex-wrap   ', className)}
				breakLabel="..."
				nextLabel={<span> Далее &#8594;</span>}
				previousLabel={<span>&#8592; Назад</span>}
				nextClassName={'ml-5 lg-phone:ml-1'}
				previousClassName={'mr-5 lg-phone:mr-1'}
				pageRangeDisplayed={2}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				pageClassName={'w-10 h-10  border-[#EAEAEA] border-[1px]  transition-colors duration-300 ease'}
				pageLinkClassName={cn('w-full h-full flex items-center justify-center', {
					'cursor-not-allowed': disabled
				})}
				activeClassName={'bg-black text-white'}
				disabledLinkClassName={'opacity-50 cursor-not-allowed'}
				initialPage={initialPage - 1}
		/>
	</div>
})