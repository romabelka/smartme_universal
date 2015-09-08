import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <ul>
                    <Link to="/">Index Page</Link>
                    <Link to="/counter">Counter Page</Link>
                </ul>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }

}