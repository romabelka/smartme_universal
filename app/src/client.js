import initStore from 'redux/store'
import React from 'react'
import routes from 'router'
import {Router} from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import {Provider} from 'react-redux'

const initialState = window.__initialState || {}
const history = new BrowserHistory
React.render((
    <Provider store = {initStore()} >
        {() => <Router {...initialState} history = {history} children={routes}/> }
    </Provider>
), document.getElementById('content'));