import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as counterActions from 'actions/counter'

class Counter extends Component {
    render() {
        return (
            <div>
                <h3>count is: {this.props.count}</h3>
                <span onClick={::this.increment}>increment me</span>
            </div>
        )
    }
    increment(e) {
        e.preventDefault()
        this.props.increment()
    }
}

@connect((state) => ({
    count: state.counter
}))
export default
class CounterContainer {
    render() {
        const {count, dispatch} = this.props
        return (
            <Counter count={count} {...bindActionCreators({...counterActions}, dispatch)}>
                {this.props.children}
            </Counter>
        )
    }
}