import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const fileUpload = require('express-fileupload');

import Article from './models/articlesModel.js';
import articles from './routes/articlesRoute.js'
import pipeline from './routes/pipelineRoute.js'
import users from './routes/usersRoute.js'

mongoose.connect('mongodb://localhost/basic-mern-app');
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (error) => {
    console.log(error);
});

let app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(function(req,res,next){
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     if (req.method === 'OPTIONS') {
         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
         return res.status(200).json({});
     }
     next();
})

app.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        res.json({ articles: articles });
    })
});


app.use('/articles', articles);
app.use('/users', users);
//app.use('/pipeline', pipeline);


app.post('/pipeline/UploadFastQC', (req, res, next) => {
  //console.log(req);
  let imageFile = req.files.file;
  console.log(req.files.file);
  imageFile.mv(`${__dirname}/public/${req.files.file.name}`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(req.body.filename);
    res.json({file: `public/${req.body.filename}.jpg`});
  });
})

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
