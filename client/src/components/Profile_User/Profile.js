import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import '../../assets/styles/profile.css';
class Profile extends React.Component{
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
                                <h2>Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* profile */}
            <div className="container mx-auto">
                <div className="profile-top">
                    <div className="w-100 prof-pic">
                        <div>
                        <Link to="/profile/alireza27/update-profile" title="Change Profile">
                            <img src="/assets/img/about-img/1.jpg" alt="" />
                        </Link>
                        </div>
                        <div className="content">
                            <div className="d-flex justify-content-around">
                                <p><b>Name </b> : Alireza</p>
                                <p><b>Username </b> : Alireza27</p>
                            </div>
                            <div className="d-flex justify-content-around">
                                <p><b>Email </b> : Alireza27@gmail.com</p>
                                <p><b>Created Account </b> : 2019-09-12 3:00pm</p>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-sm-12 col-md-5 mb-3">
                                <Link to="/profile/alireza27/update-profile" className="btn btn-block btn-danger">Change Profile</Link>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <Link to="/profile/alireza27/posts" className="btn btn-block btn-danger">Posts</Link>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-sm-12 col-md-5 mb-3">
                                <Link to="/profile/alireza27/likes" className="btn btn-block btn-secondary">Likes View</Link>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <Link to="/profile/alireza27/comments" className="btn btn-block btn-secondary">Comments View</Link>
                            </div>
                        </div>
                        <div className="icons subscribe-link">
                                <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-google" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-vimeo" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-youtube" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Profile;