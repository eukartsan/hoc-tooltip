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
            <div>
                {this.state.hovering === true ?
                    <div className="tooltip-sidebar">
                        <Tooltip
                            title={this.state.title}
                            tooltip={this.state.tooltip}
                        />
                        <div className="tooltip-sidebar-tooltiptext">
                        </div>
                    </div>
                    : null}
            <div className="sidebar"
                 onMouseOver={this.mouseOn}
                 onMouseOut={this.mouseOff}>
                    <div>
                        <p>Text</p>
                    </div>

                    <div className="flex-item">
                        <h3>{this.state.title}</h3>
                    </div>
                    <div className="flex-item">
                        <p>Sidebar</p>
                    </div>
                    <ul className="flex-item">
                        <li>Блог</li>
                    </ul>
                    <div className="flex-item">
                        <p></p>
                    </div>
            </div>
            </div>
        )
    }
}
