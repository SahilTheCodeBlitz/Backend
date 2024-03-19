const bodyParser = require ('../utils/body-parser.js')
const crypto = require('crypto') // for unique id generation for data received from post method
module.exports = async(req,res) => {
    //used async here because we had used promise to reurn the data from bodypparser
const writeToFile = require('../utils/write-postdata-to-filesystem.js')    


    // post request means we have to capture the data sent by client to server
    // one thing we need to understand is that when the data comes  from the client to the server at that
    // time we cant see that data we have to parse that data using body parser
    
    // task to perform
    // create a body parser as we are not using middleware 
    // fetch data then parse it using body oarser
    // access to where data is store and make entry of received data there

    // we will not send id from cleint we will assign id here


    if (req.url === '/api/movies'){

        try{
            let body =await bodyParser(req)
            body.id = crypto.randomUUID()
            console.log(body);
            req.movies.push(body) // entire data req.movies me aa gya
            
            writeToFile(req.movies)


            res.writeHead(201,{'Content-Type':'application/json'})
            res.end(JSON.stringify({
                title:'Success',
                messages:'Request body successfully added'
            }))
            //res.end me ka msg as a response display hota hai 
        }
        catch(err){
            console.log(err);
            res.writeHead(400,{'Content-Type':'application/json'})
            res.end(JSON.stringify({
                title:'Validation failed',
                messages:'Request body not valid'
            }))

        }
       

    }
    else {
        // error route
        response.statusCode = 400;
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({ title: "not found", message: "invalid request", suggestion: "make valid request" }));
        response.end();
    }
}