import initStore from 'redux/store'
import React from 'react'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import Location from 'react-router/lib/Location';
import queryString from 'query-string';
import router from 'router'

const initialState = window.__initialState || {}
const history = new BrowserHistory
const store = initStore(initialState)
const location = new Location(document.location.pathname, queryString.parse(document.location.search));

router(store, location, history).then((component) => {
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
})

