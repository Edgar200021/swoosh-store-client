import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { HeaderMobile } from '../components/Header/HeaderMobile'

export const AppLayout = () => {
  return (
    <>
      <Header className='md-tablet:hidden' />
      <HeaderMobile className='hidden md-tablet:block' />
      <Outlet />
      <footer>footer</footer>
    </>
  )
}
