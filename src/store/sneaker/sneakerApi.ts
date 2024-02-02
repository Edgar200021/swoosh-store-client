import {BaseApiResponse} from '../../types/types'
import {appApi} from '../appApi'
import {Sneaker, SneakerFilter, SneakerFilterResponse} from './interfaces'

const sneakerApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<
        BaseApiResponse<
            Omit<Sneaker, 'rating' | 'size' | 'material' | 'description'>[]
        >,
        Partial<SneakerFilter>
    >({
      query: filters => ({
        url: '/products',
        params: {...filters},

      }),

    }),

    getProduct: builder.query<
            Sneaker ,
        Sneaker['_id']
    >({
      query: id => ({
        url: `/products/${id}`,
      }),

    }),

    getFilters: builder.query<
        SneakerFilterResponse,
        null
    >({
      query: () => ({
        url: '/products/filters',
      }),
    }),
  }),
})

export const {useGetAllProductsQuery, useGetFiltersQuery, useGetProductQuery, usePrefetch} = sneakerApi
