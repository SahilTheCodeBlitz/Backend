// middleware

// middleware are the functions that have access to request object  , response object and next middleware 
// function
// Middleware functions can execute code, make changes to the request and response objects, end the request-response 
// cycle, and call the next middleware function in the stack.

// middleware function are added to the express application using app.use()

// there are 5 types of middleware functionss

// Application Middleware
// Third Party Middleware
// Router-level Middleware
// Built in Middleware
// Error hadling Middleware

const express = require('express')

const path = require('path')

const morgan = require('morgan')

const router = express.Router()

const multer = require('multer')

const upload = multer({dest:"./public/uploads"})

const bodyParser = require('body-parser')


const app = express()

const port=5002
app.listen(port,()=>{
    console.log(`Server is listening on the port ${port}`);
})


// Application level middleware

// we will create a small logger function (middleware function) that will log all the request

const loggerMiddleware = (req,res,next)=>{
    console.log(`${new Date} -- Request Method [${req.method}] --Request URL [${req.url}] `);
    next() // control passed to next middleware function or route handler
}


app.use(loggerMiddleware)
// output = Mon Mar 11 2024 08:31:57 GMT+0530 (India Standard Time) -- Request Method [GET] --Request URL [/] 
// when i made a get request from postman

// why loggerMiddleware function we created is the  application level middleware
// because it is associated with the app irrespective to the route or requst method this funvtion will be alw
// ays called

// third party middleware
app.use(morgan("dev")) 

// thir party middle ware router
app.post("/upload",upload.single("image"),(req,res,next)=>{

    console.log(req.file,req.body);
    res.send(req.file)

},(err,req,res,next)=>{
    res.status(400).send({err:err.message})
})
// Router level Middleware

// url = localhost:5002/api/users

// according to function caalling first middleware will be executed and ifauth status true then route request
// will be made



const fakeAuthRouterMiddleWare = (req,res,next)=>{
    let authStatus = true
    if(authStatus){
        // then only user can make request to specified routes
        // next means next functions that is router.route will be executed
        next() 
    }
    else{
        res.status(404)
        throw Error
        
    }
}


app.use('/api/users',router) // whenever rrquest wiill be made at this route /api/users  at that time
// specified request methods will be called accordingly to request 
// can also do app.route('route').method.method.method


const getUser = (req,res)=>{
    res.json({message:"Get all user"})
}
const createUser = (req,res)=>{
    res.json({message:"Create User"})

    // code for verifying the use of the built in middleware
    // seeing the data passed through post request
    console.log(`The data passed by the user through post request body is = ${req.body}`);  // dont know why not working
    // The data passed by the user through post request body is = undefined , we get undefined because 
    // we have not specied that request body data should be available in json format
    
    
}


// use aour fakeauth function on the routes
router.use(fakeAuthRouterMiddleWare) 

// if true then next route .method will be executed as we have specifed in fakeauth middleWarefunct 

// .route function is used to form chain of request i.e assign multiple request method to the same route
// when '/' route will be encountered at that time if request will be get then getUser fuction will be called
// and if the request will be post then createUser function will be callled 
router.route('/').get(getUser).post(createUser)


app.all("*",(req,res)=>{ // if kuch bhi route dala to
    res.status(404)
    throw new Error("Route not found") // passed as error message
})


// errorhandler middleware

// if we are not using errorHandler middleware then the error displayed as the response will be in html format
// so using error handler middleware we will display the response as json object when  the error arises 

const errorHandlerMiddleware = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode :500
    // 500 means internal server error
    res.status(statusCode)
    switch(statusCode){
        case 401:
            res.json({
                title:"Unauthorized",
                message:err.message
            })
            break;
            case 404:
                res.json({
                    title:"Not Found",
                    message:err.message // message we get from line 110
                })
                break; 

            case 500:
            res.json({
                title:"Server Error",
                message:err.message
            })
            break;  
        default:
            break;
                     

    } 

}

app.use(errorHandlerMiddleware)// calling error handler middleware


// built in middleware

// app.use(express.json())//data sent to post request will be visible

// app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json())

// another built in middleware that we are using is express.static if we want to serve the static files to the 
// user then we use this middleware  , static fiiles are present in public directory it can be images,
// html , css javascript etc

// here for the user get request we want to send him image stored in public directory as response

// using static builtin middleware

app.use(express.static(path.join(__dirname,"public"))) // we can access public directory anythin throgh url

// url  = http://localhost:5002/images/userimag.png



// third party middleware

// morgan = used for logging 


// checked morgan logging code at line number  = 54

// another third party middleware we are using is multer it is used to upload the data from client to server
// line == 63

// url  localhost:5002/upload // postman pe image upload nahi ho rhi




