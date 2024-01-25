import {CombinedState} from "@reduxjs/toolkit/query";
import { Sneaker } from './interfaces'
import {User} from "../user/interfaces.ts";


export const getFavoriteProduct = (id: Sneaker['_id']) => (state: {api: CombinedState<{}, never, "api">, user: {user: User | null}, sneaker: {favoriteSneakers: Omit<Sneaker, "rating" | "size" | "material" | "description">[]}}) => {
    return state.sneaker.favoriteSneakers.find(sneaker => sneaker._id === id)
  }
