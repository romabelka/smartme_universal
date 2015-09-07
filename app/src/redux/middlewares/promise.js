export default (dispatch, getState) => next => action => {
    if (!action.promise) return next(action)

    const {promise, types, ...rest} = action
    const [STARTED, SUCCESS, FAILURE] = types
    next({...rest, type: STARTED})
    promise.then(
        (data) => next({...rest, data, type: SUCCESS}),
        (error) => next({...rest, error, type: FAILURE})
    )
}
