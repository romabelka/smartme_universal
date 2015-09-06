import {INCREMENT} from 'actions/actionTypes'

export default (state = 0, action) => {
    return action.type == INCREMENT ? state + 1 : state
}