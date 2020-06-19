const jwt = require('jsonwebtoken');
const moment = require('moment');
const Users = require('../models/Users');
const Posts = require('../models/Posts');
const Likes = require('../models/Likes');
const Comments = require('../models/Comments');
const Social = require('../models/Social');
module.exports.root = {
    // Users Model
    Login : (args)=>{
        return Users.findOne({username :args.username , password : args.password }).populate('social').populate('comments').populate('likes').populate('posts').then(result=>{
            if(result == null){
                return {
                    code : "400",
                    message : "Your email or password is incorrect",
                    result
                };
            } else {
                var token = jwt.sign({id:result._id},process.env.SECRET_KEY,{expiresIn : "15 days"})
                result.token = token;
                result.code = "200";
                result.message = "Success User"
                return result;
            }
        })
        return Users.findOne({username:args.username,password:args.password}).populate('social').populate('comments').populate('likes').populate('posts').then(result=>{
            var token = jwt.sign({id:result._id},process.env.SECRET_KEY,{expiresIn : "15 days"})
            result.token = token;
            return result;
        }).catch(err=>{
            return err;
        })
    },
    Register : (args)=>{
            return Users.findOne({username : args.username}).then(resultUsername=>{
                if(resultUsername != null){
                    return {
                        code : "400",
                        message : "This username has already been used"
                    };
                } else {
                    return Users.findOne({email : args.email}).then(resultEmail=>{
                        if(resultEmail != null){
                            return {
                                code : "400",
                                message : "This email has already been used"
                            }
                        } else {
                            if(args.password.length < 8){
                                return {
                                    code : "400",
                                    message : "Your password must be at least 8 characters long"
                                }
                            }else {
                                var users = new Users({
                                    name : args.name,
                                    username : args.username,
                                    email : args.email,
                                    password : args.password,
                                    profile_pic : args.profile_pic == null ? "" : args.profile_pic
                                })
                                return users.save().then(user=>{
                                    return {
                                        code : "201",
                                        message : "User Created"
                                    }
                                }) 
                            }
                        }
                    })
                }
            }) 
        
    },
    UserUpdate : (args)=>{
        return Users.findById(args.id).then((resultFind)=>{
            return Users.findByIdAndUpdate(args.id,{
                name : args.name == null ? resultFind.name : args.name,
                username : args.username == null ? resultFind.username : args.username,
                email : args.email == null ? resultFind.email : args.email,
                password : args.password == null ? resultFind.password : args.password,
                profile_pic : args.profile_pic == null ? resultFind.profile_pic : args.profile_pic,
                updated_user : moment().format("MMM DD,YYYY"),
            }).then((resultUpdate)=>{
                return resultUpdate;
            }).catch(err=>{
                return err;
            })   
        })
    },
    UserDelete : (args)=>{
        return Users.findByIdAndRemove(args.id).then((resultUserRemove)=>{
            return Posts.deleteMany({user:args.id}).then((resultPostRemove)=>{
                return Likes.deleteMany({user:args.id}).then((userLikeRemove)=>{
                    return Comments.deleteMany({user:args.id}).then((userCommentRemove)=>{
                        return Social.deleteMany({user:args.id}).then((userSocialRemove)=>{
                            return resultUserRemove;
                        })
                    })
                })
            })
        }).catch(err=>{
            return err;
        })
    },

    // Posts model
    Posts : (args)=>{
        return Posts.find({user:args.userid}).populate('likes').populate('comments').then((resultPosts)=>{
            return resultPosts;            
        }).catch(err=>{
            return err;
        })
        // return Posts.find({ user : mongoose.Types.ObjectId(args.userid) }).then((resultPosts)=>{
        //     return resultPosts
        // }).catch(err=>{
        //     return err;
        // })
    },
    Post : (args)=>{
        return Posts.findById(args.id).populate('user').populate('likes').populate("comments").then((resultPost)=>{
            return resultPost;
        }).catch(err=>{
            return err;
        })
    },
    PostAdd : (args)=>{
        var post = new Posts({
            title : args.title,
            content : args.content,
            index_image : args.index_image,
            tags : args.tags == null ? "" : args.tags,
            type : args.type,
            user : args.user
        })
        return post.save().then((resultPostAdd)=>{
            return Users.findByIdAndUpdate(resultPostAdd.user,{
                $push : { posts : resultPostAdd._id }
            }).then((resultUser)=>{
                return resultPostAdd;
            })
        }).catch(err=>{
            return err;
        })
    },
    PostUpdate : (args)=>{
        return Posts.findByIdAndUpdate(args.id).then((resultpost)=>{
            console.log(resultpost);
            return  Posts.findByIdAndUpdate(args.id,{
                title : args.title == null ? resultpost.title : args.title,
                content : args.content == null ? resultpost.content : args.content,
                index_image : args.index_image == null ? resultpost.index_image : args.index_image,
                tags : args.tags == null ? resultpost.tags : args.tags ,
                type : args.type == null ? resultpost.type : args.type ,
                updated_post : moment().format("MMM DD,YYYY")
            }).then((resultPostUpdate)=>{
                return resultpost;
            })
        })
    },
    PostDelete : (args)=>{
        return Posts.findByIdAndDelete(args.id).then((resultPostRemove)=>{
            return Users.findOneAndUpdate(resultPostRemove.user,{$pull : {posts : {$in : [args.id]}}}).then(resultUser=>{
                return Likes.deleteMany({post:args.id}).then((userLikeRemove)=>{
                    return Comments.deleteMany({post:args.id}).then((userCommentRemove)=>{
                        return resultPostRemove;
                    })
                })  
            })
        }).catch(err=>{
            return err;
        })
    },

    // Social Model
    Social : (args)=>{
        return Social.findById(args.id).then(socialResult=>{
            return socialResult;
        }).catch(err=>{
            return err;
        })
    },
    SocialAdd : (args)=>{
        return Users.findOne({social:args.user}).then(resultUsers=>{
            if(resultUsers != null){
                var social = new Social({
                    user : args.user,
                    instagram_address : args.instagram_address == null ? "" : args.instagram_address,
                    facebook_address : args.facebook_address == null ? "" : args.facebook_address,
                    google_address : args.google_address == null ? "" : args.google_address,
                    linkedin_address : args.linkedin_address == null ? "" : args.linkedin_address,
                    twitter_address : args.twitter_address == null ? "" : args.twitter_address,
                    skype_address : args.skype_address == null ? "" : args.skype_address,
                    youtube_address : args.youtube_address == null ? "" : args.youtube_address,
                    vimeo_address : args.vimeo_address == null ? "" : args.vimeo_address
                })
                return social.save().then(resultSocialAdd=>{
                    return Users.findByIdAndUpdate(resultSocialAdd.user,{
                        social : resultSocialAdd._id
                    }).then(updateSocial=>{
                        return {
                            code : "201",
                            message : "Create Social"
                        }
                    })
                })
            } else {
                return {
                    code : "400",
                    message : "This user has a social network",
                }
            }
        })
    },
    SocialUpdate : (args)=>{
        return Social.findById(args.user).then(resultSocial=>{
            return Social.findByIdAndUpdate(args.user,{
                instagram_address : args.instagram_address == null ? resultSocial.instagram_address : args.instagram_address,
                facebook_address : args.facebook_address == null ?  resultSocial.facebook_address : args.facebook_address,
                google_address : args.google_address == null ? resultSocial.google_address : args.google_address,
                linkedin_address : args.linkedin_address == null ?  resultSocial.linkedin_address : args.linkedin_address ,
                twitter_address : args.twitter_address == null ? resultSocial.twitter_address : args.twitter_address ,
                skype_address : args.skype_address == null ? resultSocial.skype_address : args.skype_address,
                youtube_address : args.youtube_address == null ? resultSocial.youtube_address : args.youtube_address,
                vimeo_address : args.vimeo_address == null ? resultSocial.vimeo_address : args.vimeo_address,
                updated_social : moment().format("MMM DD,YYYY"),
            })
        })
    },
    SocialDelete : (args)=>{
        return Social.findByIdAndDelete(args.id).then((resultSocial)=>{
            console.log(resultSocial);
            return Users.updateOne({social : args.id},{
                $unset : { social : "" }
            }).then(resultUser=>{
                return resultSocial
            })
        }).catch(err=>{
            return err;
        })
    },

    // Like Model
    Likes : (args)=>{
        return Likes.find({user : args.id}).populate('user').then((resultLikes)=>{
            console.log(resultLikes)
            return resultLikes;
        }).catch(err=>{
            return err;
        })
    },
    LikeAdd : (args)=>{
        return Likes.find({ user : args.user , like : args.post }).then(resultLikesGet=>{
            if(resultLikesGet == null){
                var like = new Likes({
                    user : args.user ,
                    like : args.post ,
                })
                return like.save().then((resultLike)=>{
                    return Users.findByIdAndUpdate(args.user,{$push : {likes:resultLike._id}}).then(resultUser=>{
                        return Posts.findByIdAndUpdate(args.post,{$push : {likes:resultLike._id}}).then((resultPost)=>{
                            return {
                                code : "201",
                                message : "Liked post"
                            };
                        })
                    })
                })
            } else {
                return {
                    code : "400",
                    message : "You liked this post"
                };
            }
        })
        // Users.findByIdAndUpdate('5eeb921e5c27d861fc71330e',{$push : {likes:result._id}
        //     }).then(()=>{
        //         Posts.findByIdAndUpdate('5eebabec5d32308833a69e84',{
        //             $push : {likes:result._id}
        //         }).then(()=>{res.status(200).json(result)});
        //     });
    },
    LikeDelete : (args)=>{
        return Likes.findById(args.id).then(resultLikeGet=>{
            return Likes.findByIdAndDelete(args.id).then((resultLike)=>{
                return Users.findByIdAndUpdate(resultLikeGet.user,{$pull : {likes : {$in : [args.id]}}}).then((resultUser)=>{
                    return Posts.findByIdAndUpdate(resultLikeGet.post,{$pull : {likes : {$in : [args.id]}}}).then((resultPost)=>{
                        return resultLikeGet
                    })
                })
            })
        })
    },

    // Comment Model
    Comments : (args)=>{
        return Comments.findById(args.id).populate('user').then((resultComment)=>{
            return resultComment;
        }).catch(err=>{
            return err;
        })
    },
    CommentAdd : (args)=>{
        var comment = new Comments({
            user : args.user,
            post : args.post,
            comment_text : args.comment_text
        })

        return comment.save().then((resultComment)=>{
           return Users.findByIdAndUpdate(args.user,{$push : {comments:resultComment._id}}).then(()=>{
                return Posts.findByIdAndUpdate(args.post,{$push : {comments:resultComment._id}}).then((resultPost)=>{
                    return resultComment;
                });
            });
        })
    },
    CommentUpdate : (args)=>{
        return Comments.findByIdAndUpdate(args.id,{
            comment_text : args.comment_text
        }).then((resultComment)=>{
            return resultComment;
        }).catch(err=>{
            return err;
        })
    },
    CommentDelete : (args)=>{
        return Comments.findById(args.id).then(resultCommentGet=>{
            return Comments.findByIdAndDelete(args.id).then((resultLike)=>{
                return Users.findByIdAndUpdate(resultCommentGet.user,{$pull : {comments : {$in : [args.id]}}}).then((resultUser)=>{
                    return Posts.findByIdAndUpdate(resultCommentGet.post,{$pull : {comments : {$in : [args.id]}}}).then((resultPost)=>{
                        return resultCommentGet
                    })
                })
            })
        })
    }
}