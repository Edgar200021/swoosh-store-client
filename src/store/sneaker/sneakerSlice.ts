import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Sneaker} from './interfaces'
import {LOCAL_STORAGE_FAVORITES_KEY} from '../../config/constants.tsx'

const initialState: {
  favoriteSneakers: Omit<
    Sneaker,
    'rating' | 'size' | 'material' | 'description'
  >[]
} = {
  favoriteSneakers: [],
}

export const sneakerSlice = createSlice({
  name: 'sneaker',
  initialState,
  reducers: {
    addFavoriteSneaker(
      state,
      action: PayloadAction<
        Omit<Sneaker, 'rating' | 'size' | 'material' | 'description'>
      >
    ) {
      const isExist = state.favoriteSneakers.some(
        sneaker => sneaker._id === action.payload._id
      )

      if (isExist) {
        state.favoriteSneakers = state.favoriteSneakers.filter(
          sneaker => sneaker._id !== action.payload._id
        )
      } else {
        state.favoriteSneakers.push(action.payload)
      }

      localStorage.setItem(
        LOCAL_STORAGE_FAVORITES_KEY,
        JSON.stringify(state.favoriteSneakers)
      )
    },

    addFavoriteSneakers(
      state,
      action: PayloadAction<
        Omit<Sneaker, 'rating' | 'size' | 'material' | 'description'>[]
      >
    ) {
      state.favoriteSneakers = action.payload
    },
  },
  selectors: {
    getFavoriteProducts: (state) => state.favoriteSneakers,
  }

})

export const { addFavoriteSneaker, addFavoriteSneakers } = sneakerSlice.actions
export const {getFavoriteProducts} = sneakerSlice.selectors
export default sneakerSlice.reducer
