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
    POPULATE_POST,
    POST_TYPE,
    USER_TOKEN,
} from './actionTypes';

export function userLogin(payload){
    return {
        type : USER_LOGIN,
        payload : payload,
        info : "LOGIN USER"
    };
}

export function userRegister(payload){
    return {
        type : USER_REGISTER,
        payload : payload,
        info : "REGISTER USER"
    };
}

export function userUpdate(payload){
    return {
        type : USER_UPDATE,
        payload : payload,
        info : "UPDATE USER"
    };
}

export function userDelete(payload){
    return {
        type : USER_DELETE,
        payload : payload,
        info : "DELETE USER"
    };
}

export function postAll(payload){
    return {
        type : POST_GET_ALL,
        payload : payload,
        info : "POST ALL"
    };
}

export function postSingle(payload){
    return {
        type : POST_GET_SINGLE,
        payload : payload,
        info : "POST SINGLE"
    };
}

export function postAdd(payload){
    return {
        type : POST_ADD,
        payload : payload,
        info : "POST ADD"
    };
}

export function postUpdate(payload){
    return {
        type : POST_UPDATE,
        payload : payload,
        info : "POST UPDATE"
    };
}

export function postDelete(payload){
    return {
        type : POST_DELETE,
        payload : payload,
        info : "POST DELETE"
    };
}

export function socialGet(payload){
    return {
        type : SOCIAL_GET,
        payload : payload,
        info : "SOCIAL GET"
    };
}

export function socialAdd(payload){
    return {
        type : SOCIAL_ADD,
        payload : payload,
        info : "SOCIAL ADD"
    };
}

export function socialUpdate(payload){
    return {
        type : SOCIAL_UPDATE,
        payload : payload,
        info : "SOCIAL UPDATE"
    };
}

export function socialDelete(payload){
    return {
        type : SOCIAL_DELETE,
        payload : payload,
        info : "SOCIAL DELETE"
    };
}

export function likeGetAll(payload){
    return {
        type : LIKE_GET_ALL,
        payload : payload,
        info : "LIKE GET ALL"
    };
}

export function likeAdd(payload){
    return {
        type : LIKE_ADD,
        payload : payload,
        info : "LIKE ADD"
    };
}

export function likeDelete(payload){
    return {
        type : LIKE_DELETE,
        payload : payload,
        info : "LIKE DELETE"
    };
}

export function commentGetAll(payload){
    return {
        type : COMMENT_GET_ALL,
        payload : payload,
        info : "COMMENT GET ALL"
    };
}

export function commentAdd(payload){
    return {
        type : COMMENT_ADD,
        payload : payload,
        info : "COMMENT ADD"
    };
}

export function commentUpdate(payload){
    return {
        type : COMMENT_UPDATE,
        payload : payload,
        info : "COMMENT UPDATE"
    };
}

export function commentDelete(payload){
    return {
        type : COMMENT_DELETE,
        payload : payload,
        info : "COMMENT DELETE"
    };
}

export function allOfPost(payload){
    return {
        type : ALL_OF_POST,
        payload : payload,
        info : "ALL OF POST"
    };
}

export function postPaginate(payload){
    return {
        type : POST_PAGINATE,
        payload : payload,
        info : "POST PAGINATE"
    };
}

export function searchPost(payload){
    return {
        type : SEARCH_POST,
        payload : payload,
        info : "SEARCH POST"
    };
}

export function searchUser(payload){
    return {
        type : SEARCH_USER,
        payload : payload,
        info : "SEARCH USER"
    };
}

export function populatePost(payload){
    return {
        type : POPULATE_POST,
        payload : payload,
        info : "POPULATE POST"
    };
}

export function postType(payload){
    return {
        type : POST_TYPE,
        payload : payload,
        info : "POST TYPE"
    };
}

export function userToken(payload){
    return {
        type : USER_TOKEN,
        payload : payload,
        info : "USER TOKEN"
    };
}