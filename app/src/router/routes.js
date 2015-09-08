import React from 'react'
import {Route} from 'react-router'
import App from 'components/App'
import Counter from 'components/Counter'
import IndexPage from 'components/IndexPage'

export default (
    <Route component={App}>
        <Route path="/" component={IndexPage}/>
        <Route path="/counter" component={Counter}/>
    </Route>
)