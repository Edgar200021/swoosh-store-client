import {LOCAL_STORAGE_ACCESS_KEY} from '../../config/constants'
import {appApi} from '../appApi'
import {addUser, deleteUser} from '../user/userSlice'
import {AuthResponse, ChangePasswordRequest, ResetPasswordRequest, SignInRequest, SignUpRequest,} from './interfaces'

export const authApi = appApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<AuthResponse, SignUpRequest>({
      query: body => ({
        url: '/auth/sign-up',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled
        dispatch(addUser(data.user))
        localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY, data.accessToken)
      },
    }),
    signIn: builder.mutation<AuthResponse, SignInRequest>({
      query: body => ({
        url: '/auth/sign-in',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled
        dispatch(addUser(data.user))
        localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY, data.accessToken)
      },
    }),
    logout: builder.query({
      query: () => ({
        url: '/auth/logout',
      }),
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        await queryFulfilled
        dispatch(deleteUser())
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_KEY)
      },
    }),

    refresh: builder.query<AuthResponse, null>({
      query: () => ({
        url: '/auth/refresh-tokens',
      }),

      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled

        dispatch(addUser(data.user))
        localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY, data.accessToken)
      },
    }),

    forgotPassword: builder.mutation<unknown, { email: string }>({
      query: body => ({
        url: '/auth/forgot-password',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
    }),

    resetPassword: builder.mutation<unknown, ResetPasswordRequest>({
      query: body => ({
        url: `/auth/reset-password?email=${body.email}&passwordResetToken=${body.passwordResetToken}`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: {
          password: body.password,
          passwordConfirm: body.passwordConfirm,
        },
      }),
    }),

    changePassword: builder.mutation<unknown, ChangePasswordRequest>({
      query: body => ({
        url: `/auth/change-password`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useSignUpMutation,
  useSignInMutation,
  useLazyLogoutQuery,
  useRefreshQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation
} = authApi
