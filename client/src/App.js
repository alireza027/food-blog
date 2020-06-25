import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost'
import Home from './components/Main/Home';
import Archive from './components/Archive/Archive';
import Single from './components/Main/Single';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import Page_404 from './components/Main/Page_404';
import User_Profile from './components/Main/User_Profile';
import Archive_Food from './components/Archive/Archive_Food';
import Archive_Cooking from './components/Archive/Archive_Cooking';
import Archive_Style_Life from './components/Archive/Archive_Style_Life';
import Profile from './components/Profile_User/Profile';
import Profile_Update from './components/Profile_User/Profile_Update';
import User_Likes from './components/Profile_User/User_Likes';
import User_Comments from './components/Profile_User/User_Comments';
import User_Posts from './components/Profile_User/User_Posts';
import Post_Add from './components/Profile_User/Post_Add';
import Search from './components/Main/Search';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
})

class App extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <ApolloProvider client={client}>
          <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/archive" exact component={Archive} />
                <Route path="/archive/archive-food" exact component={Archive_Food} />
                <Route path="/archive/archive-cooking" exact component={Archive_Cooking} />
                <Route path="/archive/archive-life-style" exact component={Archive_Style_Life} />
                <Route path="/post/:id" exact component={Single} />
                <Route path="/user/:id" exact component={User_Profile} />
                <Route path="/search/:text" exact component={Search} />
                <Route path="/profile/:username" exact component={Profile} />
                <Route path="/profile/:username/update-profile" exact component={Profile_Update} />
                <Route path="/profile/:username/likes" exact component={User_Likes} />
                <Route path="/profile/:username/comments" exact component={User_Comments} />
                <Route path="/profile/:username/posts" exact component={User_Posts} />
                <Route path="/profile/:username/add-post" exact component={Post_Add} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route component={Page_404} />
              </Switch>
          </Router>
      </ApolloProvider>
    )
  }
}
export default App;