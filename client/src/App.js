import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Archive from './components/Archive';
import Single from './components/Single';
import Login from './components/Login';
import Register from './components/Register';
import Page_404 from './components/Page_404';
import Archive_Food from './components/Archive_Food';
import Archive_Cooking from './components/Archive_Cooking';
import Archive_Style_Life from './components/Archive_Style_Life';
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
            <Route path="/archive-food" exact component={Archive_Food} />
            <Route path="/archive-cooking" exact component={Archive_Cooking} />
            <Route path="/archive-life-style" exact component={Archive_Style_Life} />
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