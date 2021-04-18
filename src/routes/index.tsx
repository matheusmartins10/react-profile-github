import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect  to="/" />
        </Switch>
    )
}

export default Routes