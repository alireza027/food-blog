import React from 'react';
import { connect } from "react-redux";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
// import {Link} from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      posts : [],
    }
  }

  render(){
    const POST_ALL = gql(this.props.posts);
    return(
      <>
        <Query query={POST_ALL}>
          {({loading,error,data})=>{
            if(loading) return <p>Loading</p>
            if(error) return <p>Error</p>
            console.log(data.AllPost.slice(0,4));
          }}
        </Query>
      </> 
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    posts : state.posts
  }
}
export default connect(mapStateToProps)(Home);