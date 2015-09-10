import nFetch from 'node-fetch'
import config from 'config'

export default (dispatch, getState) => next => action => {
    if (!action.fetch) return next(action)
    const {fetch, types, ...rest} = action
    const {promise} = fetch
    wrappFetch(fetch)
    next({...rest, promise, types})
}

function wrappFetch({url, options, resolve, reject}) {
    // .slice(4) to remove '/api' substring
    url = config.get('apiURL') + url.slice(4)
    nFetch(url, options).then((response) => {
        if (response.status >= 200 && response.status < 300) resolve(response.json())
        else reject(new Error(response.statusText))
    }, reject)
}