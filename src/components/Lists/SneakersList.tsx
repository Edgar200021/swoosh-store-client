import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {SneakerFilter} from '../../store/sneaker/interfaces'
import {useGetAllProductsQuery, usePrefetch} from '../../store/sneaker/sneakerApi'
import {cn} from '../../helpers/cn'
import {isCustomError, validateError} from '../../helpers/validateError'
import {Sneaker} from '../Sneaker/Sneaker'
import {Button, SwiperButtons} from '../ui/Button'
import {getFavoriteProducts} from "../../store/sneaker/sneakerSlice.ts";
import {useAppSelector} from "../../store/store.ts";

import emptyFavoriteIcon from '../../assets/icons/empty-favorites.svg'
import {Paginate} from "@/components/Paginate/Paginate.tsx";

interface Props {
  className?: string
  filter?: Partial<SneakerFilter>
  withSlider?: boolean
  withPaginate?: boolean
}

export const SneakersList = (
    {className, filter, withSlider, withPaginate}: Props
) => {

  const {data, error, isLoading, isFetching} = useGetAllProductsQuery({
    ...filter,
    fields: '-description -size -rating -material',
  })
  const prefetchProducts = usePrefetch('getAllProducts')

  const handlePrefetch = (page: number) => {
     prefetchProducts({ ...filter,
       fields: '-description -size -rating -material',
       page})
  }


  if (error) {
    if (isCustomError(error)) validateError(error)
  }

 if (!data) return null
 if (isLoading) return <h1>Loading...</h1>


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
            className="absolute right-8 top-8 tablet:right-[25px] phone:right-[15px]  "
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
}

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

