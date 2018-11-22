import React from 'react'

class Form extends React.Component {
    state = {
        text: " "
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <input
                    value={this.state.text}
                    readOnly={true}
                >
                </input>
                <br />

            </div>
        )
    }
}

export default Form