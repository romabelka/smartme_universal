import React, {Component} from 'react'
import * as articleActions from 'actions/articles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class IndexPage extends Component {
    render() {
        return (
            <div>
                <h3>Main Page</h3>
                <p>Lorem Ipsum</p>
                <a onClick={::this.loadArticles}>load articles</a>
            </div>
        )
    }
    loadArticles(ev) {
        ev.preventDefault()
        this.props.loadArticles()
    }
    static fetchData() {
        console.log('---', 1);
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
    static fetchData(nextState, transition) {
        console.log('---', 123);
        //debugger
        //return this.props.dispatch(articleActions.loadArticles)
    }
}