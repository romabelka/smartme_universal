import dispatcher from '../dispatcher'
import {CREATE_CONF, DELETE_CONF, CHANGE_CONF} from '../actions/types'

export function addConf(data) {
    dispatcher.dispatch({
        actionType:  CREATE_CONF,
        data: data
    })
}
