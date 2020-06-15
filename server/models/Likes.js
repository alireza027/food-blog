const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Likes = new Schema({
    user_id : {
        type : String,
        required : true
    },
    post_id : {
        type : String,
        required : true
    },
    created_like : {
        type : String,
        default : moment().format("YYYY MM DD - HH:mm:SS a")
    }
})

module.exports = mongoose.model('Likes',Likes)