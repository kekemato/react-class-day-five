import React from 'react'

class Users extends React.Component {
    stan = {
        users: null
    }
    render() {
        return (
            <div>
            {this.state.users}
            </div>
        )
    }
}

export default Users