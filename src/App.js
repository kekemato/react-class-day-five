import React from 'react';

import Counter from './components/Counter'
import Form from './Form'

const App = (props) => (
  <div>
    <Counter
      startValue={5}
      min={-10}
      max={10}
    />
    <hr></hr>
    <Form />
  </div>

)

export default App;
