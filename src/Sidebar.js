import React from 'react'
import Tooltip from './Tooltip'

export default class Sidebar extends React.Component {
    constructor() {
        super()

        this.state = {
            title: 'Sidebar',
            tooltip: 'Tooltip Sidebar',
            hovering: false
        }
    }

    mouseOn = () => this.setState({ hovering: true })
    mouseOff = () => this.setState({ hovering: false })

    render() {
        return (
            <div className="sidebar"
                 onMouseOver={this.mouseOn}
                 onMouseOut={this.mouseOff}>
                {this.state.hovering === true ?
                    <Tooltip
                        title={this.state.title}
                        tooltip={this.state.tooltip}
                    /> : null}
                    <div>
                        <p>Text</p>
                    </div>
            </div>

        )
    }
}
