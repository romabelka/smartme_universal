import {LOAD_ARTICLES, ARTICLES_LOADED, ARTICLES_FAILED} from './actionTypes'
import {createDfd} from 'helpers'

export function loadArticles() {
    return {
        types: [LOAD_ARTICLES, ARTICLES_LOADED, ARTICLES_FAILED],
        fetch: {
            ...createDfd(),
            url: '/api/articles'
        }
    }
}