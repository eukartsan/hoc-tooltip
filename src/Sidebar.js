import React from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

class Sidebar extends React.Component {
    constructor() {
        super()

        this.state = {
            title: 'Sidebar',
            tooltip: 'Tooltip Sidebar',
        }
    }

    render() {
        return (
            <div>
                {this.props.hovering === true ?
                    <div className="tooltip-sidebar">
                        <Tooltip
                            title={this.state.title}
                            tooltip={this.state.tooltip}
                        />
                        <div className="tooltip-sidebar-tooltiptext">
                        </div>
                    </div>
                    : null}
                <div className="sidebar">
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
                        <p>Блог</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withHover(Sidebar)