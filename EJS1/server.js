import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port  = 5001

app.get('/',(req,res)=>{
    res.render('first.ejs')      
})

app.post('/submit',(req,res)=>{

    const name=req.body.name
    const age = req.body.age
    console.log(name);
    console.log(age);
    res.render('second.ejs',{nameOfPerson:name , ageOfPerson:age}) // passing this data to second.ejs

})

app.listen(port,()=>{
    console.log(`server is listening at port = ${port}`);
})

