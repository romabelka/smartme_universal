import React, {Component} from 'react'
import confStore from './stores/conferences'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {conferences: confStore.getAll()};
    }
    componentDidMount() {
        confStore.addChangeListener(this.__onChange)
    }
    componentWillUnmount() {
        confStore.removeChangeListener(this.__onChange)
    }
    render() {
        console.log('---', this.state);
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
