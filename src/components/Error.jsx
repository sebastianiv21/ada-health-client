const Error = ({ error }) => {
  return (
    <div className='d-flex justify-content-center'>
      <p className='text-dark'>{error?.data?.message}</p>
    </div>
  )
}

export default Error
