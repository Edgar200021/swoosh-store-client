import { LOCAL_STORAGE_ACCESS_KEY } from '../../config/constants'
import { appApi } from '../appApi'
import { addUser } from '../user/userSlice'
import {
  SignUpRequest,
  AuthResponse,
  SignInRequest,
  ResetPasswordRequest,
} from './interfaces'

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
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
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
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(addUser(data.user))
        localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY, data.accessToken)
      },
    }),
    logout: builder.query({
      query: () => ({
        url: '/auth/logout',
      }),
    }),

    refresh: builder.query<AuthResponse, null>({
      query: () => ({
        url: '/auth/refresh-tokens',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
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
  }),
})

export const {
  useSignUpMutation,
  useSignInMutation,
  useLogoutQuery,
  useRefreshQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi
