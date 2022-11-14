import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './custom.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* This route allows nested routes */}
          <Route
            path='/*'
            element={<App />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
