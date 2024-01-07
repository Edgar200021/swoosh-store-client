import img from '../../assets/img/demo.png'
import cartIcon from '../../assets/icons/cart.svg'
import cartAddIcon from '../../assets/cart-add.svg'
import hearthIcon from '../../assets/icons/hearth.svg'
import fullHearthIcon from '../../assets/icons/full-hearth.svg'

import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { useAppDispatch } from '../../store/store'
import { Sneaker as SneakerType } from '../../store/sneaker/interfaces'
import { addFavoriteSneaker } from '../../store/sneaker/sneakerSlice'
import { getFavoriteProduct } from '../../store/sneaker/selectors'

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
        'grid grid-rows-[minmax(160px,400px),repeat(4,min-content),] max-w-[350px] min-w-[158px] gap-x-2 w-full',
        className
      )}
    >
      <div className="relative mb-6 overflow-hidden bg-[#F6F6F6]">
        <img
          className="absolute h-full object-cover "
          src={sneaker.image}
          alt={sneaker.title}
        />
        <Button
          variant="clear"
          className="w-[22px] h-6 absolute top-5 right-5"
          onClick={() => dispatch(addFavoriteSneaker(sneaker))}
        >
          <img src={favoriteProduct ? fullHearthIcon : hearthIcon} />
        </Button>
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
