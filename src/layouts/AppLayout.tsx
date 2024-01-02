import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  )
}
