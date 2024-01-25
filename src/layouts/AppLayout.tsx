import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { HeaderMobile } from '../components/Header/HeaderMobile'
import { Footer } from '../components/Footer/Footer'

export const AppLayout = () => {
  return (
    <div className="grid grid-rows-[1fr,auto] min-h-screen">
      <Header className="md-tablet:hidden" />
      <HeaderMobile className="hidden md-tablet:block" />
        <div>
             <Outlet />
        </div>
      <Footer />
    </div>
  )
}
