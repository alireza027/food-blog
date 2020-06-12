import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Archive from './components/Archive';
import Single from './components/Single';
import Login from './components/Login';
import Register from './components/Register';
import Page_404 from './components/Page_404';
class App extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/archive" exact component={Archive} />
            <Route path="/single" exact component={Single} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={Page_404} />
          </Switch>
      </Router>
    )
  }
}
export default App;