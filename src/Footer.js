import React from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

const Footer = (props) => {
    return (
        <div className="flex-footer">
            {props.hovering === true ?
                <Tooltip
                    tooltipTitle={'Footer Title'}
                    tooltip={'Tooltip Footer'}
                    direction={'top'}
                />
                : null}
            <div className="flex-container flex-end">
                <div className="flex-item">
                    <p>Footer</p>
                </div>
                <ul className="flex-item">
                    <li>Блог</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
                <div className="flex-item">
                    <p>Copyright © 2019</p>
                </div>
            </div>
        </div>
    )
}

export default withHover(Footer)