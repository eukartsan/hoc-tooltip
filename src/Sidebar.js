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

        )
    }
}
