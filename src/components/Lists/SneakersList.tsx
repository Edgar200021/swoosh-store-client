import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {SneakerFilter} from '../../store/sneaker/interfaces'
import {useGetAllProductsQuery, usePrefetch} from '../../store/sneaker/sneakerApi'
import {cn} from '../../helpers/cn'
import {CartSneaker, Sneaker} from '../Sneaker/Sneaker'
import {SwiperButtons} from '../ui/Button'
import {getFavoriteProducts} from "../../store/sneaker/sneakerSlice.ts";
import {useAppSelector} from "../../store/store.ts";
import {Paginate} from "@/components/Paginate/Paginate.tsx";
import {useGetCartProductsQuery} from "@/store/cart/cartApi.ts";
import {useGetSearchParams} from "@/hooks/useGetSearchParams.ts";
import {Loader} from "@/components/ui/Loader.tsx";
import {memo, useEffect} from "react";
import {Notification} from "@/components/Notification/Notification.tsx";
import {SneakerSkeleton} from "@/components/Skeletons/Skeletons.tsx";

interface Props {
  className?: string
  filter?: Partial<SneakerFilter>
  withSlider?: boolean
  withPaginate?: boolean
  onError?: (isError: boolean) => void
}

export const SneakersList = memo((
    {className, filter, withSlider, withPaginate, onError}: Props
) => {

  const {data, error, isLoading, isFetching} = useGetAllProductsQuery({
    ...filter,
    fields: '-description -size -rating -material',
  }, {pollingInterval: 3.6e+6})
  const prefetchProducts = usePrefetch('getAllProducts')

  const handlePrefetch = (page: number) => {
     prefetchProducts({ ...filter,
       fields: '-description -size -rating -material',
       page}, )
  }

  if (isLoading) return  <Loader/>
  if (error || !data)   if (error || !data) return onError?.(true) || <Notification className='max-w-[350px]' variant='error'/>

  console.log(data.data.length)

  if (!data.data.length) return <Notification variant='product' subText={filter && Object.keys(filter).filter(k => k !== 'limit').length ? <span className='font-[15px] mb-[30px] max-w-[670px] tablet:text-sm tablet:mb-5'>По вашему запросу товары не были найдены.Попробуйте изменить параметры поиска</span> : undefined }  className='max-w-[350px]'/>


  return withSlider ? (
      <Swiper
          breakpoints={{
            360: {
              slidesPerView: 2,
            },
            450: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="static !w-full"
          spaceBetween={40}
      >
        <SwiperButtons
            className="absolute right-8 top-8 tablet:right-[25px] phone:right-[15px]"
            length={data?.data.length}
        />
        {data.data.map(sneaker => (
            <SwiperSlide key={sneaker._id}>
              {isFetching ? <SneakerSkeleton/> : <Sneaker sneaker={sneaker}/>}
            </SwiperSlide>
        ))}
      </Swiper>
  ) : (
      <>
      <ul
          className={cn(
              'grid grid-cols-sneaker-list gap-10 justify-items-center',
              className
          )}
      >
        {isFetching ? <SneakerSkeleton/> : data.data.map(sneaker => (
          <Sneaker key={sneaker._id} sneaker={sneaker}/>
      )) }

      </ul>
        {withPaginate && <Paginate disabled={isLoading || isFetching} prefetch={handlePrefetch} initialPage={filter?.page} totalQuantity={data.quantity} limit={filter?.limit || 18} className='pt-10 mb-20 gap-x-2 '/> }
        </>
  )
})

export const FavoriteSneakerList = ({className}: Pick<Props, 'className'>) => {
  const favoriteProducts = useAppSelector(getFavoriteProducts)

  return favoriteProducts.length ? <ul
      className={cn(
          'grid grid-cols-sneaker-list-favorite gap-10 justify-items-center',
          className
      )}
  >
    {favoriteProducts.map(sneaker => <Sneaker key={sneaker._id} sneaker={sneaker}/>)}
  </ul> : <Notification className='max-w-[450px]' variant='favorite'/>
}



interface ICartSneakerList {
  className?: string
  onTotalPrice?: (totalPrice: number) => void
  onError?: (error: boolean) => void
}

export const CartSneakerList = memo(({className, onTotalPrice, onError}: ICartSneakerList) => {
  const filterObj = useGetSearchParams('size',  'limit', 'page', 'sort')
  const {data, isLoading, error, isFetching}  = useGetCartProductsQuery(filterObj)

  useEffect(() => {
    if (!onTotalPrice || !data) return

    onTotalPrice(data.data.totalPrice)
  }, [data, onTotalPrice]);


  if (isLoading) return <Loader/>
  if (error || !data) return onError?.(true) || <Notification className='max-w-[350px]' variant='error'/>
 if (!data.data.cartProducts.length) return <Notification variant='basket'/>

  return <div className={cn('border-[1px] border-[#EAEAEA]', className, {
    'opacity-50': isFetching
  })}>
    <div className="grid grid-cols-5 items-center px-5 py-6 gap-x-3 text-[#373737] font-bold text-sm uppercase tablet:hidden">
      <span className="col-span-2">Товар</span>
      <span >Цена</span>
      <span >Количество</span>
      <span >Сумма</span>
    </div>
    <ul className="border-t-[#EAEAEA] border-t-[1px] divide-y-[1px] tablet:border-t-0 max-h-[600px] overflow-y-auto">
      {data.data.cartProducts.map(p => <CartSneaker isLoading={isFetching} className='px-5 py-4'  key={p._id} {...p}/>)}
    </ul>
  </div>

})

