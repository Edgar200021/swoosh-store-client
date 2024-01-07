import { appApi } from '../appApi'
import { Sneaker, SneakerFilter } from './interfaces'

const sneakerApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<
      Omit<Sneaker, 'rating' | 'size' | 'material' | 'description'>[],
      Partial<SneakerFilter>
    >({
      query: filters => ({
        url: '/products',
        params: { ...filters },
      }),
    }),
  }),
})

export const { useGetAllProductsQuery } = sneakerApi
