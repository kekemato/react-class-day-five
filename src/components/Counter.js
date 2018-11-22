import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startValue || 0
    }

    incNumber = () => {
        if (this.state.number >= this.props.max) return

        this.setState({ number: this.state.number + 1 })
    }
    decNumber = () => {
        if (this.state.number <= this.props.min) return

        this.setState({ number: this.state.number - 1 })
    }

    render = () => (
        <div>
            <h1>
                {this.state.number}
            </h1>
            <button
                onClick={this.incNumber}>
                {'+'}
            </button>
            <button
                onClick={this.decNumber}>
                {'-'}
            </button>
            <p>
                {
                    this.state.number === this.props.max ?
                        'cannot exceed set range'
                        :
                        this.state.number === this.props.min ? 'cannot go below set range'
                            :
                            null
                }
            </p>
        </div>
    )

}

export default Counter