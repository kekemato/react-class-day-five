import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Counter from './components/Counter'
import Form from './Form'
import Users from './components/Users'

const App = (props) => (
  <MuiThemeProvider>
    <div>
      <Counter
        startValue={5}
        min={-10}
        max={10}
      />
      <hr />
      <Form />
    </div>
  </MuiThemeProvider>

)

export default App;
