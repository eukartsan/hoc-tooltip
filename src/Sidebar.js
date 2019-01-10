import React from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

const Sidebar = ({hovering}) => {
    return (
        <div>
            {hovering === true ?
                <Tooltip
                    tooltipTitle={'Sidebar Title'}
                    tooltip={'Tooltip Sidebar'}
                    direction={'left'}
                />
                :
                <Tooltip
                />
            }
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