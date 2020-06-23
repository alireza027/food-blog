import {
    USER_LOGIN,
    USER_REGISTER,
    USER_UPDATE,
    USER_DELETE,
    POST_GET_ALL,
    POST_GET_SINGLE,
    POST_ADD,
    POST_UPDATE,
    POST_DELETE,
    SOCIAL_GET,
    SOCIAL_ADD,
    SOCIAL_UPDATE,
    SOCIAL_DELETE,
    LIKE_GET_ALL,
    LIKE_ADD,
    LIKE_DELETE,
    COMMENT_GET_ALL,
    COMMENT_ADD,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    ALL_OF_POST,
    POST_PAGINATE,
    SEARCH_POST,
    SEARCH_USER,
    USER_TOKEN
} from './actionTypes';


import {initState} from './initState';

export const yummyReducer = (state = initState,action)=>{
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                singleUser : action.payload,
                info : action.info
            }
        case USER_REGISTER:
            return {
                ...state,
                register : action.payload,
                info : action.info
            };
        case USER_UPDATE:
            return {
                ...state,
                userUpdate : action.payload,
                info : action.info
            };
        case USER_DELETE:
            return {
                ...state,
                userDelete : [],
                info : action.info
            };
        case POST_GET_ALL:
            return {
                ...state,
                userPosts : action.payload,
                info : action.info
            };
        case POST_GET_SINGLE:
            return {
                ...state,
                postSingle : action.payload,
                info : action.info
            };
        case POST_ADD:
            return {
                ...state,
                postAdd : action.payload,
                info : action.info
            };
        case POST_UPDATE:
            return {
                ...state,
                postUpdate : action.payload,
                info : action.info
            };
        case POST_DELETE:
            return {
                ...state,
                postDelete : action.payload,
                info : action.info
            };
        case SOCIAL_GET:
            return {
                ...state,
                userSocial : action.payload,
                info : action.info
            };

        case SOCIAL_ADD:
            return {
                ...state,
                socialAdd : action.payload,
                info : action.info
            };

        case SOCIAL_UPDATE:
            return {
                ...state,
                socialUpdate : action.payload,
                info : action.info
            };

        case SOCIAL_DELETE:
            return {
                ...state,
                socialDelete : action.payload,
                info : action.info
            };

        case LIKE_GET_ALL:
            return {
                ...state,
                userLikes : action.payload,
                info : action.info
            };

        case LIKE_ADD:
            return {
                ...state,
                likeAdd : action.payload,
                info : action.info
            };

        case LIKE_DELETE:
            return {
                ...state,
                likeDelete : action.payload,
                info : action.info
            };

        case COMMENT_GET_ALL:
            return {
                ...state,
                userComments : action.payload,
                info : action.info
            };

        case COMMENT_ADD:
            return {
                ...state,
                commentAdd : action.payload,
                info : action.info
            };
         case COMMENT_UPDATE:
            return {
                ...state,
                commentUpdate : action.payload,
                info : action.info
            };
         case COMMENT_DELETE:
            return {
                ...state,
                commentDelete : action.payload,
                info : action.info
            };

         case SEARCH_POST:
            return {
                ...state,
                postSearch : action.payload,
                info : action.info
            };

         case SEARCH_USER:
            return {
                ...state,
                userSearch : action.payload,
                info : action.info
            };
        case ALL_OF_POST:
            return {
                ...state,
                posts : action.payload,
                info : action.info
            };
        case POST_PAGINATE:
            return {
                ...state,
                posts : action.payload,
                info : action.info
            };
        case USER_TOKEN:
            return {
                ...state,
                posts : action.payload,
                info : action.info
            };
        default:
            return state;
    }
}