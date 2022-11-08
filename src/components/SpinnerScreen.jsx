import Spinner from 'react-bootstrap/Spinner'

const SpinnerScreen = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner
        animation='border'
        variant='secondary'
        role='status'
      >
        <span className='visually-hidden'>Cargando...</span>
      </Spinner>
    </div>
  )
}

export default SpinnerScreen
