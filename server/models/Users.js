const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = new Schema({
    name : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        trim : true,
    },
    profile_pic : {
        type : String,
    },
    posts : [{type : Schema.Types.ObjectId,ref:"Posts"}],
    likes : [{type : Schema.Types.ObjectId,ref:"Likes"}],
    Comments : [{type : Schema.Types.ObjectId,ref:"Comments"}],
    Social : {type : Schema.Types.ObjectId,ref:"Social"},
    created_user : {
        type : String,
        default : moment().format("MMM DD,YYYY")
    },
    updated_user : {
        type : String,
        default : moment().format("MMM DD,YYYY")
    }
})

module.exports = mongoose.model('Users',Users);