import React, {Component} from 'react'
import confStore from 'stores/conferences'

class App extends Component {
    getInitialState() {
        return {
            conferences: confStore.getAll()
        }
    }
    componentDidMount() {
        confStore.addChangeListener(this.__onChange)
    }
    render() {
        let names = ['Roma', 'Igor', 'Alex'];
        let buttons = names.map((name) => <Button key={name} name={name}/>)
        return(
            <h1>
                <a>Hello world</a>
                {buttons}
            </h1>
        )
    }

    __onChange() {
        this.setState({
            conferences: confStore.getAll()
        })
    }
}

React.render(<App />, document.getElementById('container'))
