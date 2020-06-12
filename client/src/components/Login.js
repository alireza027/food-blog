import React from 'react';
import {Link,NavLink} from 'react-router-dom';
class Login extends React.Component{
    render(){
        return(
            <>
            <header className="header_area">
                    <div className="container">
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
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="container mx-auto my-5">
                <div className="form-group mb-4">
                    <label>Email</label>
                    <input type="email" placeholder="Please Enter Email" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Please Enter Password" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                </div>

                <Link to="/" className="btn btn-block mt-4" style={{backgroundColor:"#f0932b",color:"#fff"}}>Login</Link>
                <Link to="/register" className="btn btn-link">You Have A Account? Go To Register</Link>
            </div>
            {/* end of Form */}
            </>
        )
    }
}
export default Login;