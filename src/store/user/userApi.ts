import { appApi } from '../appApi'
import { User} from "./interfaces.ts";
import {BaseFilter} from "../../types/types.ts";
import {addUser} from "./userSlice.ts";

export const userApi = appApi.injectEndpoints({
  endpoints: builder => ({
    findAllUsers: builder.query<User[], Partial<BaseFilter>>({
      query: () => ({
        url: '/users',
      }),
    }),
    findUser: builder.query<User, User['id']>({
      query: (id) => ({
        url: `/users/${id}`
      })
    }),
    updateUser: builder.mutation<User, FormData>({
      query: (formData) => ({
        url: `/users`,
        method: 'PUT',
        body: formData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(addUser(data))
      },
    })
  }),
})

export const { useFindAllUsersQuery, useLazyFindAllUsersQuery , useUpdateUserMutation} = userApi
