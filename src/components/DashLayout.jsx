import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <main>
        <Outlet />
      </main>
      <DashFooter />
    </>
  )
}

export default DashLayout
