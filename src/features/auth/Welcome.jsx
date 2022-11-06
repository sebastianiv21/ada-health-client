import { Link } from 'react-router-dom'

const Welcome = () => {
  const date = new Date()
  // Format date
  const today = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)

  const content = (
    <section>
      <p>{today[0].toUpperCase() + today.substring(1)}</p>
      <h1>Bienvenido!</h1>
      <p>
        <Link to='/dash/tests'>Ver resultados de laboratorio</Link>
      </p>
      <p>
        <Link to='/dash/statistics'>Ver estadísticas</Link>
      </p>
    </section>
  )
  return content
}

export default Welcome
