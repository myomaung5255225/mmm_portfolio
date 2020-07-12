import React from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Root from './componets/Layout'
import 'rsuite/dist/styles/rsuite-default.css';
function App() {
  return (
    <Router>
     <Switch>
     <Route  path='/' component={Root} />
     </Switch>
    </Router>
  )
}

export default App
