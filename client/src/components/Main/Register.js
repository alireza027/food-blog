import React from 'react';
import {Link,NavLink} from 'react-router-dom';
class Register extends React.Component{
    render(){
        return(
            <>
            <header className="header_area">
                    <div className="">
                    <div className="row no-gutters">
                        <div className="w-100">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                                {/* <!-- Menu Area Start --> */}
                                <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                    <ul className="navbar-nav" id="yummy-nav">
                                        <li className="nav-item">
                                            <NavLink to="/" exact className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/archive" exact className="nav-link">Archive</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" exact className="nav-link">Login</NavLink>
                                        </li>
                                        <li className="nav-item active">
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
                                <h2>Register</h2>
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
                              <li className="breadcrumb-item active" aria-current="page">Register</li>
                          </ol>
                      </nav>
                  </div>
              </div>
            </div>
        </div>

            {/* Form */}
            <div className="container mx-auto my-5">
                <div className="form-group mb-4">
                    <label>Name</label>
                    <input type="text" placeholder="Please Enter Name" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                </div>

                <div className="form-group mb-4">
                    <label>Email</label>
                    <input type="email" placeholder="Please Enter Email" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                </div>
                
                <div className="form-group mb-4">
                    <label>Password</label>
                    <input type="password" placeholder="Please Enter Email" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                </div>

                <div className="custom-file mb-4 mt-3">
                    <input type="file" className="custom-file-input" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                    <label className="custom-file-label" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}>Choose Your Profile Picture</label>
                </div>

                <Link to="/" className="btn btn-block" style={{backgroundColor:"#f0932b",color:"#fff"}}>Register</Link>
                <Link to="/login" className="btn btn-link">You Haven't Account? Go To Login</Link>
            </div>
            {/* end of Form */}
            </>
        )
    }
}
export default Register;