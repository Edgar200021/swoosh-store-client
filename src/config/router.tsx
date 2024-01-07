import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import { SignUpPage } from '../pages/SignUp/SignUpPage'
import { SignInPage } from '../pages/SignIn/SignInPage'
import { ForgotPasswordPage } from '../pages/ForgotPassword/ForgotPasswordPage'
import { ResetPasswordPage } from '../pages/ResetPassword/ResetPasswordPage'
import { Main } from '../pages/Main/Main'

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'auth/sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'auth/sign-in',
        element: <SignInPage />,
      },
      {
        path: 'auth/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'auth/reset-password',
        element: <ResetPasswordPage />,
      },
    ],
  },
])
