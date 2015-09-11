import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {transitionHook} from 'router'

export default class App extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    };

    componentWillMount() {
        const {store, router} = this.context
        this.transitionHook = transitionHook(store)
        router.addTransitionHook(this.transitionHook)
    }
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