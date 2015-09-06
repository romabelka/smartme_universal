import initStore from 'redux/store'
import React from 'react'
import routes from 'router'
import {Router} from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import {Provider} from 'react-redux'

const initialState = window.__initialState || {}
const history = new BrowserHistory
const store = initStore(initialState)
const component = (
    <Provider store = {store} >
        {() => <Router {...initialState} history = {history} children={routes}/>}
    </Provider>
)

if (__DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    console.info("You're working on debugg mode");
    React.render((
        <div>
            {component}
            <DebugPanel top right bottom key="debugPanel">
                <DevTools store={store} monitor={LogMonitor}/>
            </DebugPanel>
        </div>
    ), document.getElementById('content'))
} else React.render(component, document.getElementById('content'));