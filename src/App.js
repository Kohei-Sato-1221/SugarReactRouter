import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <div><Link to='/page1'>Go to Page1</Link></div>
      <div><Link to='/page2'>Go to Page2</Link></div>

      <br/>

      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </div>
  </BrowserRouter>
)

const Page1 = () => (
  <div>This is Page1</div>
)

const Page2 = () => (
  <div>This is Page2</div>
)

export default App;
