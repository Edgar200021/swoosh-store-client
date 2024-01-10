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
  createdAt: Date
}

export interface SneakerFilter extends BaseFilter {
  title: string
  'price>=': number
  'price<=': number
  'price<': number
  'price>': number
  price: number
  color: string
  size: string
  material: Materials
  'rating>=': number
  'rating<=': number
  'rating<': number
  'rating>': number
  rating: number
}
