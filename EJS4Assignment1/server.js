import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({extended: true }))

const port =5001

app.get('/',(req,res)=>{
    res.render('index.ejs')    
})

app.post('/submit',(req,res)=>{

    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const count = countLetters(firstName,lastName)

    console.log(count);
    
    res.render('index.ejs',{'counts':count})

})

const countLetters = (first,second)=>{
    const finalString = first+second
    console.log(finalString);
    return finalString.length
}

app.listen(port,(req,res)=>{
    console.log(`server is listening at port ${port}`);
})
