import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Sneaker } from './interfaces'
import { LOCAL_STORAGE_FAVORITES_KEY } from '../../config/constants'

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
        return
      }

      state.favoriteSneakers.push(action.payload)
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
})

export const { addFavoriteSneaker, addFavoriteSneakers } = sneakerSlice.actions
export default sneakerSlice.reducer
