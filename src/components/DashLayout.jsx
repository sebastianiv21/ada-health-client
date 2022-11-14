import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
// react-bootstrap
import Container from 'react-bootstrap/Container'

const DashLayout = () => {
  return (
    <Container
      fluid
      className='min-vh-100 p-0 d-flex flex-column'
    >
      <DashHeader />
      <Container>
        <Outlet />
      </Container>
      <DashFooter />
    </Container>
  )
}

export default DashLayout
