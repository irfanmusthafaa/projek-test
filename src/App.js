import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
     <Router>
      <div className="App">
      <Switch>
        <Route
        exact
        path='/'
        component={Register}
        />

        <Route
        exact
        path='/login'
        component={Login}
        />
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
