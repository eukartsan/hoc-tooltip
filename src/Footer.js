import React from 'react'
import Tooltip from './Tooltip'

export default class Footer extends React.Component {
    constructor() {
        super()

        this.state = {
            title: 'Footer',
            tooltip: 'Tooltip Footer',
            hovering: false
        }
    }

    mouseOn = () => this.setState({ hovering: true })
    mouseOff = () => this.setState({ hovering: false })

    render() {
        return (
            <div className="flex-container flex-end"
                 onMouseOver={this.mouseOn}
                 onMouseOut={this.mouseOff}
            >
                {this.state.hovering === true ?
                    <div className="tooltip-footer">
                        <Tooltip
                            title={this.state.title}
                            tooltip={this.state.tooltip}
                        />
                        <div className="tooltip-footer-tooltiptext">
                        </div>
                    </div>
                        : null}
                <div className="flex-item">
                    <h3>{this.state.title}</h3>
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
