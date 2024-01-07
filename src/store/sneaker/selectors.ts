import { useAppSelector } from '../store'
import { Sneaker } from './interfaces'

export const getFavoriteProduct = (id: Sneaker['_id']) =>
  useAppSelector(state => {
    return state.sneaker.favoriteSneakers.find(sneaker => sneaker._id === id)
  })
