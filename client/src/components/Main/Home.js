import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Home extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <>

      {/* Header */}
        <Header/>
      {/* end of Header */}

    {/* <!-- ****** Categories Area Start ****** --> */}
    <section className="categories_area clearfix" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                        <img src="/assets/img/catagory-img/1.jpg" alt="" /> 
                        <div className="catagory-title">
                            <Link to="/archive/archive-food">
                                <h5>Food</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                        <img src="/assets/img/catagory-img/2.jpg" alt="" />
                        <div className="catagory-title">
                            <Link to="/archive/archive-cooking">
                                <h5>Cooking</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                        <img src="/assets/img/catagory-img/3.jpg" alt="" />
                        <div className="catagory-title">
                            <Link to="/archive/archive-life-style">
                                <h5>Life Style</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ****** Categories Area End ****** --> */}

    {/* <!-- ****** Blog Area Start ****** --> */}
    <section className="blog_area section_padding_0_80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="row">

                        {/* <!-- Single Post --> */}
                        <div className="col-12">
                            <div className="single-post wow fadeInUp" data-wow-delay=".2s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/1.jpg" alt="" />
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
                                        <h2 className="post-headline">Boil The Kettle And Make A Cup Of Tea Folks, This Is Going To Be A Big One!</h2>
                                    </Link>
                                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.</p>
                                    <Link to="/" className="read-more">Continue Reading..</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">
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

                        {/* <!-- Single Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post wow fadeInUp" data-wow-delay=".6s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/3.jpg" alt="" />
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
                                        <h4 className="post-headline">The Top Breakfast And Brunch Spots In Hove, Brighton</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post wow fadeInUp" data-wow-delay=".8s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/4.jpg" alt="" />
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
                                        <h4 className="post-headline">The 10 Best Pubs In The Lake District, Cumbria</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post wow fadeInUp" data-wow-delay="1s">
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
                                        <h4 className="post-headline">The 10 Best Brunch Spots In Newcastle, England</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ******* List Blog Area Start ******* --> */}

                        {/* <!-- Single Post --> */}
                        <div className="col-12">
                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/6.jpg" alt="" />
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
                                        <h4 className="post-headline">The 10 Best Bars By The Seaside In Blackpool, UK</h4>
                                    </Link>
                                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Link to="/" className="read-more">Continue Reading..</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-12">
                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".4s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/7.jpg" alt="" />
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
                                        <h4 className="post-headline">How To Get a Narcissist to Feel Empathy</h4>
                                    </Link>
                                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Link to="/" className="read-more">Continue Reading..</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-12">
                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".6s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/8.jpg" alt="" />
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
                                        <h4 className="post-headline">Bristol's 10 Amazing Weekend Brunches And Late Breakfasts</h4>
                                    </Link>
                                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Link to="/" className="read-more">Continue Reading..</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Post --> */}
                        <div className="col-12">
                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".8s">
                                {/* <!-- Post Thumb --> */}
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/9.jpg" alt="" />
                                </div>
                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            {/* <!-- Post Author --> */}
                                            <div className="post-author">
                                                <Link to="/">By Marian</Link>
                                            </div>
                                            {/* Post Date */}
                                            <div className="post-date">
                                                <Link to="/">May 19, 2017</Link>
                                            </div>
                                        </div>
                                        {/* Post Comment & Share Area */}
                                        <div className="post-comment-share-area d-flex">
                                            {/* Post Favourite */}
                                            <div className="post-favourite">
                                                <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            {/* Post Comments */}
                                            <div className="post-comments">
                                                <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/">
                                        <h4 className="post-headline">10 Of The Best Places To Eat In Liverpool, England</h4>
                                    </Link>
                                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Link to="/" className="read-more">Continue Reading..</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Blog Sidebar */}
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="blog-sidebar mt-5 mt-lg-0">
                        {/* Single Widget Area */}
                        <div className="single-widget-area about-me-widget text-center">
                            <div className="widget-title">
                                <h6>About Me</h6>
                            </div>
                            <div className="about-me-widget-thumb">
                                <img src="/assets/img/about-img/1.jpg" alt="" />
                            </div>
                            <h4 className="font-shadow-into-light">Alireza Hozhabri</h4>
                            <p>My name is Alireza Hozhabri - I'm 19 years old - i'm little programmer - My favorite language Javascript </p>
                        </div>

                        {/* Single Widget Area */}
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

                        {/* Single Widget Area */}
                        <div className="single-widget-area popular-post-widget">
                            <div className="widget-title text-center">
                                <h6>Populer Post</h6>
                            </div>
                            {/* Single Popular Post */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/1.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Top Wineries To Visit In England</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* Single Popular Post */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/2.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>The 8 Best Gastro Pubs In Bath</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* Single Popular Post */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/3.jpg" alt="" />
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Zermatt Unplugged the best festival</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* Single Popular Post */}
                            <div className="single-populer-post d-flex">
                                <img src="/assets/img/sidebar-img/4.jpg" alt="" /> 
                                <div className="post-content">
                                    <Link to="/">
                                        <h6>Harrogate's Top 10 Independent Eats</h6>
                                    </Link>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                            {/* Single Popular Post */}
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

                        {/* Single Widget Area */}
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
    {/* Blog Area End */}

    {/* Footer */}
        <Footer/>
    {/* end of Footer */}
      </>
    )
  }
}
export default Home;