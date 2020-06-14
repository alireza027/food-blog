import React from 'react';
import {Link} from 'react-router-dom';
class Page_404 extends React.Component{
    render(){
        return(
            <>
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