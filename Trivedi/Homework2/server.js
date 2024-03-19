// task explanation = taskexplanation.txt

import express from 'express'

import {dirname} from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const __dirname = dirname(fileURLToPath(import.meta.url)) 

const port  = 5001


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


// creating auth status middleware
let grantAccess = false;

const authStatus = (req,res,next)=>{

    if (req.body.email === credentials.email && req.body.password === credentials.password) {
       grantAccess = true; // Set grantAccess to true if credentials are correct
    } else {
        grantAccess = false; // Set grantAccess to false if credentials are incorrect
    }
    console.log(grantAccess);
    next()
}

const credentials = {
    email:"sahilkhane410@gmail.com",
    password:"sahil1234"
}

app.get('/',(req,res)=>{
    // this is request to home route 
    //lets display  landing page here
    res.sendFile(__dirname+"/public/landingpage.html")
})

app.get('/login',(req,res)=>{
    // this is request made from landing page on clicking login button
                
        res.sendFile(__dirname+"/public/login.html")
    

})


app.post('/login',authStatus,(req,res)=>{
    if (grantAccess){
        // login successfull
        // guide user to home oage
        // res.sendFile(__dirname+"/public/homepage.html")

        res.redirect('/homepage')

    }
    else{
        // login unsuccessfull 
        res.json({message:'login unsuccessfull'})
    }
})

app.get('/homepage',(req,res)=>{
    if(grantAccess){
        res.sendFile(__dirname+"/public/homepage.html")
    }
    else{
        res.redirect('/');
    }
})

// handling get request made from the logout in homepage

app.get('/logout',(req,res)=>{
    grantAccess = false
    res.redirect('/')
})

app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`);
})

