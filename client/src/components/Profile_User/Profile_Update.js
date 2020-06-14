import React from 'react';
import {NavLink,Link} from 'react-router-dom';
class Profile_Update extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
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
                                            <li className="nav-item active">
                                                <NavLink to="/profile" exact className="nav-link">Profile</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="breadcumb-area" style={{backgroundImage: "url(/assets/img/bg-img/breadcumb.jpg)"}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2>Profile Update</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="container mx-auto my-5">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Name" className="form-control" value="alireza" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Email</label>
                        <input type="email" placeholder="Please Enter Email" className="form-control" value="alireza@gmail.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Please Enter Password" className="form-control" value="12345678" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="custom-file" style={{marginTop:"32px",marginBottom:"25px"}}>
                                <input type="file" className="custom-file-input" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                                <label className="custom-file-label" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}>Choose Your Profile Picture</label>
                            </div>
                    </div>
                </div>
            
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Instag</label>
                            <input type="text" placeholder="Enter Insta Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Facebook</label>
                            <input type="text" placeholder="Enter Facebook Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Twitter</label>
                            <input type="text" placeholder="Enter Twitter Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Google</label>
                            <input type="text" placeholder="Enter Google Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Skype</label>
                            <input type="text" placeholder="Enter Skype Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Vimeo</label>
                            <input type="text" placeholder="Enter Vimeo Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                </div>
            
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Linked In</label>
                            <input type="text" placeholder="Enter Linked In Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Youtube</label>
                            <input type="text" placeholder="Enter Youtube Address" className="form-control" value="http://www.ggg.com" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                </div>

                <Link to="/" className="btn btn-block mt-4" style={{backgroundColor:"#f0932b",color:"#fff"}}>Update</Link>
            </div>
            </>
        )
    }
}
export default Profile_Update;