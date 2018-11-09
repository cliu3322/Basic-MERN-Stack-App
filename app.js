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
  let fastQCFile1 = req.files.file1;
  let fastQCFile2 = req.files.file2;
  console.log(fastQCFile1);
  console.log('____________________');
  console.log(fastQCFile2);
  fastQCFile1.mv(`${__dirname}/public/R1.fastq`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({file: `R1`});
  });
  // fastQCFile2.mv(`${__dirname}/public/R2.fastq`, function(err) {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
  //   res.json({file: `R2`});
  // });
})

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
