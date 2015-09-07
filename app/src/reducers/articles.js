import {LOAD_ARTICLES, ARTICLES_LOADED, ARTICLES_FAILED} from 'actions/actionTypes'

export default (state = {articles: []}, action) => {
    if ([LOAD_ARTICLES, ARTICLES_LOADED, ARTICLES_FAILED].indexOf(action.type) == -1) return state
    switch (action.type) {
        case LOAD_ARTICLES:
            return {
                loading: true,
                loaded: false,
                articles: []
            }
        case ARTICLES_LOADED:
            return {
                loading: false,
                loaded: true,
                articles: action.data
            }
        case ARTICLES_FAILED:
            return {
                loading: false,
                loaded: false,
                articles: [],
                error: action.error
            }
    }
}