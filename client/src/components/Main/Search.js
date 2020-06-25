import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {SearchPostQuery} from '../../middleware/redux/yummy/yummyThunk'
import Footer from '../Main/Footer';
class Archive extends React.Component{
  constructor(){
    super();
    this.state = {
        searchText : "",
        isActive : false
    }
  }

  componentDidMount(){
    this.props.searchPostDispatch();
    this.setState({
        searchText : this.props.match.params.text,
        isActive : true
    })
  }

  render(){
      const Search = this.state.isActive && gql(this.props.postSearchState);
      console.log(this.props);
    return(
      <>
      {/* start header */}
            <header className="header_area">
                <div className="container">
                    <div className="row">
                        {/* <!-- Logo Area Start --> */}
                        <div className="col-12">
                            <div className="logo_area text-center">
                                <Link to="/" className="yummy-logo">Yummy Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler p-2" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                                {/* <!-- Menu Area Start --> */}
                                <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                    <ul className="navbar-nav" id="yummy-nav">
                                        <li className="nav-item">
                                            <NavLink to="/" exact className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/archive" exact className="nav-link">Archive</NavLink>
                                        </li>
                                        <li className="nav-item" >
                                            <NavLink to="/login" exact className="nav-link">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/register" exact className="nav-link">Register</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
      {/* end of header */}


      {/* <!-- ****** Breadcumb Area Start ****** --> */}
        <div className="breadcumb-area" style={{backgroundImage: "url(/assets/img/bg-img/breadcumb.jpg)"}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="bradcumb-title text-center">
                            <h2>Search Text : {this.state.searchText}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="breadcumb-nav">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Search</li>
                              <li className="breadcrumb-item active" aria-current="page">{this.state.searchText}</li>
                          </ol>
                      </nav>
                  </div>
              </div>
            </div>
        </div>


        {/* archive area start */}
        <section className="archive-area section_padding_80">
            <div className="container">
              <div className="row mb-4">
              {this.state.isActive && (
                    <Query query={Search} variables={{text:this.state.searchText}}>
                    {({loading,error,data})=>{
                        if(loading) return (<></>);
                        if(error) return (<></>);
                        return data.SearchPost.map((post)=>{
                            return (
                                <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                        {/* <!-- change here --> */}
                                        <div className="post-thumb">
                                            <img src="/assets/img/blog-img/2.jpg" alt="" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <Link to={`/user/${post.user.id}`}>{post.user.username}</Link>
                                                    </div>
                                                    <div className="post-date">
                                                        <p style={{color:"#b5aec4",fontSize:"16px"}}>{post.created_post}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={`/post/${post.id}`}>
                                                <h4 className="post-headline">{post.title}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }}
                </Query>
                )}
              </div>
            </div>
        </section>
        {/* end of archive area end */}

        {/* start Footer */}
          <Footer/>
        {/* end of Footer */}
      </>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        postSearchState : state.postSearch
    }
  }

const mapDispatchToProps = dispatch=>({
    searchPostDispatch : () => dispatch(SearchPostQuery()),
})
export default connect(mapStateToProps,mapDispatchToProps)(Archive);