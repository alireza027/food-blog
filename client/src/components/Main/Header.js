import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
class Header extends React.Component{
  constructor(){
    super();
    this.state = {
        
    }
  }

  activeList = (listContent)=>{
      if(this.props.match.path === `/${listContent}`){
          return "active";
      }else {
          return ""
      }
  }


  render(){
    return(
      <>
          {/* Preloader Start */}
          <div className="top_header_area">
          <div className="container">
              <div className="row">
                  <div className="col-5 col-sm-6">
                      {/* <!--  Top Social bar start --> */}
                      <div className="top_social_bar">
                          <Link to="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                          <Link to="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                          <Link to="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                          <Link to="https://www.skype.com/en/" target="_blank" ><i className="fa fa-skype" aria-hidden="true"></i></Link>
                      </div>
                  </div>
                  {/* <!--  Login Register Area --> */}
                  <div className="col-7 col-sm-6">
                      <div className="signup-search-area d-flex align-items-center justify-content-end">
                          <div className="">
                              <form action="/" method="get">
                                  <input type="search" name="search" id="search-anything" placeholder="Search Anything..." className="form-control" style={{border:"none"}} autoComplete="off"/>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- ****** Top Header Area End ****** --> */}
      {/* <!-- ****** Header Area Start ****** --> */}
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
                  <div className="col-12">
                      <nav className="navbar navbar-expand-lg">
                          <button className="navbar-toggler p-2" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                          {/* <!-- Menu Area Start --> */}
                          <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                              <ul className="navbar-nav" id="yummy-nav">
                                  <li className={`nav-item ${this.activeList('')}`}>
                                      <NavLink to="/" exact className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                  </li>
                                  <li className={`nav-item ${this.activeList('archive')}`}>
                                      <NavLink to="/archive" exact className="nav-link">Archive</NavLink>
                                  </li>
                                  <li className={`nav-item ${this.activeList('login')}`} >
                                      <NavLink to="/login" exact className="nav-link">Login</NavLink>
                                  </li>
                                  <li className={`nav-item ${this.activeList('register')}`}>
                                      <NavLink to="/register" exact className="nav-link">Register</NavLink>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
      {/* <!-- ****** Header Area End ****** --> */}
      </>
    )
  }
}
export default withRouter(Header);