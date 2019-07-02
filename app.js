const express=require('experss');
const bodyParser=require('body-parser');
const router=require('./routes/user.js');
var app=express();
app.listen(8080);
app.use( express.static('public') );
app.use( bodyParser.urlencoded({
  extended:false
}) );
app.use('/user',userRouter);