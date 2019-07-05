const express=require('experss');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const courseRouter=require('./routes/course.js');
const teacherRouter=require('./routes/teacher.js');
const stuRouter=require('./routes/stu.js')
var app=express();
app.listen(8080);
app.use( express.static('public') );
app.use( bodyParser.urlencoded({
  extended:false
}) );
app.use('/user',userRouter);
app.use('/course',courseRouter);
app.use('/teacher',teacherRouter);
app.use('/stu',stuRouter)