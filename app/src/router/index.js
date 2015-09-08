import routes from './routes'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import React from 'react'


export default (store, location, history) => new Promise((resolve, reject) => {
    Router.run(routes, location, __CLIENT__ ? [transitionHook(store)] : undefined, (error, initialState, transition)  => {
        const component = (
            <Provider store={store}>
                {() => <Router {...initialState} children={routes} history={history}/> }
            </Provider>
        )
        resolve(component)
    })
})

function transitionHook(store) {
    return (nextState, transition, callback) => {
        const { params, location: { query } } = nextState;
        const fetches = nextState.branch
            .map((route) => route.component)
            .filter(getFetchData)
            .map(getFetchData)
            .map((fetch) => {
                const action = fetch()
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