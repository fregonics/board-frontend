import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './pages/home'
import Messages from './pages/messages'

const history = createBrowserHistory()

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/messages" exact component={Messages}/>
            </Switch>
        </Router>

        
    )
}