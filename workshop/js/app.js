import React, {Component} from 'react'
import confStore from './stores/conferences'
import {addConf} from './actions/confAction'

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
        console.log('---', this.state);
        let confs = this.state.conferences.map((conf) => conf.title)
        return(
            <div>
                <h1>conferences</h1>
                {confs}
                <a href = "#" onClick= {this.addConf}>Add Dummy Conf</a>
            </div>
        )
    }
    addConf(ev) {
        ev.preventDefault()
        addConf({
            title: 'Hello world'
        })
    }

    __onChange() {
        this.setState({
            conferences: confStore.getAll()
        })
    }
}

React.render(<App />, document.getElementById('container'))
