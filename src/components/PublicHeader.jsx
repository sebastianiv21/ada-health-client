import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PublicHeader = () => {
  return (
    <>
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
    </>
  )
}

export default PublicHeader
