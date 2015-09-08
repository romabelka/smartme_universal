import routes from './routes'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import React from 'react'


export default (store, location, history) => new Promise((resolve, reject) => {
    Router.run(routes, location, (error, initialState, transition)  => {
        const component = (
            <Provider store={store}>
                {() => <Router {...initialState} children={routes} history={history}/> }
            </Provider>
        )
        resolve(component)
    })
})