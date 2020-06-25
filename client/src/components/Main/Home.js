import React from 'react';
import { connect } from "react-redux";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      posts : [],
    }
  }

  render(){
    const POST_ALL = gql(this.props.posts);
    const POPULATE_POST = gql(this.props.populatePost);
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


        <section className="blog_area section_padding_0_80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="row">
                          <Query query={POST_ALL}>
                            {({loading,error,data})=>{
                                if(loading) return (<></>);
                                if(error) return (<></>);
                                return data.AllPost.map((post,index)=>{
                                  if(index == 0){
                                    return(
                                      <div className="col-12" key={index}>
                                          <div className="single-post wow fadeInUp" data-wow-delay=".2s">
                                              <div className="post-thumb">
                                                {/* here post.index_image */}
                                                  <img src="/assets/img/blog-img/1.jpg" alt="" />
                                              </div>
                                              <div className="post-content">
                                                  <div className="post-meta d-flex">
                                                      <div className="post-author-date-area d-flex">
                                                          <div className="post-author">
                                                              <Link to={`/user/${post.user.id}`}>{post.user.username}</Link>
                                                          </div>
                                                          <div className="post-date">
                                                              <p style={{color:"#b5aec4",fontSize:"16px"}}>{post.created_post}</p>
                                                          </div>
                                                      </div>
                                                      <div className="post-comment-share-area d-flex">
                                                          <div className="post-favourite">
                                                              <p className="mr-3"><i className="fa fa-heart-o" aria-hidden="true"></i> {post.likes.length}</p>
                                                          </div>
                                                          <div className="post-comments">
                                                              <p><i className="fa fa-comment-o" aria-hidden="true"></i> {post.comments.length}</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <Link to={`/post/${post.id}`}>
                                                      <h2 className="post-headline">{post.title}</h2>
                                                  </Link>
                                                  <p>{ReactHtmlParser(post.content)}</p>
                                                  <Link to={`/post/${post.id}`} className="read-more">Continue Reading..</Link>
                                              </div>
                                          </div>
                                      </div>
                                    )
                                  } else if(index > 0 && index <= 4){
                                    return (
                                      <div className="col-12 col-md-6" key={index}>
                                        <div className="single-post wow fadeInUp" data-wow-delay=".4s">
                                          <div className="post-thumb">
                                              {/* here must be change */}
                                              <img src="/assets/img/blog-img/2.jpg" alt="" />
                                          </div>
                                          <div className="post-content">
                                              <div className="post-meta d-flex">
                                                  <div className="post-author-date-area d-flex">
                                                      <div className="post-author">
                                                          <Link to={`/user/${post.user.id}`}>{post.user.username}</Link>
                                                      </div>
                                                      <div className="post-date">
                                                          <p style={{color:"#b5aec4",fontSize:"16px"}}>{post.created_post}</p>
                                                      </div>
                                                  </div>
                                                  {/* <!-- Post Comment & Share Area --> */}
                                                  <div className="post-comment-share-area d-flex">
                                                      {/* <!-- Post Favourite --> */}
                                                      <div className="post-favourite">
                                                          <p className="mr-3"><i className="fa fa-heart-o" aria-hidden="true"></i> {post.likes.length}</p>
                                                      </div>
                                                      {/* <!-- Post Comments --> */}
                                                      <div className="post-comments">
                                                          <p><i className="fa fa-comment-o" aria-hidden="true"></i> {post.comments.length}</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <Link to={`/post/${post.id}`}>
                                                  <h4 className="post-headline">{post.title}</h4>
                                              </Link>
                                          </div>
                                      </div>
                                    </div>
                                    )
                                  }else if(index > 4 && index <= 8){
                                    return(
                                      <div className="col-12" key={index}>
                                        <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                                            <div className="post-thumb">
                                                <img src="/assets/img/blog-img/6.jpg" alt="" />
                                            </div>
                                            {/* <!-- Post Content --> */}
                                            <div className="post-content">
                                                <div className="post-meta d-flex">
                                                    <div className="post-author-date-area d-flex">
                                                        <div className="post-author">
                                                          <Link to={`/user/${post.user.id}`}>{post.user.username}</Link>
                                                        </div>
                                                        <div className="post-date">
                                                          <p style={{color:"#b5aec4",fontSize:"16px"}}>{post.created_post}</p>
                                                        </div>
                                                    </div>
                                                    <div className="post-comment-share-area d-flex">
                                                        <div className="post-favourite">
                                                            <p className="mr-3"><i className="fa fa-heart-o" aria-hidden="true"></i> {post.likes.length}</p>
                                                        </div>
                                                        {/* <!-- Post Comments --> */}
                                                        <div className="post-comments">
                                                            <p><i className="fa fa-comment-o" aria-hidden="true"></i> {post.comments.length}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to="/">
                                                    <h4 className="post-headline">{post.title}</h4>
                                                </Link>
                                                <p>{ReactHtmlParser(post.content)}</p>
                                                <Link to={`/post/${post.id}`} className="read-more">Continue Reading..</Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                  }
                                })
                            }}
                          </Query>
                        </div>
                    </div>

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
                                    <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="http://gmail.com" target="_blank"><i className="fa fa-google" aria-hidden="true"></i></a>
                                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="https://vimeo.com/" target="_blank"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            {/* Single Widget Area */}
                            <div className="single-widget-area popular-post-widget">
                                <div className="widget-title text-center">
                                    <h6>Populer Post</h6>
                                </div>
                                {/* Single Popular Post */}
                                <Query query={POPULATE_POST}>
                                  {({loading,error,data})=>{
                                    if(loading) return (<></>);
                                    if(error) return (<></>);
                                    return data.PopulatePost.map((post,index)=>{
                                     return (
                                      <div className="single-populer-post d-flex" key={index}>
                                      {/* change here */}
                                      <img src="/assets/img/sidebar-img/1.jpg" alt="" />
                                      <div className="post-content">
                                          <Link to={`/post/${post.id}`}>
                                              <h6>{post.title}</h6>
                                          </Link>
                                          <p>{post.created_post}</p>
                                      </div>
                                    </div>
                                     ) 
                                    })
                                  }}
                                </Query>
                                </div>

                            {/* Single Widget Area */}
                            <div className="single-widget-area add-widget text-center">
                                <div className="add-widget-area">
                                    <img src="/assets/img/sidebar-img/6.jpg" alt="" />
                                    <div className="add-text">
                                        <div className="yummy-table">
                                            <div className="yummy-table-cell">
                                                <h2>Cooking Book</h2>
                                                <p>Download Cooking Book!</p>
                                                <a href="https://www.safefood.eu/SafeFood/media/SafeFoodLibrary/Documents/Healthy%20Eating/101_Square_Meals.pdf" target="_blank" className="add-btn">Download Now</a>
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

        {/* Footer */}
            <Footer/>
        {/* end of Footer */}
      </> 
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    posts : state.posts,
    populatePost : state.populatePost
  }
}
export default connect(mapStateToProps)(Home);