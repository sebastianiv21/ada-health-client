import { useGetUsersQuery } from './usersApiSlice'
import SpinnerScreen from '../../components/SpinnerScreen'
import Error from '../../components/Error'
import User from './User'

const UsersList = () => {
  // destructuring data from RTK users generated hook
  const {
    // renamed data as users
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery()

  let content

  if (isLoading) content = <SpinnerScreen />

  if (isError) {
    content = <Error error={error} />
  }

  if (isSuccess) {
    // ids is an array of users ids
    const { ids } = users

    const tableContent = ids?.length
      ? ids.map((userId) => (
          <User
            key={userId}
            userId={userId}
          />
        ))
      : null

    content = (
      <div className='table-responsive'>
        <table className='table table-primary table-striped table-hover'>
          <thead className='table-dark'>
            {/* columnas de la tabla */}
            <tr>
              <th scope='col'>Número de identificación</th>
              <th scope='col'>Nombres</th>
              <th scope='col'>Apellidos</th>
              <th scope='col'>EPS</th>
              <th scope='col'>Rol</th>
              <th scope='col'>Editar</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    )
  }
  return content
}

export default UsersList
