import { useNavigate } from 'react-router-dom'
// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
// components
import PublicHeader from './PublicHeader'
import DashFooter from './DashFooter'

const Public = () => {
  const navigate = useNavigate()
  return (
    <Container
      fluid
      className='bg-primary min-vh-100 d-flex flex-column justify-content-center'
    >
      <PublicHeader />
      <Row className='mt-5'>
        <Col className='d-flex justify-content-center mt-5'>
          <Stack
            direction='horizontal'
            gap={3}
          >
            <Button
              variant='outline-secondary'
              size='lg'
              className='rounded-pill border border-2 border-secondary'
              onClick={() => navigate('/login')}
            >
              <i className='fa-solid fa-right-to-bracket me-1' />
              Iniciar sesión
            </Button>
            <Button
              variant='secondary'
              size='lg'
              className='rounded-pill'
              onClick={() => navigate('/login')}
            >
              <i className='fa-solid fa-user-plus me-1' />
              Registrarse
            </Button>
          </Stack>
        </Col>
      </Row>
      <DashFooter />
    </Container>
  )
}

export default Public
