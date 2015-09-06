import React, {Component} from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }

}