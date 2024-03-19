import express from 'express'
import bodyParser from 'body-parser'

const port = 5000

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

const arr = ['Apple','Mango','Grapes','Banana','Watermelon']

app.get('/',(req,res)=>{
    res.render('index.ejs',{nameOfPerson:'Sahil',fruitName:arr})
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})