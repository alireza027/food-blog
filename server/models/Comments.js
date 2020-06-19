const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comments = new Schema({
    comment_text : {
        type : String,
        required : "comment text field required"
    },
    user : {type : Schema.Types.ObjectId,ref:"Users"},
    post : {type : Schema.Types.ObjectId,ref:"Posts"},
    created_comment : {
        type : String,
        default : moment().format("YYYY MM DD - HH:mm:ss a")
    },
    updated_comment : {
        type : String,
        default : moment().format("YYYY MM DD - HH:mm:ss a")
    }
    
})

module.exports = mongoose.model('Comments',Comments)