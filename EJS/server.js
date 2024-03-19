import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.render('index.ejs',{fruitname:['grapes','pinaple','watermelon']})
})

// app.post("/submit",(req,res)=>{
//     let name = req.body.name
//     res.render(index.ejs,{nameOfUser:name})
// })
app.listen(5001,()=>{
    console.log('server is listening at port 5001');
})