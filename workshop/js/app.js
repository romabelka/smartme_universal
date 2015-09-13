import React, {Component} from 'react'
import confStore from './stores/conferences'
import {addConf} from './actions/confAction'
import ConfList from './components/ConfList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {conferences: confStore.getAll()};
    }
    componentDidMount() {
        confStore.addChangeListener(::this.__onChange)
    }
    componentWillUnmount() {
        confStore.removeChangeListener(::this.__onChange)
    }
    render() {
        return(
            <div>
                <h1>conferences</h1>
                <ConfList conferences={this.state.conferences}/>
                <a href = "#" onClick= {this.addConf}>Add Dummy Conf</a>
            </div>
        )
    }
    addConf(ev) {
        ev.preventDefault()
        addConf({
            title: 'Hello world' + Math.random()*1000
        })
    }

    __onChange() {
        this.setState({
            conferences: confStore.getAll()
        })
    }
}

React.render(<App />, document.getElementById('container'))
