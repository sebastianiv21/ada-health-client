import { useGetTestsQuery } from './testsApiSlice'
import SpinnerScreen from '../../components/SpinnerScreen'
import Error from '../../components/Error'
import Test from './Test'

const TestsList = () => {
  // destructuring data from RTK tests generated hook
  const {
    // renamed data as tests
    data: tests,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTestsQuery()

  let content

  if (isLoading) content = <SpinnerScreen />

  if (isError) {
    content = <Error error={error} />
  }

  if (isSuccess) {
    const { ids } = tests

    const tableContent = ids?.length
      ? ids.map((testId) => (
          <Test
            key={testId}
            testId={testId}
          />
        ))
      : null

    content = (
      <div className='table-responsive'>
        <table className='table table-primary table-striped table-hover'>
          <thead className='table-dark'>
            {/* columnas de la tabla */}
            <tr>
              <th scope='col'>Id paciente</th>
              <th scope='col'>Fecha de creación</th>
              <th scope='col'>Referencia</th>
              <th scope='col'>Resultado</th>
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

export default TestsList
