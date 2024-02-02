import cartIcon from '../../assets/icons/cart.svg'
import hearthIcon from '../../assets/icons/hearth.svg'
import fullHearthIcon from '../../assets/icons/full-hearth.svg'
import plusIcon from '../../assets/icons/plus.svg'
import sprites from '../../assets/icons/sprite.svg'
import deleteCartProduct from '../../assets/icons/delete-cart-product.svg'

import {cn} from '../../helpers/cn'
import {Button} from '../ui/Button'
import {Input} from "@/components/ui/Input.tsx";
import {useAppDispatch, useAppSelector} from '../../store/store'
import {Sneaker as SneakerType} from '../../store/sneaker/interfaces'
import {CartSneaker as CartSneakerType} from "@/store/cart/interfaces.ts";
import {getDayDifference} from '../../helpers/date'
import {addFavoriteSneaker} from "../../store/sneaker/sneakerSlice.ts";
import {getFavoriteProduct} from "../../store/sneaker/selectors.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {
  useAddCartProductMutation,
  useDeleteCartProductMutation,
  useUpdateCartProductMutation
} from "@/store/cart/cartApi.ts";
import {validateError} from "@/helpers/validateError.ts";
import toast from "react-hot-toast";
import {useDebounce} from "@/hooks/useDebounce.ts";

interface Props {
  className?: string
  sneaker: Omit<SneakerType, 'rating' | 'size' | 'material' | 'description'>
}

export const Sneaker = ({className, sneaker}: Props) => {
  const dispatch = useAppDispatch()
  const favoriteProduct = useAppSelector(getFavoriteProduct(sneaker._id))

  return (
      <li
          className={cn(
              'grid grid-rows-[minmax(160px,400px),repeat(4,min-content)] max-w-[350px] min-w-[158px] gap-x-2 w-full ',
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
            <img alt='hearth' src={favoriteProduct ? fullHearthIcon : hearthIcon}/>
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
                    style={{backgroundColor: color}}
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
          <Button to={`/products/${sneaker._id}`} variant="clear" className="w-[22px] h-6">
            <img alt='cart' src={cartIcon}/>
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

        <div
            className="absolute w-[800px] right-80 h-[400px] -z-10 lg-tablet:top-[50%] lg-tablet:translate-y-[-20%] lg-tablet:right-[60%] lg-phone:right-[70%] md-phone:right-[80%]  ">
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

        <span
            className="text-lg block max-w-80 pl-8 self-end relative z-20 lg-tablet:text-[15px] lg-tablet:self-center  ">
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


interface SingleProps extends SneakerType {
  className?: string
}
export const SingleSneaker = ({className,_id,title,discount,price,image, priceDiscount,for: forWho,colors,createdAt,rating,size,material,description}: SingleProps) => {
  const [properties, setProperties] = useState({
    color: '',
    size: '',
    quantity: 1
  })
  const [addCartProduct, {isLoading}] = useAddCartProductMutation()
  const dispatch = useAppDispatch()
  const favoriteProduct = useAppSelector(getFavoriteProduct(_id))

  const onPropertiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProperties(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const onAddCartProduct = async () => {
    if (!properties.color || !properties.size) return

    try {
      await addCartProduct({...properties, productId: _id}).unwrap()
      setProperties({color:'', size:'', quantity: 1})
      toast.success('Продукт успешно добавлен в корзину')
    } catch(e) {
      validateError(e)
    }
  }


  return  <div className={cn("container grid grid-cols-2 justify-between gap-x-[50px]", className)}>
    <div className='max-h-[450px] min-h-[339px] h-full relative p-6' >
      <img src={image} alt={title} className="absolute inset-0 h-full object-cover -z-10"/>
      <div className="flex items-center justify-between gap-x-5 w-full">
        <div className="flex items-center gap-x-3 text-white">
          {discount && (
              <span className="bg-orange-500 p-2">{discount}%</span>
          )}
          {getDayDifference(createdAt) <= 7 && (
              <span className="bg-black uppercase p-2">Новинка</span>
          )}
        </div>

        <Button
            variant="clear"
            className="block w-[22px] h-6 "
            onClick={() => dispatch(addFavoriteSneaker({
              _id,
              title,
              discount,
              price,
              image,
              priceDiscount,
              for: forWho,
              colors,
              createdAt
            }))}
        >
          <img alt='hearth' src={favoriteProduct ? fullHearthIcon : hearthIcon}/>
        </Button>

      </div>
    </div>
    <div>
      <h1 className='text-5xl font-medium max-w-[640px] mb-4'>{title}</h1>
      <p className='text-[#4b4b4b] mb-16'>{description}</p>
      <div className='flex items-center gap-x-2 mb-10'>
        <span>Цвета:</span>
        <ul className='flex items-center translate-y-[2px] gap-x-1'>{colors.map(c => <li className={cn('flex items-center justify-center rounded-full', {
          'border-solid border-[1px] border-[#a1a1a1] w-6 h-6': properties.color === c
        })}  key={c}>
          <label style={{backgroundColor: c}} className={cn('cursor-pointer min-w-4 max-w-full h-4 block rounded-full ', {'': properties.color === c})}>
            <Input value={c} name='color' onChange={onPropertiesChange} type='radio' className='appearance-none hidden'/>
          </label>
        </li>)}</ul>
      </div>
      <div className='mb-10'>
        <div className="flex items-center justify-between mb-4">
          <span>Размер (EU):</span>
          <Button variant='clear' className='underline'>Размерная таблица</Button>
        </div>

        <ul className='flex gap-[10px] flex-wrap'>
          {size.map(s => <li key={s}>
            <label className={cn('w-[82px] h-[45px] transition-colors duration-300 ease border-[1px] border-[#efefef] cursor-pointer flex items-center justify-center', {'bg-black text-white': properties.size == s})}>
              <Input value={s} className='appearance-none hidden' name='size' type='radio' onChange={onPropertiesChange}/>
              {s}
            </label>
          </li>)}
        </ul>

      </div>
      <div className='flex items-center gap-x-3 mb-10'>
        {!!priceDiscount &&
            <span className='line-through text-[#999] text-xl'>{price} ₽</span>
        }
        <span className='text-3xl'>{priceDiscount ? priceDiscount.toFixed(2) : price} ₽</span>
      </div>
      <div className="max-w-[468px] flex gap-x-[30px] items-center h-[73px] mb-10 ">
        <div className='flex border-[1px] border-[#e9edf2] h-full'>
          <Button onClick={() => {
            if (properties.quantity <= 1) return
            setProperties(prev => ({...prev, quantity: prev.quantity - 1}))
          }}  className='px-4  w-8 flex items-center justify-center border-r-[1px] border-r-[#EAEAEA] border-solid' variant='clear'>-</Button>
          <span className='border-r-[1px] border-r-[#EAEAEA] flex items-center justify-center w-10'>{properties.quantity}</span>
          <Button onClick={() =>  setProperties(prev => ({...prev, quantity: prev.quantity + 1})) } className='px-4 w-8 flex items-center justify-center ' variant='clear'>+</Button>
        </div>
        <Button disabled={isLoading || !(properties.color && properties.size)} className='disabled:opacity-50' onClick={onAddCartProduct} icon={<svg className='w-4 h-4'>
          <use xlinkHref={`${sprites}#cart`} className='stroke-white'></use>
        </svg>}>Добавить в корзину
        </Button>

      </div>
    </div>
  </div>

}

interface CartProps extends CartSneakerType  {
  className?: string
  isLoading?: boolean
}

export const CartSneaker = ({className, _id, size,color,quantity,title,price,image, isLoading}: CartProps) => {
  const [qty, setQty] = useState(quantity)
  const debouncedValue = useDebounce(qty)
  const [updateQuantity, {isLoading: isUpdateLoading}]= useUpdateCartProductMutation()
  const [deleteCartProducts, {isLoading: isDeleteLoading}] = useDeleteCartProductMutation()

  useEffect(() => {
    if (debouncedValue === quantity) return
    updateQuantity({quantity: debouncedValue, cartProductId: _id})
  }, [debouncedValue])
  

  return <li className={cn('grid grid-cols-5 gap-x-3 items-center tablet:flex tablet:flex-wrap tablet:gap-5 ', className)}>
    <div className='flex items-center gap-x-4 col-span-2 tablet:w-full  '>
      <div className='w-[90px] h-[90px] tablet:w-52 md-phone:w-20 md-phone:h-20 bg-[#F6F6F6] tablet:h-32'>
        <img className='h-full object-cover' src={image} alt={title}/>
      </div>

      <div>
        <span className="block mb-1">{title}</span>
        <div className='flex items-center gap-x-4 text-[#2e2e2e] text-sm'>
          <div className='flex items-center gap-x-1'>
            <span >Цвет:</span>
            <span className='w-6 h-6 flex items-center justify-center rounded-full border-[1px] border-[#EAEAEA]'>
              <span style={{backgroundColor: color}} className='w-4 h-4 rounded-full'></span>
            </span>
          </div>
          <span className='whitespace-nowrap'>Размер: {size}</span>
        </div>
      </div>

    </div>
    <span className='text-[17px] font-semibold tablet:order-1'>{price.toFixed(2)} ₽</span>
    <div className='w-28 border-[1px] border-[#EAEAEA] h-[50px] flex items-center justify-between   '>
      <Button disabled={isLoading || isUpdateLoading || isDeleteLoading} onClick={() => {
        if (qty <= 1) return
        setQty(prev => prev - 1)
      }}  className='h-full w-[30px] border-r-[1px] border-r-[#EAEAEA] border-solid disabled:cursor-not-allowed disabled:opacity-70' variant='clear'>-</Button>
      <span className='w-[50px] h-full border-r-[1px] border-r-[#EAEAEA] flex items-center justify-center'>{qty}</span>
      <Button disabled={isLoading || isUpdateLoading || isDeleteLoading}  onClick={() => setQty(prev => prev + 1)} className='h-full w-[30px] disabled:cursor-not-allowed disabled:opacity-70' variant='clear'>+</Button>
    </div>
    <div className="flex items-center justify-between tablet:order-2">
      <span className='text-[17px] font-semibold tablet:hidden'>{(price * qty).toFixed(2)} ₽</span>
      <Button disabled={isLoading || isUpdateLoading || isDeleteLoading} onClick={() => deleteCartProducts(_id)} className='w-4 h-4 disabled:cursor-not-allowed disabled:opacity-70' variant='clear'>
        <img  src={deleteCartProduct} alt='delete'/>
      </Button>
    </div>
  </li>

}
