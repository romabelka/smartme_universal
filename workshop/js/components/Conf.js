import React, {Component} from 'react'

class Conf extends Component {
    render() {
        const {title} = this.props.conf
        return (
            <div>
                <h3>{title}</h3>
                <a href="#" onClick={this.deleteConf}>remove this conf</a>
            </div>
        )
    }
    deleteConf() {
        console.log('---', 'implement me');
    }
}

export default Conf