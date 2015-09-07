export default (dispatch, getState) => next => action => {
    if (!action.fetch) return next(action)
    const {fetch, types, ...rest} = action
    const {url, ...options} = fetch
    const promise = wrappFetch(window.fetch(url))
    next({...rest, promise, types})
}

function wrappFetch(fetchPromise) {
    return new Promise((resolve, reject) => {
        fetchPromise.then((response) => {
            if (response.status >= 200 && response.status < 300) resolve(response.json())
            else reject(new Error(response.statusText))
        }, reject)
    })
}