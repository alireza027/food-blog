import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Main/Home';
import Archive from './components/Archive/Archive';
import Single from './components/Main/Single';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import Page_404 from './components/Main/Page_404';
import Archive_Food from './components/Archive/Archive_Food';
import Archive_Cooking from './components/Archive/Archive_Cooking';
import Archive_Style_Life from './components/Archive/Archive_Style_Life';
import Profile from './components/Profile_User/Profile';
import Profile_Update from './components/Profile_User/Profile_Update';
import User_Likes from './components/Profile_User/User_Likes';
import User_Comments from './components/Profile_User/User_Comments';
import User_Posts from './components/Profile_User/User_Posts';
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
            <Route path="/archive/archive-food" exact component={Archive_Food} />
            <Route path="/archive/archive-cooking" exact component={Archive_Cooking} />
            <Route path="/archive/archive-life-style" exact component={Archive_Style_Life} />
            <Route path="/post/:id" exact component={Single} />
            <Route path="/profile/:username" exact component={Profile} />
            <Route path="/profile/:username/update-profile" exact component={Profile_Update} />
            <Route path="/profile/:username/likes" exact component={User_Likes} />
            <Route path="/profile/:username/comments" exact component={User_Comments} />
            <Route path="/profile/:username/posts" exact component={User_Posts} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={Page_404} />
          </Switch>
      </Router>
    )
  }
}
export default App;