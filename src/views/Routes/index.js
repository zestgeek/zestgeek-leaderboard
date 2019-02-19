import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Login from '../Login'

const history = createBrowserHistory()

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    )
}

export default Routes