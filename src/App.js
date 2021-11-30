import { BrowserRouter as Router, Route,Switch ,Routes } from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Analytics from './components/analytics';
import Account from './components/account';
import Logistics from './components/logistics';
import Porfile from './components/porfile';
import Layout from './components/layout'

function App() {
  return (
    <Router>
              <Layout>
                <Switch>
                    <Route exact path="/analytics">
                      <Analytics />
                    </Route> 
                    <Route exact path="/account">
                      <Account />
                    </Route> 
                    <Route exact path="/logistics">
                      <Logistics />
                    </Route> 
                    <Route exact path="/porfile">
                      <Porfile />
                    </Route> 
                    {/* <Route exact path="/layout">
                      <Layout />
                    </Route>  */}
                </Switch>
              </Layout>
            <Route exact path="/login">
              <Login />
            </Route>
           <Route path="/register">
              <Register />
           </Route>
        </Router>
  );
}

export default App;
