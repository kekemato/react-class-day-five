import React from 'react'
import TextField from 'material-ui/TextField'

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
                <TextField
                    id="text-field-default"
                    defaultValue="Default Value" />

            </div>
        )
    }
}

export default Form