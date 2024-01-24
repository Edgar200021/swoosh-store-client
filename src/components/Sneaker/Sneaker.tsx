import cartIcon from '../../assets/icons/cart.svg'
import cartAddIcon from '../../assets/cart-add.svg'
import hearthIcon from '../../assets/icons/hearth.svg'
import fullHearthIcon from '../../assets/icons/full-hearth.svg'
import plusIcon from '../../assets/icons/plus.svg'

import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { useAppDispatch } from '../../store/store'
import { Sneaker as SneakerType } from '../../store/sneaker/interfaces'
import { addFavoriteSneaker } from '../../store/sneaker/sneakerSlice'
import { getFavoriteProduct } from '../../store/sneaker/selectors'
import { getDayDifference } from '../../utils/date'

interface Props {
  className?: string
  sneaker: Omit<SneakerType, 'rating' | 'size' | 'material' | 'description'>
}

export const Sneaker = ({ className, sneaker }: Props) => {
  const dispatch = useAppDispatch()
  const favoriteProduct = getFavoriteProduct(sneaker._id)

  return (
    <li
      className={cn(
        'grid grid-rows-[minmax(160px,400px),repeat(4,min-content),] max-w-[350px] min-w-[158px] gap-x-2 w-full ',
        className
      )}
    >
      <div className="relative mb-6 overflow-hidden bg-[#F6F6F6] cursor-pointer">
        <Button
          className="absolute block max-w-full z-10  top-0 left-0 w-full h-full"
          to={`/products/${sneaker._id}`}
          variant="clear"
        ></Button>
        <img
          className="absolute h-full object-cover "
          src={sneaker.image}
          alt={sneaker.title}
        />
        <Button
          variant="clear"
          className="w-[22px] h-6 absolute top-5 right-5 z-20"
          onClick={() => dispatch(addFavoriteSneaker(sneaker))}
        >
          <img src={favoriteProduct ? fullHearthIcon : hearthIcon} />
        </Button>
        <div className="absolute left-5 top-5 flex items-center gap-x-3 text-white">
          {sneaker.discount && (
            <span className="bg-orange-500 p-2">{sneaker.discount}%</span>
          )}
          {getDayDifference(sneaker.createdAt) <= 7 && (
            <span className="bg-black uppercase p-2">Новинка</span>
          )}
        </div>
      </div>
      <span className="text-[#747474] text-xs uppercase tracking-[.50px] font-medium">
        {sneaker.for}
      </span>
      <span>{sneaker.title}</span>
      <div className="flex gap-x-2 items-center">
        <span>Цвета:</span>
        <ul className="flex gap-x-2">
          {sneaker.colors.map(color => (
            <li
              key={color}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full"
            ></li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <span className="text-xl">{sneaker.price} ₽</span>
          {!!sneaker.priceDiscount && (
            <span className="text-[#999] line-through text-sm">
              {sneaker.priceDiscount} ₽
            </span>
          )}
        </div>
        <Button variant="clear" className="w-[22px] h-6">
          <img src={cartIcon} />
        </Button>
      </div>
    </li>
  )
}

interface HitProps {
  className?: string
  brand: string
  title: string
  price: number
  img: string
  brandIcon: string
}

export const HitSneaker = ({
  className,
  brand,
  price,
  img,
  brandIcon,
  title,
}: HitProps) => {
  return (
    <div
      className={cn(
        'py-20 px-[70px] desktop:px-10 phone:px-[35px]  lg-tablet:py-4  after:absolute after:w-full after:h-full after:inset-0 after:bg-[#1E1E1E] after:-z-20 flex justify-between text-white relative lg-tablet:flex lg-tablet:flex-col lg-tablet:gap-y-80 lg-tablet:items-center overflow-hidden ',
        className
      )}
    >
      <div className="max-w-[450px] relative  ">
        <h2 className="uppercase text-[60px] font-medium mb-7 md-tablet:text-[34px] mini-phone:text-[26px] lg-tablet:text-[34px] lg-tablet:mb-4">
          Хит сезона
          <span className="flex items-center gap-x-7 ">
            от {brand}
            <span className="h-[2px] block w-[120px] bg-white phone:w-[80px]"></span>
          </span>
        </h2>

        <span className="max-w-[320px] block mb-[22px] text-4xl lg-tablet:text-[22px] lg-tablet:mb-2">
          {title}
        </span>

        <span className="block mb-[22px]">
          от <b>{price}₽</b>
        </span>
        <Button className="max-w-64" color="orange" to="/products">
          Подробнее
        </Button>
      </div>

      <div className="absolute w-[800px] right-80 h-[400px] -z-10 lg-tablet:top-[50%] lg-tablet:translate-y-[-20%] lg-tablet:right-[60%] lg-phone:right-[70%] md-phone:right-[80%]  ">
        <img
          className="absolute object-contain h-full z-10 right-[-100px] desktop:right-[-300px] lg-tablet:w-[550px] md-phone:w-[400px] md-phone:right-[-250px]"
          src={img}
          alt={title}
        />
        <img
          className="absolute h-full object-contain right-[-100px] w-[600px] desktop:right-[-300px] lg-tablet:w-[400px] md-phone:w-[300px] md-phone:right-[-250px]  "
          src={brandIcon}
        />
      </div>

      <span className="text-lg block max-w-80 pl-8 self-end relative z-20 lg-tablet:text-[15px] lg-tablet:self-center  ">
        Уникальная технология структуры стельки позволяет забыть про обувь на
        ноге.
        <img
          className="absolute left-0 top-2 w-[18px] h-[18px]"
          src={plusIcon}
          alt="Plus"
        />
      </span>
    </div>
  )
}
