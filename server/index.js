const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors');
const mongoose=require('mongoose');
const postsRoute=require('./routes/posts');
const app=express();

//all request get

//parse a aoolication
app.use(bodyParser.urlencoded({extended:true}));
//paser application in json
app.use(bodyParser.json({limit:"30mb",extended:true}));

app.use(cors());

app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send("I complete my mern app");
})

//dataBase connection
const DB_URL='mongodb+srv://memories:memories123@cluster0.9gxsm.mongodb.net/memo?retryWrites=true&w=majority'
//const DB_URL='mongodb+srv://memories:memories123@cluster0.s44zk.mongodb.net/memorie'
//PORT number
const PORT=process.env.PORT || 5000;

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})).catch((error)=>{
    console.log(error.message);
})

mongoose.set('useFindAndModify', false);
