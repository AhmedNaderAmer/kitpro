import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Analytics from './components/analytics';


function App() {
  return (
    <Router>
            
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="/analytics">
                <Analytics />
              </Route> 
        </Router>
  );
}

export default App;
