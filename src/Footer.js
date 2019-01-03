import React from 'react'
import Tooltip from './Tooltip'

export default class Footer extends React.Component {
    constructor() {
        super()

        this.state = {
            title: 'Footer',
            tooltip: 'Tooltip Footer'
        }
    }
    render() {
        return (
            <div className='footer'>
                {this.state.title}
                <Tooltip
                    title={this.state.title}
                    tooltip={this.state.tooltip}
                />
            </div>
        )
    }
}
