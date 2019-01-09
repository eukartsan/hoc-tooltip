import React from 'react'

class Tooltip extends React.Component {
    render() {
        return (
            <div className={this.props.direction}>
                <h3>{this.props.tooltipTitle}</h3>
                <span>{this.props.tooltip}</span>
            </div>
        )
    }
}

export default Tooltip