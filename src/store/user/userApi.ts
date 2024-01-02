import { appApi } from '../appApi'

export const userApi = appApi.injectEndpoints({
  endpoints: builder => ({
    findAllUsers: builder.query({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
})

export const { useFindAllUsersQuery, useLazyFindAllUsersQuery } = userApi
