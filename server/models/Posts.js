const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Posts = new Schema({
    user_id : {
        type : String
    },
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
    Likes : [{type : Schema.Types.ObjectId,ref : "Likes"}],
    Comments : [{type : Schema.Types.ObjectId,ref : "Comments"}],
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