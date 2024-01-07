import { BaseFilter } from '../../types/types'
import { For, Materials } from './enums'

export interface Sneaker {
  _id: string
  image: string
  title: string
  description: string
  for: For
  material: Materials
  size: string[]
  colors: string[]
  price: number
  rating: number
  priceDiscount?: number
  discount?: number
}

export interface SneakerFilter extends BaseFilter {
  'title[regex]': string
  'price[gte]': number
  'price[lte]': number
  color: string
  size: string
  material: Materials
}
