import React from 'react'

function withHover(Component) {
    return class WithHover extends React.Component {

        state = { hovering: false }

        mouseOn = () => this.setState({ hovering: true })
        mouseOff = () => this.setState({ hovering: false })

        render() {
            return (
                <div
                    onMouseOver={this.mouseOn}
                    onMouseOut={this.mouseOff}>
                    <Component
                        hovering={this.state.hovering}
                    />
                </div>

            )
        }
    }
}

export default withHover