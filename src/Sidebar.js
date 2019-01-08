import React from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

class Sidebar extends React.Component {

    render() {
        return (
            <div>
                {this.props.hovering === true ?
                    <div className="tooltip-sidebar">
                        <Tooltip
                            tooltipTitle={'Sidebar Title'}
                            tooltip={'Tooltip Sidebar'}
                            direction={'left'}
                        />
                    </div>
                    : null}
                <div className="sidebar">
                    <div>
                        <p>Text</p>
                    </div>

                    <div className="flex-item">

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