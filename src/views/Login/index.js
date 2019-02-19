import React from 'react'

import gitlabLogo from '../../assets/gitlab-icon-rgb.svg'

import './index.scss'

const Login = () =>
    <div className="container login-container">
        <div className="columns is-centered">
            <div className="column is-one-third has-text-centered">
                <h1 className="title">Login</h1>
                <button class="button">
                    <img className="gitlab-logo" src={gitlabLogo} />
                    Login using gitlab
                </button>
            </div>
        </div>
    </div>

export default Login
