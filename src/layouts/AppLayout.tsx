import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { HeaderMobile } from '../components/Header/HeaderMobile'

export const AppLayout = () => {
  return (
    <div className='grid grid-rows-[min-content,1fr] min-h-screen'>
      <Header className='md-tablet:hidden' />
      <HeaderMobile className='hidden md-tablet:block' />
      <Outlet />
      <footer>footer</footer>
    </div>
  )
}
