import { Link } from 'react-router-dom'

const DashHeader = () => {
  const content = (
    <header className='navbar navbar-expand-lg bg-primary'>
      {/* <i className='fa-solid fa-bars fa-2x ms-4 me-2' /> */}
      <Link
        to='/dash'
        className='d-flex align-items-center text-secondary text-decoration-none navbar-brand'
      >
        <img
          src='/logo192.png'
          alt='ADA Health logo'
          width='50'
        />
        <div className='fw-bold ps-1 text-secondary text-center fs-5 lh-1'>
          <p className='m-0'>ADA</p>
          <p className='m-0'>Health</p>
        </div>
      </Link>
    </header>
  )
  return content
}

export default DashHeader
