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
                    <header classNameName="header_area">
                        <div classNameName="">
                            <div classNameName="row no-gutters">
                                <div classNameName="w-100">
                                    <nav classNameName="navbar navbar-expand-lg">
                                        <button classNameName="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i classNameName="fa fa-bars" aria-hidden="true"></i> Menu</button>
                                        {/* <!-- Menu Area Start --> */}
                                        <div classNameName="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                            <ul classNameName="navbar-nav" id="yummy-nav">
                                                <li classNameName="nav-item">
                                                    <NavLink to="/" exact classNameName="nav-link">Home <span classNameName="sr-only">(current)</span></NavLink>
                                                </li>
                                                <li classNameName="nav-item">
                                                    <NavLink to="/archive" exact classNameName="nav-link">Archive</NavLink>
                                                </li>
                                                <li classNameName="nav-item active">
                                                    <NavLink to="/profile" exact classNameName="nav-link">Profile</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div classNameName="breadcumb-area" style={{backgroundImage: "url(/assets/img/bg-img/breadcumb.jpg)"}}>
                        <div classNameName="container h-100">
                            <div classNameName="row h-100 align-items-center">
                                <div classNameName="col-12">
                                    <div classNameName="bradcumb-title text-center">
                                        <h2>User Comments</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div classNameName="breadcumb-nav">
                        <div classNameName="container">
                            <div classNameName="row">
                                <div classNameName="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol classNameName="breadcrumb">
                                        <li classNameName="breadcrumb-item"><Link to="/"><i classNameName="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                                        <li classNameName="breadcrumb-item"><Link to="/profile/alireza27"> Profile</Link></li>
                                        <li classNameName="breadcrumb-item active" aria-current="page">alireza27</li>
                                        <li classNameName="breadcrumb-item active" aria-current="page">comments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* content */}
                <div classNameName="container mx-auto mt-5 mb-1">
                    <div classNameName="row justify-content-between">

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
                                        Go to Post
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div classNameName="col-sm-12 col-md-4 mb-4">
                        <div className="card text-white bg-warning mb-3" style={{width:"100%"}}>
                                <div className="card-header text-center">2020-03-12 12:00 PM</div>
                                <div className="card-body">
                                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content title and make up the bulk of the card's content...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/" classNameName="btn btn-secondary btn-block">
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