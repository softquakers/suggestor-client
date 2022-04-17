
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'assets/scss/paper-dashboard.scss?v=1.3.0'
import 'assets/demo/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import ReactDOM from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import AdminLayout from 'layouts/Admin.js'
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Switch>
        <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
        <Redirect to='/admin/dashboard' />
      </Switch>
    </BrowserRouter>
  </AlertProvider>
  ,
  document.getElementById('root')
)
