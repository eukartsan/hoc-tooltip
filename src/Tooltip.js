import React from 'react'

class Tooltip extends React.Component {
    render() {
        return (
            <div className="tooltip">
                <h3>{this.props.title}</h3>
                <span className="tooltiptext">{this.props.tooltip}</span>
            </div>
        )
    }
}

export default Tooltip