import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTestById } from './testsApiSlice'

const Test = ({ testId }) => {
  const test = useSelector((state) => selectTestById(state, testId))

  const navigate = useNavigate()

  if (test) {
    const created = new Date(test.createdAt).toLocaleString('es-CO', {
      day: 'numeric',
      month: 'long',
    })

    const handleEdit = () => navigate(`/dash/tests/${testId}`)

    return (
      <tr>
        <td>{test.user}</td>
        <td>{created}</td>
        <td>{test.reference}</td>
        <td>{test.result}</td>
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

export default Test
