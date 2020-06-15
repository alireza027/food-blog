const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Social = new Schema({
    instagram_address : {
        type : String
    },
    facebook_address : {
        type : String
    },
    google_address : {
        type : String
    },
    linkedin_address : {
        type : String
    },
    twitter_address : {
        type : String
    },
    skype_address : {
        type : String
    },
    youtube_address : {
        type : String
    },
    vimeo_address : {
        type : String
    },
    created_social : {
        type : String,
        default : moment().format("MMM DD,YYYY")
    },
    updated_social : {
        type : String,
        default : moment().format("MMM DD,YYYY")
    },
    user : {type : Schema.Types.ObjectId,ref:"Users"}
})

module.exports = mongoose.model('Social',Social)