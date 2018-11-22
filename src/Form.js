import React from 'react'

class Form extends React.Component {
    state = {
        text: 'Initial Value'
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.text}
                </h1>
                <input
                    type="text"
                    value= {this.state.text}
                    onChange={(event) => this.setState({text: event.target.value})}
                />

            </div>
        )
    }
}

export default Form