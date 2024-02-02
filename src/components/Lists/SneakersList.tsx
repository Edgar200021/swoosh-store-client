import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {SneakerFilter} from '../../store/sneaker/interfaces'
import {useGetAllProductsQuery, usePrefetch} from '../../store/sneaker/sneakerApi'
import {cn} from '../../helpers/cn'
import {isCustomError, validateError} from '../../helpers/validateError'
import {CartSneaker, Sneaker} from '../Sneaker/Sneaker'
import {Button, SwiperButtons} from '../ui/Button'
import {getFavoriteProducts} from "../../store/sneaker/sneakerSlice.ts";
import {useAppSelector} from "../../store/store.ts";

import emptyFavoriteIcon from '../../assets/icons/empty-favorites.svg'
import {Paginate} from "@/components/Paginate/Paginate.tsx";
import {useGetCartProductsQuery} from "@/store/cart/cartApi.ts";
import {useGetSearchParams} from "@/hooks/useGetSearchParams.ts";
import {Loader} from "@/components/ui/Loader.tsx";
import {memo, useEffect} from "react";

interface Props {
  className?: string
  filter?: Partial<SneakerFilter>
  withSlider?: boolean
  withPaginate?: boolean
}

export const SneakersList = memo((
    {className, filter, withSlider, withPaginate}: Props
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


  if (error) {
    if (isCustomError(error)) validateError(error)
  }
  if (isLoading) return <h1>Loading...</h1>
  if (!data) return null


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
              <Sneaker sneaker={sneaker}/>
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
        {data?.data.map(sneaker => (
            <Sneaker key={sneaker._id} sneaker={sneaker}/>
        ))}
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
  </ul> : <div className='max-w-[650px] mx-auto flex flex-col items-center justify-center text-center gap-y-5'>
    <img className='w-[100px] h-22' src={emptyFavoriteIcon}
         alt='Empty favorites'/>
    <span className='text-[35px] font-medium md-tablet:text-[19px]'> Ваш список желаний пуст</span>
    <span className='font-bold text-[15px] text=[#383838] md-tablet:text-[13px]'>У вас пока нет товаров в списке желаний.<br/>На странице "Каталог" вы найдете много интересных товаров.</span>
    <Button className='max-w-[270px]' to='/products' color='orange'> Перейти в каталог</Button>
  </div>
}



interface ICartSneakerList {
  className?: string
  onTotalPrice?: (totalPrice: number | null) => void
}

export const CartSneakerList = memo(({className, onTotalPrice}: ICartSneakerList) => {
  const filterObj = useGetSearchParams('size',  'limit', 'page', 'sort')
  const {data, isLoading, error, isFetching}  = useGetCartProductsQuery(filterObj)

  useEffect(() => {
    if (!onTotalPrice || !data) return
    if (!data.data.cartProducts.length) onTotalPrice(null)
    onTotalPrice(data.data.totalPrice)
  }, [data, onTotalPrice]);

  if (error) {
    if (isCustomError(error)) validateError(error)
  }
  if (isLoading) return <Loader/>
  if (!data) return null
 if (!data.data.cartProducts.length) return <h1>Нет товаров</h1>

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

