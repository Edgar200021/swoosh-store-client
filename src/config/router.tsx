import {createBrowserRouter} from 'react-router-dom'
import {AppLayout} from '../layouts/AppLayout'
import {SignUpPage} from '../pages/SignUp/SignUpPage'
import {SignInPage} from '../pages/SignIn/SignInPage'
import {ForgotPasswordPage} from '../pages/ForgotPassword/ForgotPasswordPage'
import {ResetPasswordPage} from '../pages/ResetPassword/ResetPasswordPage'
import {Main} from '../pages/Main/Main'
import {ProtectedRoute} from "../pages/ProtectedRoutes/ProtectedRoute.tsx";
import {UserRoles} from "../store/user/enums.ts";
import {PersonalAccountLayout} from "../layouts/PersonalAccountLayout.tsx";
import {EditUserProfilePage} from "../pages/EditUserProfile/EditUserProfilePage.tsx";

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
        element: <ProtectedRoute role={[UserRoles.USER]}> <ForgotPasswordPage /></ProtectedRoute>
      },
      {
        path: 'auth/reset-password',
        element: <ProtectedRoute role={[UserRoles.USER]}> <ResetPasswordPage/></ProtectedRoute>,
      },
      {
        element: <ProtectedRoute role={[UserRoles.USER]}>
          <PersonalAccountLayout/>
        </ProtectedRoute>,
        children: [
          {
            path: 'personal-account',
            element:<EditUserProfilePage />
          },

          {
            path: 'orders',
            element: <h1>Orders</h1>
          }
        ]
      }
    ],
  },
])
