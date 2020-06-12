import React from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
        
    }
  }

  render(){
    return(
      <>
        {/* Footer Social Icon Area Start */}
        <div className="social_icon_area clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-social-area d-flex">
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i><span>facebook</span></Link>
                            </div>
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></Link>
                            </div>
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i><span>GOOGLE+</span></Link>
                            </div>
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i><span>linkedin</span></Link>
                            </div>
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></Link>
                            </div>
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-vimeo" aria-hidden="true"></i><span>VIMEO</span></Link>
                            </div>
                            <div className="single-icon">
                                <Link to="/"><i className="fa fa-youtube-play" aria-hidden="true"></i><span>YOUTUBE</span></Link>
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
                    <div className="col-12">
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
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Features</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Categories</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Archive</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link" >About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link" >Contact</Link>
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
export default Footer;