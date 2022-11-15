import Spinner from 'react-bootstrap/Spinner'

const SpinnerScreen = () => {
  return (
    <main className='d-flex justify-content-center align-items-center mt-5'>
      <Spinner
        animation='border'
        variant='secondary'
        role='status'
        style={{ width: '50px', height: '50px' }}
      >
        <span className='visually-hidden'>Cargando...</span>
      </Spinner>
      <span className='ms-3 fs-2 text-secondary'>Cargando...</span>
    </main>
  )
}

export default SpinnerScreen
