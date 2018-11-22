import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startValue
    }

    incNumber = () => {
        if (this.state.number >= this.props.max) return

        this.setState({ number: this.state.number + 1 })
    }
    decNumber = () => {
        if (this.state.number <= this.props.min) return

        this.setState({ number: this.state.number - 1 })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.incNumber}>
                    +
                </button>
                <button
                    onClick={this.decNumber}>
                    -
                </button>
                <p>
                    {
                        this.state.number  === this.props.max ?
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

}

Counter.defaultProps = {
    startValue: 0,
    min: -5,
    max: 5
}

Counter.propTypes = {
    startValue: Number,
    min: Number,
    max: Number
}

export default Counter