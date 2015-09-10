import React, {Component} from 'react'
import * as articleActions from 'actions/articles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class IndexPage extends Component {
    render() {
        const articles = this.props.articles.articles.map((article) => (
            <li key={article.id}>
                <a>{article.title}</a>
            </li>
        ))
        return (
            <div>
                <h3>Main Page</h3>
                <p>Lorem Ipsum</p>
                <a onClick={::this.loadArticles}>load articles</a>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }
    loadArticles(ev) {
        ev.preventDefault()
        this.props.loadArticles()
    }
}

@connect((state) => ({
    articles: state.articles
}))
export default
class IndexPageWrapper {
    render() {
        const {articles, dispatch} = this.props
        return (
            <IndexPage articles={articles} {...bindActionCreators(articleActions, dispatch)}>
                {this.props.children}
            </IndexPage>
        )
    }
    static fetchData(store) {
        if (!store.getState().articles.loaded) return articleActions.loadArticles()
    }
}