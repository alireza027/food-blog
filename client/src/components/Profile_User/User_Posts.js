import React from 'react';
import {NavLink,Link} from 'react-router-dom';
class User_Posts extends React.Component{
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
                                    <h2>User Posts</h2>
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
                                    <li className="breadcrumb-item active" aria-current="page">Posts</li>
                                </ol>
                            </nav>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto mt-5 mb-1">
                    {/* archive area start */}
                <section className="archive-area ">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-12 d-flex justify-content-between mb-2">
                                <h4 className="ml-2">Food</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                            <hr></hr>
                        <div className="row mb-4">
                            <div className="col-12 d-flex justify-content-between mb-2">
                                    <h4 className="ml-2">Cooking</h4>
                                </div>
                            
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                            <hr></hr>
                        <div className="row mb-4">
                            <div className="col-12 d-flex justify-content-between mb-2">
                                    <h4 className="ml-2">Life Style</h4>
                                </div>
                            
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/2.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                            <Link to="/">By Marian</Link>
                                            </div>
                                            {/* <!-- Post Date --> */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* <!-- Post Comment & Share Area --> */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* <!-- Post Favourite --> */}
                                            <div className="post-favourite">
                                            <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* <!-- Post Comments --> */}
                                            <div className="post-comments">
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </section>
                {/* end of archive area end */}
                </div>
            </>
        )
    }
}
export default User_Posts;