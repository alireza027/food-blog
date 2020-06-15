import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {NavLink,Link} from 'react-router-dom';
class Editor extends React.Component{
    constructor(){
        super();
        this.state = {
            article : ''
        }
    }

    handleChangeEditor = (e,editor)=>{
        this.setState({
            article : editor.getData()
        },()=>console.log(this.state.article));
    }
    // https://www.youtube.com/watch?v=xlX53D9qgm0
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
                                    <h2>Add Post</h2>
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
                                    <li className="breadcrumb-item active" aria-current="page">Add Post</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto my-5">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Title</label>
                            <input type="text" placeholder="Enter Title" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group mb-4">
                            <label>Tag</label>
                        <input type="text" placeholder="Enter Tag (honey,podr,...)" className="form-control" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="custom-file" style={{marginTop:"10px",marginBottom:"35px"}}>
                            <input type="file" className="custom-file-input" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}/>
                            <label className="custom-file-label" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}>Choose Your Index Picture</label>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                    <select class="custom-select" style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00",marginTop:"10px",marginBottom:"35px"}}>
                        <option value="">Select Type</option>
                        <option value="0">Food</option>
                        <option value="1">Cooking</option>
                        <option value="2">Life Style</option>
                    </select>
                    </div>
                    <div className="col-sm-12 col-md-12">
                        <CKEditor editor={ClassicEditor} onChange={this.handleChangeEditor}  style={{border:"1px solid #f00",boxShadow:"0 0 1px 0px #f00"}}
                            config={{
                                ckfinder:{
                                    uploadUrl : 'http://localhost:8000/uploads'
                                }
                            }}/>
                    </div>
                </div>
                <button className="btn mt-4 btn-warning btn-block">Create!!!</button>
            </div>
                
            </>
        )
    }
}
export default Editor;