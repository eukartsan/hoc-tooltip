import React, { Fragment } from 'react'
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
            <Fragment>
                {this.state.hovering === false ?
                    <Tooltip
                        title={this.state.title}
                        tooltip={this.state.tooltip}
                    /> : null}
                <div
                    onMouseOver={this.mouseOn}
                    onMouseOut={this.mouseOff}
                    className="sidebar">
                    <div>
                        <p>Text</p>
                    </div>
                </div>
            </Fragment>

        )
    }
}
