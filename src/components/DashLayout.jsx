import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
// react-bootstrap
import Container from 'react-bootstrap/Container'

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <Container>
        <Outlet />
      </Container>
      <DashFooter />
    </>
  )
}

export default DashLayout
