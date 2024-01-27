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
import {OrdersPage} from "../pages/OrdersPage/OrdersPage.tsx";
import {AddressPage} from "../pages/AddressPage.tsx";
import {ChangePasswordPage} from "../pages/ChangePassword/ChangePasswordPage.tsx";
import {FavoriteProductsPage} from "../pages/FavoriteProducts/FavoriteProductsPage.tsx";

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        index: true,
        element: <Main/>,
      },
      {
        path: 'auth/sign-up',
        element: <SignUpPage/>,
      },
      {
        path: 'auth/sign-in',
        element: <SignInPage/>,
      },
      {
        path: 'auth/forgot-password',
        element: <ProtectedRoute role={[UserRoles.USER]}> <ForgotPasswordPage/></ProtectedRoute>
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
            element: <EditUserProfilePage className='lg-tablet:shrink-0'/>
          },

          {
            path: 'orders',
            element: <OrdersPage className='flex-grow lg-tablet:shrink-0'/>
          },
          {
            path: 'addresses',
            element: <AddressPage className='flex-grow '/>
          },
          {
            path: 'change-password',
            element: <ChangePasswordPage className='lg-tablet:shrink-0 flex-grow '/>
          },
          {
            path: 'favorite-products',
            element: <FavoriteProductsPage className='flex-grow shrink-0'/>
          },
        ]
      }
    ],
  },
])
