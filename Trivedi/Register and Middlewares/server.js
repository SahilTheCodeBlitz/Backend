import express from 'express'
import bodyParser from 'body-parser'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'

// here we have used three middlewares
// 1. Custom Middleware  = created a logging middleware
// 2. Third party Middleware = used body-parser which is third party middleware
// 3. Third party Middleware = used morgan for logging which is third party middleware   

const __dirname = dirname(fileURLToPath(import.meta.url)) // we got current directory location

const app = express()

const port = 5000


// creating custom middleware
// creating a middleware that will log the request comming from the servers

const logger =  (req,res,next)=>{
    // req,res,next isko milta kaha se hai, jab regquest is made to request handler to request pehle middleware pe 
    // ayege fir request handler pe jayegi aur har req ke pas req res and next hota hai
    console.log(`Custom Logs: ${new Date}  -- Request type: ${req.method}  --Request URL = ${req.url}`);
    // next kia tha to req , req handler tak gyi hi nhi 

    next()
}


// middleware codes
app.use(bodyParser.urlencoded({ extended: true })) // body-parser middleware 

// middleware code
app.use(logger)

// middleware code
app.use(morgan('short'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/registration',(req,res)=>{
    // this request handler's callback function gets executed when user click on submit button
    console.log(req.body);
    res.send('success')
})

app.listen(port,(req,res)=>{
    console.log(`server is listening at the port ${port}`);
})
