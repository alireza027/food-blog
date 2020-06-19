// add dependencies
const express = require('express');
const mongoose = require('mongoose');
const graphHttp = require('express-graphql');
const morgan = require('morgan');
const multiparty = require("connect-multiparty");
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const MultiPartyMiddleware = multiparty({uploadDir : "./public/uploads/client"})
const upload = multer({dest:"./public/uploads/backend",limits:{
    fieldNameSize : 100,
    fileSize : 5242880, //5meg
    files : 4 
}})
require('dotenv').config();
const app = express();

// -------------------------------


// add modules
const { buildSchema } = require('graphql');
const {root} = require('./graphql/root');
const {schema} = require('./graphql/schema');

// -------------------------------
const Users = require('./models/Users');
const Posts = require('./models/Posts');
const Likes = require('./models/Likes');
const Comments = require('./models/Comments');
const Social = require('./models/Social');

// connect to database
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("OK Mongoose"))

// use middlewares
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
app.use('/graphql',graphHttp({
    schema : schema,
    rootValue : root,
    graphiql : true,
    pretty : true,
}))


app.get('/',(req,res)=>{
    // var td = new Posts({
    //     title : "b",
    //     content : "alireza2",
    //     index_image : "/uploads/server/2.jpg",
    //     user : "5eea5b5d03e9ae1f760ac167"
    // })

    // td.save().then((result)=>{
    //     Users.findByIdAndUpdate('5eea5b5d03e9ae1f760ac167',{
    //         $push : {posts:result._id}
    //     }).then(ress=>{res.status(200).json(ress)});
    // })

    // var td = new Users({
    //     name : "alireza",
    //     username : "alireza",
    //     email : "alireza@gmail.com",
    //     password : "123456789",
    //     profile_pic : "/uploads/server/1.jpg",

    // })

    // td.save().then((result)=>{
    //     res.status(200).json(result);
    // })


    // Users.findOne({username:"alireza",password:"123456789"}).populate('posts').then(result=>{
    //     res.status(200).json(result);
    // })

    
    // var lk = new Likes({
    //     user : "5eeb921e5c27d861fc71330e",
    //     post : "5eebabec5d32308833a69e84"
    // });
    // lk.save().then(result=>{
    //     Users.findByIdAndUpdate('5eeb921e5c27d861fc71330e',{$push : {likes:result._id}
    //     }).then(()=>{
    //         Posts.findByIdAndUpdate('5eebabec5d32308833a69e84',{
    //             $push : {likes:result._id}
    //         }).then(()=>{res.status(200).json(result)});
    //     });
    // })

    var lk = new Comments({
        user : "5eeb921e5c27d861fc71330e",
        post : "5eebabec5d32308833a69e84",
        comment_text : "that's great!!!!"
    });
    lk.save().then(result=>{
        Users.findByIdAndUpdate('5eeb921e5c27d861fc71330e',{$push : {comments:result._id}
        }).then(()=>{
            Posts.findByIdAndUpdate('5eebabec5d32308833a69e84',{
                $push : {comments:result._id}
            }).then(()=>{res.status(200).json(result)});
        });
    })


    // var lk = new Social({
    //     instagram_address : "a@gmail.com",
    //     facebook_address : "a@gmail.com",
    //     google_address : "a@gmail.com",
    //     linkedin_address : "a@gmail.com",
    //     twitter_address : "a@gmail.com",
    //     skype_address : "a@gmail.com",
    //     youtube_address : "a@gmail.com",
    //     vimeo_address : "a@gmail.com",
    //     user : "5eea5b5d03e9ae1f760ac167"
    // })
    // lk.save().then(ress=>{res.status(201).json(ress)});



    // Users.findById('5ee8deeb16d185c88d6eab7a').populate('social').populate('posts').populate('likes').populate('comments').then(resu=>{
    //     res.status(200).json(resu);
    // })

    // Users.updateOne("5ee8deeb16d185c88d6eab7a",{
    //     $pullAll : {posts : ["5eea8e994056f19a18bd5a25"]}
    // }).then(result=>{
    //     res.status(200).json(result);
    // }).catch(err=>{
    //     res.status(400).json(err);
    // })

    

    // Posts.find({user:"5ee8deeb16d185c88d6eab7a"}).then(result=>{
    //     res.status(200).json(result);
    // }).catch(err=>{
    //     res.status(400).json(err);
    // })

    // Likes.find({user:"5eeb921e5c27d861fc71330e"}).populate('user').then((resultLike)=>{
    //      res.status(200).json(resultLike);
    // }).catch(err=>{
    //     res.status(400).json(err);
    // })
    
})
app.post('/uploads',MultiPartyMiddleware,(req,res)=>{
    console.log(req.files.upload);
})
// listen to port
app.listen(process.env.PORT || 8000,(err)=>{
    if(err) console.log(err);
    console.log("Listening On 8000 Port");
})