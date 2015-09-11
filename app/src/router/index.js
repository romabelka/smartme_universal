import routes from './routes'
import Router from 'react-router'
import {Provider} from 'react-redux'
import React from 'react'


export default (store, location, history) => new Promise((resolve, reject) => {
    Router.run(routes, location, [transitionHook(store)], (error, initialState, transition)  => {
        const component = (
            <Provider store={store}>
                {() => <Router {...initialState} children={routes} history={history}/> }
            </Provider>
        )
        resolve(component)
    })
})

export function transitionHook(store) {
    return (nextState, transition, callback) => {
        const fetches = nextState.branch
            .map((route) => route.component)
            .filter(getFetchData)
            .map(getFetchData)
            .map((fetch) => {
                const action = fetch(store)
                if (!action) return null
                store.dispatch(action)
                return action.fetch.promise
            })
        Promise.all(fetches).then(
            () => callback(),
            callback
        )
    }
}

function getFetchData(component) {
    return component.WrappedComponent ? component.WrappedComponent.fetchData : component.fetchData
}