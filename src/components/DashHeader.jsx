import { Link, useNavigate } from 'react-router-dom'
// react-bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const DashHeader = () => {
  const navigate = useNavigate()
  const navDropdownTitle = (
    <>
      <i className='fa-solid fa-circle-info me-1' />
      Información
    </>
  )
  const content = (
    <Navbar
      bg='primary'
      variant='light'
      collapseOnSelect
      expand='lg'
    >
      <Container fluid>
        <Navbar.Brand
          onClick={() => navigate('/dash')}
          className='text-secondary fs-4'
        >
          <img
            alt='ada health logo'
            src='/logo192.png'
            width='40'
          />{' '}
          ADA Health
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link onClick={() => navigate('/dash')}>
              <i className='fa-solid fa-home me-1' />
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/dash/tests')}>
              <i className='fa-solid fa-microscope me-1' />
              Resultados
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/dash/statistics')}>
              <i className='fa-solid fa-chart-pie me-1' />
              Estadísticas
            </Nav.Link>
            <NavDropdown
              title={navDropdownTitle}
              id='nav-dropdown'
            >
              <NavDropdown.Item href='#manual'>
                Manual del paciente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href='https://www.huila.gov.co/salud/'
                target='_blank'
              >
                Secretaría de Salud del Huila
              </NavDropdown.Item>
              <NavDropdown.Item
                href='https://www.huila.gov.co/'
                target='_blank'
              >
                Gobernación del Huila
              </NavDropdown.Item>
              <NavDropdown.Item
                href='https://www.minsalud.gov.co'
                target='_blank'
              >
                Ministerio de Salud
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant='secondary'
            className='rounded-pill'
            onClick={() => navigate('/login')}
          >
            <i className='fa-solid fa-right-from-bracket me-1' />
            Cerrar sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  return content
}

export default DashHeader
