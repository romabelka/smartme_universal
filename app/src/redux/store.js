import {applyMiddleware, createStore} from 'redux'

export default () => {
    const reducer = require('../reducers')
    const store = createStore(reducer)
    if (__DEVELOPMENT__ && module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers'));
        });
    }

    return store
}