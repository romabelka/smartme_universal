import INCREMENT from 'actions/actionTypes'

export default (state = 0, action) => {
    return action == INCREMENT ? state + 1 : state
}