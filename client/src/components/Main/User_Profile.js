import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Footer from './Footer.js'
import {SocialGetQuery,UserPostsThunk} from '../../middleware/redux/yummy/yummyThunk';
import '../../assets/styles/profile.css';
class User_Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            id : "",
            isActive : false
        }
    }

    componentDidMount(){
        this.props.getSocial();
        this.props.getPosts();
        this.setState({
            id : this.props.match.params.id,
            isActive : true
        })
    }

    render(){
        const GET_SOCIAL = this.state.isActive && gql(this.props.userSocial);
        const GET_ALL_POST = this.state.isActive && gql(this.props.userPosts);
        return(
            <>
                <header className="header_area">
                <div className="">
                    <div className="row no-gutters text-center">
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
                                        <li className="nav-item">
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
                                <h2>User</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* profile */}
            <div className="container mx-auto">
                <div className="profile-top">
                    <div className="w-100 prof-pic">
                        <div>
                            <img src="/assets/img/about-img/1.jpg" alt="" />
                            <h3>Alireza</h3>
                        </div>
                        <div className="icons subscribe-link">
                            {this.state.isActive && (
                            <Query query={GET_SOCIAL} variables={{id:this.state.id}}>
                                    {({loading,error,data})=>{
                                        if(loading) return (<></>);
                                        if(error) return (<></>);
                                        return(
                                            <>
                                            {data.Social.instagram_address !== "" && (<a href={`https://instagram.com/${data.Social.instagram_address}`} target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>)}
                                            {data.Social.facebook_address !== "" && (<a href={`https://facebook.com/${data.Social.facebook_address}`} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>)}
                                            {data.Social.google_address !== "" && (<a href={`https://gmail.com/${data.Social.google_address}`} target="_blank"><i className="fa fa-google" aria-hidden="true"></i></a>)}
                                            {data.Social.twitter_address !== "" && (<a href={`https://twitter.com/${data.Social.twitter_address}`} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>)}
                                            {data.Social.vimeo_address !== "" && (<a href={`https://vimeo.com/${data.Social.vimeo_address}`} target="_blank"><i className="fa fa-vimeo" aria-hidden="true"></i></a>)}
                                            {data.Social.youtube_address !== "" && (<a href={`https://youtube.com/${data.Social.youtube_address}`} target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a>)}
                                            {data.Social.skype_address !== "" && (<a href={`https://skype.com/${data.Social.skype_address}`} target="_blank"><i className="fa fa-skype" aria-hidden="true"></i></a>)}
                                            </>
                                        )
                                    }}
                            </Query>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* posts */}
            <div className="container mx-auto mt-5 mb-1">
                    {/* archive area start */}
                <section className="archive-area ">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-12 d-flex text-center mx-auto justify-content-between mb-2">
                                <h2 className="ml-2 text-center">Posts</h2>
                            </div>

                            {this.state.isActive && (
                                <Query query={GET_ALL_POST} variables={{userid:this.state.id}}>
                                        {({loading,error,data})=>{
                                            if(loading) return (<></>);
                                            if(error) return (<></>);
                                            return data.Posts.map((post)=>{
                                                return(
                                                    <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                                        {/* change here */}
                                                        <div className="post-thumb" style={{position:"relative"}}>
                                                            <img src="/assets/img/blog-img/2.jpg" alt="" />
                                                        </div>
                                                        <div className="post-content">
                                                            <div className="post-meta d-flex">
                                                                <div className="post-author-date-area d-flex">
                                                                    <div className="post-date">
                                                                        <p style={{color:"#b5aec4",fontSize:"16px"}}>{post.created_post}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="post-comment-share-area d-flex">
                                                                    <div className="post-favourite">
                                                                        <p className="mr-3"><i className="fa fa-heart-o mr-1" aria-hidden="true"></i>{post.comments.length}</p>
                                                                    </div>
                                                                    <div className="post-comments">
                                                                        <p><i className="fa fa-comment-o mr-1" aria-hidden="true"></i>{post.comments.length}</p>
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
                                            })
                                        }}
                                </Query>
                            )}
                        </div>
                    </div>
                </section>
            </div>


            {/* Footer */}
                <Footer/>
            {/* End of Footer */}
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        userSocial : state.userSocial,
        userPosts : state.userPosts
    }
  }

const mapDispatchToProps = dispatch=>({
    getSocial : () => dispatch(SocialGetQuery()),
    getPosts : () => dispatch(UserPostsThunk())
})
export default connect(mapStateToProps,mapDispatchToProps)(User_Profile);