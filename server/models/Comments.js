const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comments = new Schema({
    user_id : {
        type : String,
        required : true
    },
    comment_text : {
        type : String,
        required : true
    },
    post_id : {
        type : String,
        required : true
    },
    created_comment : {
        type : String,
        default : moment().format("YYYY MM DD - HH:mm:SS a")
    },
    updated_comment : {
        type : String,
        default : moment().format("YYYY MM DD - HH:mm:SS a")
    }
})

module.exports = mongoose.model('Comments',Comments)