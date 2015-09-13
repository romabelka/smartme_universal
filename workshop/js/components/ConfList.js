import React, {Component} from 'react'
import Conf from './Conf'

class ConfList extends Component {
    render() {
        let confs = this.props.conferences
            .map((conf) => <li><Conf key={conf.title} conf={conf} /></li>)
        return (
            <ul>
                {confs}
            </ul>
        )
    }
}

export default ConfList