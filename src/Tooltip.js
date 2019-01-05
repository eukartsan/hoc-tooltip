import React from 'react'

class Tooltip extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <span>{this.props.tooltip}</span>
            </div>
        )
    }
}

export default Tooltip