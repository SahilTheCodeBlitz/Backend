import express from "express"

let app = express()

const port =3000;

app.get('/',(req,res)=>{
    res.send("hello mr")
})



app.listen(port,()=>{
    console.log('server strting at 3000');
})