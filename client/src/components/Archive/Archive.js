import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Main/Header';
import Footer from '../Main/Footer';
class Archive extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <>
      {/* start header */}
        <Header/>
      {/* end of header */}


      {/* <!-- ****** Breadcumb Area Start ****** --> */}
        <div className="breadcumb-area" style={{backgroundImage: "url(/assets/img/bg-img/breadcumb.jpg)"}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="bradcumb-title text-center">
                            <h2>Archive Page</h2>
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
                              <li className="breadcrumb-item active" aria-current="page">Archive Page</li>
                          </ol>
                      </nav>
                  </div>
              </div>
            </div>
        </div>


        {/* archive area start */}
        <section className="archive-area section_padding_80">
            <div className="container">
              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-between mb-2">
                    <h4 className="ml-2">Food</h4>
                    <h5><Link to="/" style={{color:"#f00"}}>More...</Link></h5>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
              <div className="row mb-4 mt-5">
                <div className="col-12 d-flex justify-content-between mb-2">
                    <h4 className="ml-2">Coocking</h4>
                    <h5><Link to="/" style={{color:"#f00"}}>More...</Link></h5>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
              <div className="row mb-4 mt-5">
                <div className="col-12 d-flex justify-content-between mb-2">
                    <h4 className="ml-2">LifeStyle</h4>
                    <h5><Link to="/" style={{color:"#f00"}}>More...</Link></h5>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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
                                    {/* <!-- Post Share --> */}
                                    <div className="post-share">
                                    <Link to="/"><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
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

        {/* start Footer */}
          <Footer/>
        {/* end of Footer */}
      </>
    )
  }
}
export default Archive;