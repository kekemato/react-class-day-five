import React from 'react';

import Counter from './components/Counter'

const App = (props) => (
  <Counter
    startValue={5}
    min={-10}
    max={10}
  />

)

export default App;
