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

app.post('/uploads',MultiPartyMiddleware,(req,res)=>{
    console.log(req.files.upload);
})

// app.post('/upload-server',(req,res)=>{
//     console.log(re)
// })

// listen to port
app.listen(process.env.PORT || 8000,(err)=>{
    if(err) console.log(err);
    console.log("Listening On 8000 Port");
})