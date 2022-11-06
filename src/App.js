import { Routes, Route } from 'react-router-dom'

//Components
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import TestsList from './features/tests/TestsList'
import StatisticsList from './features/statistics/StatisticsList'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        {/* Public routes */}
        <Route
          index
          element={<Public />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        {/* Protected routes */}
        <Route
          path='dash'
          element={<DashLayout />}
        >
          <Route
            index
            element={<Welcome />}
          />
          {/* Tests routes */}
          <Route path='tests'>
            <Route
              index
              element={<TestsList />}
            />
          </Route>
          {/* Statistics routes */}
          <Route path='statistics'>
            <Route
              index
              element={<StatisticsList />}
            />
          </Route>
        </Route>
        {/* End dash */}
      </Route>
    </Routes>
  )
}

export default App
