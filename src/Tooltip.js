import React from 'react'

const Tooltip = ({ direction, tooltipTitle, tooltip }) => {
    return (
        <div className={direction}>
            <h3>{tooltipTitle}</h3>
            <span>{tooltip}</span>
        </div>
    )
}

export default Tooltip