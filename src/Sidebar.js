import React from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

const Sidebar = (props) => {
    return (
        <div>
            {props.hovering === true ?
                <Tooltip
                    tooltipTitle={'Sidebar Title'}
                    tooltip={'Tooltip Sidebar'}
                    direction={'left'}
                />
                : null}
            <div className="sidebar">
                <div>
                    <p>Text</p>
                </div>
                <div className="flex-item">
                    <p>Sidebar</p>
                </div>
                <div className="flex-item">
                    <p>Блог</p>
                </div>
            </div>
        </div>
    )
}

export default withHover(Sidebar)