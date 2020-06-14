import React from 'react';
import {Link,NavLink} from 'react-router-dom';
class User_Comments extends React.Component{
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
                                        <h2>User Comments</h2>
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
                                        <li className="breadcrumb-item"><Link to="/profile/alireza27"> Profile</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">alireza27</li>
                                        <li className="breadcrumb-item active" aria-current="page">comments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* content */}
                <div className="container mx-auto mt-5 mb-1">
                    <div className="row justify-content-between">

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4">
                        <div class="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div class="card-header text-center">2020-03-12 12:00 PM</div>
                                <div class="card-body">
                                    <p class="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/" className="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                </div>
            </>
        )
    }
}
export default User_Comments;