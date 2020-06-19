const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = new Schema({
    name : {
        type : String,
        required : "name field required"
    },
    username : {
        type : String,
        required : "username text field required",
        unique : "username already in use",
        trim : true
    },
    email : {
        type : String,
        required : "email text field required",
        unique : "email already in use",
        trim : true
    },
    password : {
        type : String,
        required : "password text field required",
        minlength : 8,
        trim : true,
    },
    profile_pic : {
        type : String,
    },
    posts : [{type : Schema.Types.ObjectId,ref:"Posts"}],
    likes : [{type : Schema.Types.ObjectId,ref:"Likes"}],
    comments : [{type : Schema.Types.ObjectId,ref:"Comments"}],
    social : {type : Schema.Types.ObjectId,ref:"Socials"},
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