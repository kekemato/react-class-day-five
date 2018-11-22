import React from 'react'

class Users2 extends React.Component {
    state = {
        users: null
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${this.props.numberOfResults}`)
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    }

    render() {
        return (
            this.state.users &&
            this.state.users.map ?
                this.state.users.map(user =>
                    <div key={user.login.uuid}>
                        {user.email}
                    </div>)
                :
                "Ładowanie"
        )
    }
}

export default Users2