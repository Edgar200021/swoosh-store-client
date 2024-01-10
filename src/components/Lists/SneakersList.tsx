import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { SneakerFilter } from '../../store/sneaker/interfaces'
import { useGetAllProductsQuery } from '../../store/sneaker/sneakerApi'
import { cn } from '../../utils/cn'
import { isCustomError, validateError } from '../../utils/validateError'
import { Sneaker } from '../Sneaker/Sneaker'
import { SwiperButtons } from '../ui/Button'

interface Props {
  className?: string
  filter?: Partial<SneakerFilter>
  withSlider?: boolean
  sneakerVariant?: 'vertical' | 'horizontal'
}

export const SneakersList = (
  { className, filter, withSlider, sneakerVariant }: Props = {
    filter: { limit: 5 },
  }
) => {
  const { data, error, isLoading } = useGetAllProductsQuery({
    ...filter,
    fields: '-description -size -rating -material',
  })

  console.log(withSlider)

  console.log(filter?.limit)

  if (error) {
    if (isCustomError(error)) validateError(error)
  }

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
      {data?.data.map(sneaker => (
        <SwiperSlide key={sneaker._id}>
          <Sneaker variant={sneakerVariant} sneaker={sneaker} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <ul
      className={cn(
        'grid grid-cols-sneaker-list gap-10 justify-items-center',
        className,
        { 'grid-cols-sneaker-list-horizontal': sneakerVariant === 'horizontal' }
      )}
    >
      {data?.data.map(sneaker => (
        <Sneaker variant={sneakerVariant} key={sneaker._id} sneaker={sneaker} />
      ))}
    </ul>
  )
}
