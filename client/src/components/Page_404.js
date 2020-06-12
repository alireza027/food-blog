import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Page_404 extends React.Component{
    render(){
        return(
            <>
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
                                        <li className="nav-item active">
                                            <NavLink to="/" exact className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/archive" exact className="nav-link">Archive</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/static" exact className="nav-link">Static</NavLink>
                                        </li>
                                        <li className="nav-item">
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

                 {/* <!-- ****** Breadcumb Area Start ****** --> */}
                    <div className="breadcumb-area" style={{backgroundImage: "url(/assets/img/bg-img/breadcumb.jpg)"}}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="bradcumb-title text-center">
                                        <h2>404 Page</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container my-3 mx-auto text-center">
                        <div className="content">
                            <h2 className="display-3">Oppps Noting Here</h2>
                            <p className="lead pt-3">May You Incoming Wrong Address</p>
                            <Link to="/" className="btn btn-block btn-danger font-weight-bold">Go To Home page</Link>
                        </div>
                    </div>
            </>
        )
    }
}
export default Page_404;