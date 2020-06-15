const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Likes = new Schema({
    user : {type : Schema.Types.ObjectId,ref:"Users"},
    post : {type : Schema.Types.ObjectId,ref:"Posts"},
    created_like : {
        type : String,
        default : moment().format("YYYY MM DD - HH:mm:SS a")
    }
})

module.exports = mongoose.model('Likes',Likes)