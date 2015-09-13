import React, {Component} from 'react'


class Button extends Component {
    render() {
        return (
            <div style = {{color: 'red'}} >
                <span>I'm a button {this.props.name}</span>
                <a href="#">click me</a>
            </div>
        )
    }
}

class App extends Component {
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
}

React.render(<App />, document.getElementById('container'))
