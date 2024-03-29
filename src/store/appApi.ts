import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError,} from '@reduxjs/toolkit/query/react'
import {Mutex} from 'async-mutex'
import {addUser, deleteUser} from './user/userSlice'
import {LOCAL_STORAGE_ACCESS_KEY} from '../config/constants.tsx'
import {User} from './user/interfaces'

const mutex = new Mutex()

export const baseQuery = fetchBaseQuery({
  baseUrl: '/api/v1',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const customBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)


  if (result.error?.status === 401) {
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_KEY)
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
            {url: '/auth/refresh-tokens'},
            api,
            extraOptions
        )

        if (refreshResult.error?.status === 403) {
          api.dispatch(deleteUser())
          window.location.href = '/auth/sign-in'
        }

        if (
            refreshResult.data &&
            typeof refreshResult.data === 'object' &&
            'accessToken' in refreshResult.data &&
            'user' in refreshResult.data
        ) {
          localStorage.setItem(
              LOCAL_STORAGE_ACCESS_KEY,
              refreshResult.data.accessToken as string
          )
          api.dispatch(addUser(refreshResult.data.user as User))
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(deleteUser())
          window.location.href = '/auth/sign-in'
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const appApi = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  endpoints: builder => ({}),
  tagTypes: ['cart', 'review']

})
