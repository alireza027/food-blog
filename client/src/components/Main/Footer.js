import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
class Footer extends React.Component{
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
        {/* Footer Social Icon Area Start */}
        <div className="social_icon_area clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="footer-social-area d-flex">
                            <div className="single-icon">
                                <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                            </div>
                            <div className="single-icon">
                                <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                            </div>
                            <div className="single-icon">
                                <a href="http://gmail.com" target="_blank" ><i className="fa fa-google-plus" aria-hidden="true"></i><span>GOOGLE+</span></a>
                            </div>
                            <div className="single-icon">
                                <a href="https://www.linkedin.com/" target="_blank" ><i className="fa fa-linkedin-square" aria-hidden="true"></i><span>linkedin</span></a>
                            </div>
                            <div className="single-icon">
                                <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                            </div>
                            <div className="single-icon">
                                <a href="https://vimeo.com/" target="_blank"><i className="fa fa-vimeo" aria-hidden="true"></i><span>VIMEO</span></a>
                            </div>
                            <div className="single-icon">
                                <a href="https://youtube.com" target="_blank" ><i className="fa fa-youtube-play" aria-hidden="true"></i><span>Youtube</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer Social Icon Area End */}

        {/* Footer Menu Area Start */}
        <footer className="footer_area">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="footer-content">
                            {/* Logo Area Start */}
                            <div className="footer-logo-area text-center">
                                <Link to="/" className="yummy-logo">Yummy Blog</Link>
                            </div>
                            {/* Menu Area Start */}
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-footer-nav" aria-controls="yummyfood-footer-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                                {/* Menu Area Start */}
                                <div className="collapse navbar-collapse justify-content-center" id="yummyfood-footer-nav">
                                    <ul className="navbar-nav">
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
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Copywrite Text */}
                        <div className="copy_right_text text-center">
                            <p>Yummy Template Yum Yum</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
  }
}
export default withRouter(Footer);