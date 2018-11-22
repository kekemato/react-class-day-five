import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './components/Counter'
import Form from './Form'
import Users from './components/Users2'

const App = (props) => (
  <Router>
    <div>
      <Link to="/"><p>Home</p></Link>
      <Link to="/Counter"><p>Counter</p></Link>
      <Link to="/users"><p>Users</p></Link>
      <Link to="/form"><p>Form</p></Link>
      <Route path="/counter" component={() => (
        <Counter
          startValue={5}
          min={-10}
          max={10}
        />
      )}
      />
      <Route path="/users" component={() => <Users
        numberOfResults= {10}
      />
      }
      />
      <Route path="/form" component={() => <Form />} />
    </div>
  </Router>
)

export default App;
