import React from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

class Footer extends React.Component {

    render() {
        return (
            <div className="flex-container flex-end">
                {this.props.hovering === false ?
                    <div className="tooltip-footer">
                        <Tooltip
                            tooltipTitle={'Footer Title'}
                            tooltip={'Tooltip Footer'}
                            direction={'top'}
                        />
                    </div>
                    : null}
                <div className="flex-item">

                </div>
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
        )
    }
}

export default withHover(Footer)