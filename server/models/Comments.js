const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comments = new Schema({
    user : {type : Schema.Types.ObjectId,ref:"Users"},
    post : {type : Schema.Types.ObjectId,ref:"Posts"},
    comment_text : {
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