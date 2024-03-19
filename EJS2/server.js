import express from 'express'
import bodyParser from 'body-parser'

const port = 5000

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{

    res.render('index.ejs')
    
})

app.post('/submit',(req,res)=>{

    const name = req.body.name
    const age = req.body.age

    res.render('index.ejs',{nameOfPerson:name , ageOfPerson:age})
    
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})
