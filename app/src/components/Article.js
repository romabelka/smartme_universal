import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as atriclesActions from 'actions/articles'

class Article extends Component {
    render() {
        const {article} = this.props
        if (!article) return <h2>Not found :(</h2>
        return (
            <section>
                <h2>Article {article.title}</h2>
                <p>{article.text}</p>
            </section>
        )
    }
}

@connect((state) =>({
    articles: state.articles
}))
export default
class ArticleContainer {
    render() {
        const {articles, dispatch} = this.props
        const article= articles.articles.filter((article) => article.id == this.props.params.id)[0]
        return <Article {...bindActionCreators(atriclesActions, dispatch)} article={article}>
            {this.props.children}
        </Article>
    }
}