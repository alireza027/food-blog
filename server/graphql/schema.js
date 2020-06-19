const { buildSchema } = require('graphql');
const Types = `
    type User { 
        id : String 
        name : String 
        username : String 
        email : String 
        password : String 
        profile_pic : String 
        created_user : String 
        updated_user : String
        posts : [Post]
        likes : [Like]
        comments : [Comment]
        social : Social
        token : String
    }

    type UserCodeMessage { 
        id : String 
        name : String 
        username : String 
        email : String 
        password : String 
        profile_pic : String 
        created_user : String 
        updated_user : String
        posts : [Post]
        likes : [Like]
        comments : [Comment]
        social : Social
        token : String
        code : String
        message : String
    }

    type Post {
        id : String
        title : String
        content : String
        index_image : String
        created_post : String
        updated_post : String
        user : User
        likes : Like
        comments : Comment
        tags : [String]
        type : String
    } 

    type CodeMessage {
        code : String
        message : String
    }

    type Like {
        id : String
        user : User
        post : Post
        created_like : String
    }

    type Comment {
        id : String
        user : User
        post : Post
        comment_text : String
        created_comment : String
        updated_comment : String
    }

    type Social {
        id : String
        instagram_address : String
        facebook_address : String
        google_address : String
        linkedin_address : String
        twitter_address : String
        skype_address : String
        youtube_address : String
        vimeo_address : String
        created_social : String
        updated_social : String
        user : User
    }
    `;
    

const Query = `
    type Query {
        Login ( username : String! , password : String ) : UserCodeMessage

        Posts ( userid : String! ) : [Post]
        Post ( id : String! ) : Post

        Social ( id : String! ) : Social

        Likes ( id : String! ) : [Like]

        Comments ( id : String! ) : Comment
    }
`;

const Mutation = `
    type Mutation {
        Register( name:String! , username:String! , email:String! , password:String! , profile_pic:String ) : CodeMessage
        UserUpdate( name:String , username:String , email:String , password:String , profile_pic:String  ) : User
        UserDelete( id : String! ) : User

        PostAdd( title : String! , content : String! , index_image : String! , user : String! , tags : [String] , type : String! ) : Post
        PostUpdate( title : String , content : String , index_image : String , id : String! , tags : [String] , type : String) : Post
        PostDelete( id : String! ) : Post

        SocialAdd ( instagram_address : String , facebook_address : String , google_address : String , linkedin_address : String , twitter_address : String , skype_address : String , youtube_address : String , vimeo_address : String , user : String! ) : CodeMessage
        SocialUpdate ( instagram_address : String , facebook_address : String , google_address : String , linkedin_address : String , twitter_address : String , skype_address : String , youtube_address : String , vimeo_address : String , user : String! ) : Social
        SocialDelete ( id : String! ) : Social

        LikeAdd ( user : String! , post : String! ) : CodeMessage
        LikeDelete ( id : String! ) : Like

        CommentAdd ( user : String! , post : String! , comment_text : String! ) : Comment
        CommentUpdate ( comment_text : String! , id : String! ) : Comment
        CommentDelete ( id : String! ) : Comment
    }
`;

const schema = buildSchema(`${Types} ${Query} ${Mutation}`)

module.exports = {schema}