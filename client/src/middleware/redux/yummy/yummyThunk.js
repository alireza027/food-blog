import {
    // userLogin,
    // userRegister,
    // userUpdate,
    // userDelete,
    // postAll,
    // postSingle,
    // postAdd,
    // postUpdate,
    // postDelete,
    // socialGet,
    // socialAdd,
    // socialUpdate,
    // socialDelete,
    // likeGetAll,
    // likeAdd,
    // likeDelete,
    // commentGetAll,
    // commentAdd,
    // commentUpdate,
    // commentDelete,
    // postPaginate,
    // searchPost,
    // searchUser,
    allOfPost,
} from './actions';
export const Posts = ()=>{
    return function (dispatch){
        const Query =`
            query {
                    AllPost{
                    id
                    title
                    content,
                    index_image,
                    created_post,
                    type,
                    user{
                        username
                    }
                }
            }`;
        dispatch(allOfPost(Query));
    }
}