// reference link  - https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

// creating http server

const http = require('http')

require('dotenv').config() // using this package to access variable declard in .env

// we require port to listen the request

const PORT = process.env.PORT || 5001; // using enviroment variable port so that if that is comming
// sometimes its provide by aws or heroko if we are using then port comes from there
// if not avialable then using 5001 port

// in this code we have specified port number in .env file which is 5000 and it will be used

// using createServer method to create the http server 
// req = client makes req to server
// res = server provides response to client

const server = http.createServer((req,res)=>{

    // Whenever a new request is received, the request event is called, providing two objects: 
    // a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

    // working with response  object

    //res is object represntign http response

    res.statusCode = 200 ; // this code indicates successfull  response
    res.setHeader('Content-Type','application/json') // first arg  = name of Http header 
    // sec arg = indicating client response sent is in json data can also pass plain text
    res.write(JSON.stringify({message:"hello mr sahil"}))
    res.end()

    // client made get request and we provides response see response on 
    // localhost:portnumber
    // get request so response seen on web browser
    
    // for post put delete we will not be able to see on the web browser
    // we need http client for that we can use postman or thunder client 
    // we will use thunder client 


})   

// we have crested the server now we need to listen on the port

// passing port as argument it will tell server on which port do he or she has to listen 

server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})