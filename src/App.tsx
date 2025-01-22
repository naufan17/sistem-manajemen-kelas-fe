import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route 
            path="/" 
            element={<h1>Home</h1>} 
          />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
