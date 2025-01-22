import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/login" 
            element={<Login />}
          />
          <Route 
            path="/register"
            element={<Register />}
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route 
            path="*" 
            element={<NotFound />}
          />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App