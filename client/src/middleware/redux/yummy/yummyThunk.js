import {
    userLogin,
    userRegister,
    userUpdate,
    userDelete,
    postAll,
    postSingle,
    postAdd,
    postUpdate,
    postDelete,
    socialGet,
    socialAdd,
    socialUpdate,
    socialDelete,
    likeGetAll,
    likeAdd,
    likeDelete,
    commentGetAll,
    commentAdd,
    commentUpdate,
    commentDelete,
    postPaginate,
    searchPost,
    searchUser,
    allOfPost,
    postType,
    populatePost,
    userToken
} from './actions';

// query
export const AllPostThunk = ()=>{
    return function (dispatch){
        const Query =`
            query AllPostQuery{
                    AllPost{
                    id
                    title
                    content
                    index_image
                    created_post
                    type
                    user{
                        id
                        username
                    }
                }
            }`;
        dispatch(allOfPost(Query));
    }
}

export const LoginThunk = ()=>{
    return function (dispatch){
        const Query =`
            query LoginQuery($username:String!,$password:String!){
                    Login(username:$username,password:$password){
                    id
                    name
                    username
                    email
                    password
                    profile_pic
                    created_user
                    token
                    code
                    message
                }
            }`;
        dispatch(userLogin(Query));
    }
}

export const UserPostsThunk = ()=>{
    return function (dispatch){
        const Query =`
            query UserPostsQuery($userid:String!){
                    Posts(userid:$userid){
                    id
                    title
                    content
                    index_image
                    created_post
                    tags
                    type
                }
            }`;
        dispatch(postAll(Query));
    }
}

export const UserPostsThunk = ()=>{
    return function (dispatch){
        const Query =`
            query UserPostsQuery($userid:String!){
                    Posts(userid:$userid){
                    id
                    title
                    content
                    index_image
                    created_post
                    tags
                    type
                }
            }`;
        dispatch(postAll(Query));
    }
}

export const PostSingleQuery = ()=>{
    return function (dispatch){
        const Query =`
            query PostQuery($id:String!){
                Post(id:$id){
                id
                title
                content
                index_image
                created_post
                tags
                type
                user{
                    id
                    username
                    profile_pic
                }
                likes{
                        id
                        created_like
                        user{
                        id
                        username
                        profile_pic
                    }
                }
                comments{
                    id
                    comment_text
                    created_comment
                    user{
                        id
                        username
                        profile_pic
                    }
                }
                }
            }`;
        dispatch(postSingle(Query));
    }
}

export const PostTypeQuery = ()=>{
    return function (dispatch){
        const Query =`
        query PostTypeQuery($type:String!){
            PostType(type:$type){
                id
                title
                content
                index_image
                created_post
                type
                tags
                created_post
                user{
                    id
                    username
                }
            }
          }`;
        dispatch(postType(Query));
    }
}

export const PostPaginateQuery = ()=>{
    return function (dispatch){
        const Query =`
            query PostPaginateQuery($page:Int!){
                    PostPaginate(page:$page){
                    id
                    title
                    content
                    index_image
                    created_post
                    type
                    user{
                        id
                        username
                    }
                }
            }`;
        dispatch(postPaginate(Query));
    }
}

export const SocialGetQuery = ()=>{
    return function (dispatch){
        const Query =`
            query SocialGetQuery($id:String!){
                Social(id:$id){
                    id
                    instagram_address
                    facebook_address
                    google_address
                    linkedin_address
                    twitter_address
                    skype_address
                    youtube_address
                    vimeo_address
                    created_social
                    user{
                        id
                        username
                    }
                }
            }`;
        dispatch(socialGet(Query));
    }
}

export const LikesGetQuery = ()=>{
    return function (dispatch){
        const Query =`
            query LikesGetQuery($id:String!){
                Likes(id:$id){
                    id
                    created_like
                    user{
                        id
                        username
                    }
                    post{
                        id
                    }
                }
            }`;
        dispatch(likeGetAll(Query));
    }
}

export const CommentGetQuery = ()=>{
    return function (dispatch){
        const Query =`
            query CommentsGetQuery($id:String!){
                Comments(id:$id){
                    id
                    user{
                        id
                        username
                    }
                    post{
                        id
                    }
                    comment_text
                    created_comment
                    }
          }`;
        dispatch(commentGetAll(Query));
    }
}

export const SearchUserQuery = ()=>{
    return function (dispatch){
        const Query =`
            query SearchUserQuery($username:String!){
                SearchUser(username:$username){
                    id
                    name
                    username
                    email
                    profile_pic
                }
            }`;
        dispatch(searchUser(Query));
    }
}

export const SearchPostQuery = ()=>{
    return function (dispatch){
        const Query =`
            query SearchPostQuery($text:String!){
                SearchPost(text:$text){
                    id
                    title
                    content
                    index_image
                    created_post
                    type
                    user{
                        id
                        username
                    }
                }
            }`;
        dispatch(searchPost(Query));
    }
}

export const PopulatePostQuery = ()=>{
    return function (dispatch){
        const Query =`
            query PopulatePostQuery{
                    PopulatePost{
                    id
                    title
                    content
                    index_image
                    created_post
                    tags
                    type
                    user{
                        id
                        username
                    }
                }
            }`;
        dispatch(populatePost(Query));
    }
}

export const UserTokenQuery = ()=>{
    return function (dispatch){
        const Query =`
            query UserTokenQuery($token:String!){
                UserToken(token:$token){
                    id
                    name
                    username
                    email
                    password
                    profile_pic
                    created_user
                }
            }`;
        dispatch(userToken(Query));
    }
}


// Mutation
export const RegisterMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation RegisterMutation($name:String!,$username:String!,$email:String!,$password:String!,$profile_pic:String){
                Register(name:$name,username:$username,email:$email,password:$password,profile_pic:$profile_pic){
                    code
                    message
                }
            }`;
        dispatch(userRegister(Mutation));
    }
}

export const UserUpdateMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation UserUpdateMutation($name:String,$username:String,$email:String,$password:String,$profile_pic:String,$id:String!){
                UserUpdate(name:$name,username:$username,email:$email,password:$password,profile_pic:$profile_pic,id:$id){
                    id
                }
            }`;
        dispatch(userUpdate(Mutation));
    }
}

export const UserDeleteMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation UserDeleteMutation($id:String!){
                UserDelete(id:$id){
                    id
                }
            }`;
        dispatch(userDelete(Mutation));
    }
}

export const PostAddMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation PostAddMutation($title:String!,$content:String!,$index_image:String!,$user:String!,$tags:[String],$type:String!){
                PostAdd(title:$title,content:$content,index_image:$index_image,user:$user,tags:$tags,type:$type){
                    id
                }
            }`;
        dispatch(postAdd(Mutation));
    }
}

export const PostUpdateMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation PostUpdateMutation($title:String,$content:String,$index_image:String,$id:String!,$tags:[String],$type:String){
                PostUpdate(title:$title,content:$content,index_image:$index_image,id:$id,tags:$tags,type:$type){
                    id
                }
            }`;
        dispatch(postUpdate(Mutation));
    }
}

export const PostDeleteMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation PostDeleteMutation($id:String!){
                PostDelete(id:$id){
                    id
                }
            }`;
        dispatch(postDelete(Mutation));
    }
}

export const SocialAddMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation SocialAddMutation($instagram_address:String,$facebook_address:String,$google_address:String,$linkedin_address:String,$twitter_address:String,$skype_address:String,$youtube_address:String,$vimeo_address:String,$user:String!){
                SocialAdd(instagram_address:$instagram_address,facebook_address:$facebook_address,google_address:$google_address,linkedin_address:$linkedin_address,twitter_address:$twitter_address,skype_address:$skype_address,youtube_address:$youtube_address,vimeo_address:$vimeo_address,user:$user){
                    code
                    message
                }
            }`;
        dispatch(socialAdd(Mutation));
    }
}

export const SocialUpdateMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation SocialUpdateMutation($instagram_address:String,$facebook_address:String,$google_address:String,$linkedin_address:String,$twitter_address:String,$skype_address:String,$youtube_address:String,$vimeo_address:String,$user:String!){
                SocialUpdate(instagram_address:$instagram_address,facebook_address:$facebook_address,google_address:$google_address,linkedin_address:$linkedin_address,twitter_address:$twitter_address,skype_address:$skype_address,youtube_address:$youtube_address,vimeo_address:$vimeo_address,user:$user){
                    id
                }
            }`;
        dispatch(socialUpdate(Mutation));
    }
}

export const SocialDeleteMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation SocialDeleteMutation($id:String!){
                SocialDelete(id:$id){
                    id  
                }
            }`;
        dispatch(socialDelete(Mutation));
    }
}

export const LikeAddMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation LikeAddMutation($user:String!,$post:String!){
                LikeAdd(user:$user,post:$post){
                    code
                    message
                }
            }`;
        dispatch(likeAdd(Mutation));
    }
}

export const LikeDeleteMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation LikeDeleteMutation($id:String!){
                LikeDelete(id:$id){
                    id
                }
            }`;
        dispatch(likeDelete(Mutation));
    }
}

export const CommentAddMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation CommentAddMutation($user:String!,$post:String!,$comment_text:String!){
                CommentAdd(user:$user,post:$post,comment_text:$comment_text){
                    id
                }
            }`;
        dispatch(commentAdd(Mutation));
    }
}

export const CommentUpdateMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation CommentUpdateMutation($id:String!,$comment_text:String!){
                CommentUpdate(id:$id,comment_text:$comment_text){
                    id
                }
            }`;
        dispatch(commentUpdate(Mutation));
    }
}

export const CommentDeleteMutation = ()=>{
    return function (dispatch){
        const Mutation =`
            mutation CommentDeleteMutation($id:String!){
                CommentDelete(id:$id){
                    id
                }
            }`;
        dispatch(commentDelete(Mutation));
    }
}