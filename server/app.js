// add dependencies
const express = require('express');
const mongoose = require('mongoose');
// const {buildSchema} = require('graphql')
// const graphHttp = require('express-graphql');
// const moment = require('moment');
const morgan = require('morgan');
const multiparty = require("connect-multiparty");

const path = require('path');
const multer = require('multer');
const cors = require('cors');
const upload = multer({dest:"./public/uploads/backend",limits:{
    fieldNameSize : 100,
    fileSize : 5242880, //5meg
    files : 4 
}})
const Users = require('./models/Users');
const Posts = require('./models/Posts');
const Likes = require('./models/Likes');
const Comments = require('./models/Comments');
const Social = require('./models/Social');
const MultiPartyMiddleware = multiparty({uploadDir : "./public/uploads/client"})
require('dotenv').config();


const app = express();

// connect to database
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("OK Mongoose"))

// use middlewares
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
// 5ee7cb6c87c9d9a7eb5a7175
app.get('/',(req,res)=>{
    // var user = new Posts({
    //     title : "title2",
    //     content : "content2",
    //     index_image : "/uploads/server/2.jpg",
    //     user:"5ee7dc33ff4230c8d1901bc8"
    // });

    // var user = new Users({
    //     name : "a",
    //     username : "alireza",
    //     email : "alireza@gmail.com",
    //     password : "123456789",
    //     profile_pic : "/uploads/server/2.jpg",
    // });


    // user.save().then(result=>
    //     Users.findByIdAndUpdate('5ee7dc33ff4230c8d1901bc8',{$push:{posts:user._id}}).then(()=>{
    //         res.status(200).json(result)
    //     })
    // ).catch(err=>console.log(err));

    Users.find().populate('posts','title content').then(result=>res.status(200).json(result)).catch(err=>res.status(400).json(err));
})

app.post('/uploads',MultiPartyMiddleware,(req,res)=>{
    console.log(req.files.upload);
})
// listen to port
app.listen(process.env.PORT || 8000,(err)=>{
    if(err) console.log(err);
    console.log("Listening On 8000 Port");
})