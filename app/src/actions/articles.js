import {LOAD_ARTICLES, ARTICLES_LOADED, ARTICLES_FAILED} from './actionTypes'

export function loadArticles() {
    return {
        types: [LOAD_ARTICLES, ARTICLES_LOADED, ARTICLES_FAILED],
        fetch: {
            url: '/api/articles'
        }
    }
}