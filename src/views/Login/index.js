import React from 'react'
import Github from '../../components/views/Login/Github'

import './index.scss'

const Login = () =>
  <div className="login-container">
    <div className="columns is-centered">
      <div className="column is-one-third has-text-centered">
        <h1 className="title">Login</h1>
        <Github />
      </div>
    </div>
  </div>

export default Login
