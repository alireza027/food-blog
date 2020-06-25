import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {PostSingleQuery} from '../../middleware/redux/yummy/yummyThunk'
import ReactHtmlParser from 'react-html-parser'
import Header from './Header';
import Footer from './Footer';
class Single extends React.Component{
  constructor(){
    super();
    this.state = {
        id : "",
        isActive : false
    }
  }

  componentDidMount(){
      this.props.getPost();
      this.setState({
          id : this.props.match.params.id,
          isActive : true
      })
  }

  render(){ 
      const POPULATE_POST = gql(this.props.populatePost);
      const POST_SINGLE = this.state.isActive && gql(this.props.postSingle);
    return(
      <>
        {/* start header */}
          <Header/>
        {/* end of header */}

    {this.state.isActive && (
            <Query query={POST_SINGLE} variables={{id:this.state.id}}>
                {({loading,error,data})=>{
                    if(loading) return(<></>);
                    if(error) return (<></>);
                    console.log(data);
                }}
            </Query>
    )}
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
        


          
                <section className="single_blog_area section_padding_80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="row no-gutters">

                        <div className="col-10 col-sm-12">
                            <div className="single-post">
                                <div className="post-thumb">
                                    <img src="/assets/img/blog-img/10.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                            <div className="post-author">
                                                <Link to="/">By Marian</Link>
                                            </div>
                                            <div className="post-date">
                                                <p style={{color:"#b5aec4",fontSize:"16px"}}>May 19, 2017</p>
                                            </div>
                                        </div>
                                        <div className="post-comment-share-area d-flex">
                                            <div className="post-favourite">
                                                <Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</Link>
                                            </div>
                                            <div className="post-comments">
                                                <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</Link>
                                            </div>
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

                            <div className="tags-area d-flex">
                                <p style={{padding:"5px 8px ",background:"#e67e22",color:"#fff"}}>Multipurpose</p>
                                <p style={{padding:"5px 8px ",background:"#e67e22",color:"#fff",borderLeft:"1px solid #fff"}}>Design</p>
                                <p style={{padding:"5px 8px ",background:"#e67e22",color:"#fff",borderLeft:"1px solid #fff"}}>Ideas</p>
                            </div>


                            <div className="comment_area section_padding_50 clearfix">
                                <h4 className="mb-30">2 Comments</h4>
                                <ol>
                                    <li className="single_comment_area">
                                        <div className="comment-wrapper d-flex">
                                            <div className="comment-author">
                                                <img src="/assets/img/blog-img/19.jpg" alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <span className="comment-date text-muted">27 Aug 2018</span>
                                                <h5>Brandon Kelley</h5>
                                                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="blog-sidebar mt-5 mt-lg-0">
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

                        <div className="single-widget-area popular-post-widget">
                            <div className="widget-title text-center">
                                <h6>Populer Post</h6>
                            </div>
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

                        <div className="single-widget-area add-widget text-center">
                            <div className="add-widget-area">
                                <img src="/assets/img/sidebar-img/6.jpg" alt="" />
                                <div className="add-text">
                                    <div className="yummy-table">
                                        <div className="yummy-table-cell">
                                            <h2>Cooking Book</h2>
                                            <p>Download Cooking Book</p>
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

        {/* start footer */}
          <Footer/>
        {/* end of footer */}
      </>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        populatePost : state.populatePost,
        postSingle : state.postSingle
    }
}

const mapDispatchToProps = dispatch=>({
    getPost : () => dispatch(PostSingleQuery())
})
export default connect(mapStateToProps,mapDispatchToProps)(Single);