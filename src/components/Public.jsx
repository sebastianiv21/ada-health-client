import { Link } from 'react-router-dom'
// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
// components
import DashFooter from './DashFooter'

const Public = () => {
  return (
    <Container
      fluid
      className='bg-primary min-vh-100 d-flex flex-column justify-content-center'
    >
      <Row className='mt-auto'>
        <Col className='d-flex mt-n5 align-items-center justify-content-center'>
          <img
            src='/logo192.png'
            alt='ADA Health logo'
            width='100'
          />
          <div className='text-center text-secondary lh-1'>
            <p className='m-0 fs-1'>ADA Health</p>
            <p className='m-0 fs-4'>Sistema Hospitalario</p>
          </div>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col className='text-dark text-center'>
          <h5 className='w-50 mx-auto'>
            El sistema de información para administrar las pruebas de adenosina
            desaminasa en los hospitales del departamento del Huila
          </h5>
        </Col>
      </Row>
      <Row className='mt-5 mb-auto'>
        <Col className='d-flex justify-content-center mt-5'>
          <Stack
            direction='horizontal'
            gap={3}
          >
            <Link
              to='/login'
              className='btn btn-outline-secondary btn-lg rounded-pill border border-2 border-secondary'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/login'
              className='btn btn-secondary btn-lg rounded-pill'
            >
              Registrarse
            </Link>
          </Stack>
        </Col>
      </Row>
      <DashFooter />
    </Container>
  )
}

export default Public
