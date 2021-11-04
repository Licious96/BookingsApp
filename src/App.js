import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register'
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
    
  );
}

export default App;
