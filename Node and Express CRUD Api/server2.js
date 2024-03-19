const http = require('http')
const getRequest = require('../methodsnode/get-request')
const postRequest = require('../methodsnode/post-request')
const movies = require('../data/movies.json')

PORT = 5000

let server = http.createServer((request,response)=>{

    request.movies = movies // request object ke propert add hui movies jaha movies ka json data store

    switch(request.method){
        // checking which ,method get ,post ,put or else
        case 'GET':
            getRequest(request,response)
            break
        case 'POST':
            postRequest(request,response)
            break
        case 'PUT':
            putRequest(request,response)
            break
        case 'DELETE':
            deleteRequest(request,response)   
            break        
        default:
            // if other request made, other than what we have written code
            response.statusCode = 400
            response.setHeader('Http Response','application/json')
            response.write(JSON.stringify({title:"not found",message:"invalid request",suggestion:"make valid request"}))

    }

})

server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})