import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Single extends React.Component{
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
          <div className="breadcumb-area" style={{backgroundImage:"url(/assets/img/bg-img/breadcumb.jpg)"}}>
              <div className="container h-100">
                  <div className="row h-100 align-items-center">
                      <div className="col-12">
                          <div className="bradcumb-title text-center">
                              <h2>Single Post Blog</h2>
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
                                  <li className="breadcrumb-item"><Link to="/">Archive</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">Single Post Blog</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- ****** Breadcumb Area End ****** --> */}



          {/* <!-- ****** Single Blog Area Start ****** --> */}
    <section className="single_blog_area section_padding_80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="row no-gutters">

                        {/* <!-- Single Post Share Info --> */}
                        <div className="col-2 col-sm-1">
                            <div className="single-post-share-info mt-100">
                                <Link to="/" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/" className="googleplus"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                <Link to="/" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                <Link to="/" className="pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-10 col-sm-11">
                            <div className="single-post">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/10.jpg" alt="" />
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
                                        <h2 className="post-headline">Boil The Kettle And Make A Cup Of Tea Folks, This Is Going To Be A Big One!</h2>
                                    </Link>
                                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                    <blockquote className="yummy-blockquote mt-30 mb-30">
                                        <h5 className="mb-30">“Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.”</h5>
                                        <h6 className="text-muted">Steven Jobs</h6>
                                    </blockquote>

                                    <h4>You Can Buy For Less Than A College Degree</h4>
                                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                                    <img className="br-30 mb-30" src="/assets/img/blog-img/11.jpg" alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                    <img className="br-30 mb-30" src="/assets/img/blog-img/12.jpg" alt="" />
                                    <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <img className="br-30 mb-30" src="/assets/img/blog-img/13.jpg" alt="" />
                                    <h4>You Can Buy For Less Than A College Degree</h4>
                                    <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                    <ul className="mb-30">
                                        <li>1/3 cup Lonsectetur adipisicing elit.Lorem ipsum</li>
                                        <li>1/2 cup Veniam, quis nostrud exercitation</li>
                                        <li>Ut labore et dolore magna</li>
                                        <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                                        <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                                        <li>Ut labore et dolore magna</li>
                                        <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                                    </ul>

                                    <img className="br-30 mb-15" src="/assets/img/blog-img/14.jpg" alt="" />
                                </div>
                            </div>

                            {/* <!-- Tags Area --> */}
                            <div className="tags-area">
                                <Link to="/">Multipurpose</Link>
                                <Link to="/">Design</Link>
                                <Link to="/">Ideas</Link>
                            </div>

                            {/* <!-- Related Post Area --> */}
                            <div className="related-post-area section_padding_50">
                                <h4 className="mb-30">Related post</h4>

                                <div className="related-post-slider owl-carousel">
                                    {/* <!-- Single Related Post--> */}
                                    <div className="single-post">
                                        {/* <!-- Post Thumb --> */}
                                        <div className="post-thumb">
                                            <img src="/assets/img/blog-img/15.jpg" alt="" />
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
                                            </div>
                                            <Link to="/">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <!-- Single Related Post--> */}
                                    <div className="single-post">
                                        {/* <!-- Post Thumb --> */}
                                        <div className="post-thumb">
                                            <img src="/assets/img/blog-img/5.jpg" alt="" />
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
                                            </div>
                                            <Link to="/">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <!-- Single Related Post--> */}
                                    <div className="single-post">
                                        {/* <!-- Post Thumb --> */}
                                        <div className="post-thumb">
                                            <img src="/assets/img/blog-img/16.jpg" alt="" />
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
                                            </div>
                                            <Link to="/">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <!-- Single Related Post--> */}
                                    <div className="single-post">
                                        {/* <!-- Post Thumb --> */}
                                        <div className="post-thumb">
                                            <img src="/assets/img/blog-img/5.jpg" alt="" />
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
                                            </div>
                                            <Link to="/">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Comment Area Start --> */}
                            <div className="comment_area section_padding_50 clearfix">
                                <h4 className="mb-30">2 Comments</h4>
                                <ol>
                                    {/* <!-- Single Comment Area --> */}
                                    <li className="single_comment_area">
                                        <div className="comment-wrapper d-flex">
                                            {/* <!-- Comment Meta --> */}
                                            <div className="comment-author">
                                                <img src="/assets/img/blog-img/17.jpg" alt="" />
                                            </div>
                                            {/* <!-- Comment Content --> */}
                                            <div className="comment-content">
                                                <span className="comment-date text-muted">27 Aug 2018</span>
                                                <h5>Brandon Kelley</h5>
                                                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                <Link to="/">Like</Link>
                                                <Link to="/" className="active">Reply</Link>
                                            </div>
                                        </div>
                                        <ol className="children">
                                            <li className="single_comment_area">
                                                <div className="comment-wrapper d-flex">
                                                    {/* <!-- Comment Meta --> */}
                                                    <div className="comment-author">
                                                        <img src="/assets/img/blog-img/18.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Comment Content --> */}
                                                    <div className="comment-content">
                                                        <span className="comment-date text-muted">27 Aug 2018</span>
                                                        <h5>Brandon Kelley</h5>
                                                        <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                        <Link to="/">Like</Link>
                                                        <Link to="/" className="active">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="single_comment_area">
                                        <div className="comment-wrapper d-flex">
                                            {/* <!-- Comment Meta --> */}
                                            <div className="comment-author">
                                                <img src="/assets/img/blog-img/19.jpg" alt="" />
                                            </div>
                                            {/* <!-- Comment Content --> */}
                                            <div className="comment-content">
                                                <span className="comment-date text-muted">27 Aug 2018</span>
                                                <h5>Brandon Kelley</h5>
                                                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                <Link to="/">Like</Link>
                                                <Link to="/" className="active">Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ****** Blog Sidebar ****** --> */}
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="blog-sidebar mt-5 mt-lg-0">
                        {/* <!-- Single Widget Area --> */}
                        <div className="single-widget-area about-me-widget text-center">
                            <div className="widget-title">
                                <h6>About Me</h6>
                            </div>
                            <div className="about-me-widget-thumb">
                                <img src="/assets/img/about-img/1.jpg" alt="" />
                            </div>
                            <h4 className="font-shadow-into-light">Alireza Hozhabri</h4>
                            <p>My name is Alireza Hozhabri - I'm 19 years old - i'm little programmer - My favorite language Javascript</p>
                        </div>

                        {/* <!-- Single Widget Area --> */}
                        <div className="single-widget-area subscribe_widget text-center">
                            <div className="widget-title">
                                <h6>Subscribe &amp; Follow</h6>
                            </div>
                            <div className="subscribe-link">
                                <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-google" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                <Link to="/"><i className="fa fa-vimeo" aria-hidden="true"></i></Link>
                            </div>
                        </div>

                        {/* <!-- Single Widget Area --> */}
                        <div className="single-widget-area popular-post-widget">
                            <div className="widget-title text-center">
                                <h6>Populer Post</h6>
                            </div>
                            {/* <!-- Single Popular Post --> */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/1.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Top Wineries To Visit In England</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* <!-- Single Popular Post --> */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/2.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>The 8 Best Gastro Pubs In Bath</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* <!-- Single Popular Post --> */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/3.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Zermatt Unplugged the best festival</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* <!-- Single Popular Post --> */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/4.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Harrogate's Top 10 Independent Eats</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* <!-- Single Popular Post --> */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/5.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Eating Out On A Budget In Oxford</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Widget Area --> */}
                        <div className="single-widget-area add-widget text-center">
                            <div className="add-widget-area">
                                <img src="/assets/img/sidebar-img/6.jpg" alt="" />
                                <div className="add-text">
                                    <div className="yummy-table">
                                        <div className="yummy-table-cell">
                                            <h2>Cooking Book</h2>
                                            <p>Buy Book Online Now!</p>
                                            <Link to="/" className="add-btn">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
    {/* <!-- ****** Single Blog Area End ****** --> */}

        {/* start footer */}
          <Footer/>
        {/* end of footer */}
      </>
    )
  }
}
export default Single;