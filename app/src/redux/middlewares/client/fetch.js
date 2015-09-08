export default (dispatch, getState) => next => action => {
    if (!action.fetch) return next(action)
    const {fetch, types, ...rest} = action
    const {promise} = fetch
    wrappFetch(fetch)
    next({...rest, promise, types})
}

function wrappFetch(fetchData) {
    const {url, resolve, reject, options} = fetchData
    window.fetch(url, options).then((response) => {
        if (response.status >= 200 && response.status < 300) resolve(response.json())
        else reject(new Error(response.statusText))
    }, reject)
}