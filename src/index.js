import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import App from './components/App'
import RegisterUser from './components/RegisterUser'
import Users from './components/ListUsers'
import Logout from './components/Logout'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route exact path="/login" element={<App />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/logout" element={<Logout />} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


