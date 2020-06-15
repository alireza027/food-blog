const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Posts = new Schema({
    title : {
        type : String,
        required : true
    },
    index_image : {
        type : String,
        required : true
    },
    content : {
        type : String,  
        required : true
    },
    user : {type : Schema.Types.ObjectId,ref : "Users"},
    likes : [{type : Schema.Types.ObjectId,ref : "Likes"}],
    comments : [{type : Schema.Types.ObjectId,ref : "Comments"}],
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