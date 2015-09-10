import React from 'react'
import {Route} from 'react-router'
import App from 'components/App'
import Counter from 'components/Counter'
import IndexPage from 'components/IndexPage'
import Article from 'components/Article'

export default (
    <Route component={App}>
        <Route path="/" component={IndexPage}/>
        <Route path="/articles" component={IndexPage}>
            <Route path=":id" component={Article}/>
        </Route>
        <Route path="/counter" component={Counter}/>
    </Route>
)