import React, {Component} from 'react'
import confStore from './stores/conferences'

class App extends Component {
    getInitialState() {
        return {
            conferences: confStore.getAll()
        }
    }
    componentDidMount() {
        confStore.addChangeListener(this.__onChange)
    }
    componentWillUnmount() {
        confStore.removeChangeListener(this.__onChange)
    }
    render() {
        let confs = this.state.conferences.map((conf) => conf.title)
        return(
            <div>
                <h1>conferences</h1>
                {confs}
            </div>
        )
    }

    __onChange() {
        this.setState({
            conferences: confStore.getAll()
        })
    }
}

React.render(<App />, document.getElementById('container'))
