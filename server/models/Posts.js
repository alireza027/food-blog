const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Posts = new Schema({
    title : {
        type : String,
        required : "title field required"
    },
    index_image : {
        type : String,
        required : "index image field required"
    },
    content : {
        type : String,  
        required : "content field required"
    },
    type : {
        type : String,
        required : "type field required"
    },
    user : {type : Schema.Types.ObjectId,ref : "Users"},
    likes : [{type : Schema.Types.ObjectId,ref : "Likes"}],
    comments : [{type : Schema.Types.ObjectId,ref : "Comments"}],
    tags : {
        type : Array
    },
    created_post : {
        type : String,
        default : moment().format("MMM DD,YYYY")
    },
    updated_post : {
        type : String,
        default : moment().format("MMM DD,YYYY")
    },
})
module.exports = mongoose.model('Posts',Posts);