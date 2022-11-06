import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId))

  const navigate = useNavigate()

  if (user) {
    const handleEdit = () => navigate(`/dash/users/${userId}`)

    const userRolesString = user.roles.toString().replaceAll(',', ', ')

    const cellStatus = user.active ? '' : 'disabled'

    return (
      <tr>
        <td>{user.idNumber}</td>
        <td>{user.name}</td>
        <td>
          {user.lastname} {user.secLastname}
        </td>
        <td>{user.eps}</td>
        <td>{userRolesString}</td>
        <td>
          <button
            className='btn btn-secondary btn-sm text-white'
            onClick={handleEdit}
          >
            <i className='fa-solid fa-pen-to-square' />
          </button>
        </td>
      </tr>
    )
  } else return null
}

export default User
