module.exports = (request, response) => {
    // getRequest() function
    // we have to fetch all the movies
    // fetch movies based on the id provided

    // Extracting base URL
    let baseUrl = request.url.substring(0, request.url.lastIndexOf('/'));
    console.log(baseUrl); // base url = /api/movies

    // Extracting UUID
    let uuids = request.url.split('/')[3];
    let uuid = parseInt(uuids)
    console.log(uuid); // 1

    // we have to check whether the uuid is valid or not lets check it using regular expression

    // but as we have customized data we will validate it manually


    if (request.url === '/api/movies') { // url must be of this convention for the get request
        // request made for fetching all movies 
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(request.movies)); // req.movies = movies done in the server2.js
        response.end();
    }

    else if (baseUrl === '/api/movies' && uuid)  {
        // means request made for the fetching individual movie

        // checking if uuid is valid or not
        if(uuid>0 && uuid<=3){
            // valid uuid
            // filteration code explanation see in filterexplain.js

            // fetch the movie whose id matches with  url id 
            let filteredMovie = request.movies.filter((movie)=>{
                return uuid === movie.id
            }) 

            //if movie found
            if(filteredMovie.length>0){
            // success
                response.statusCode = 200
                response.write(JSON.stringify(filteredMovie))
                response.end()

            }
      
            else{
            // movie not found
                response.statusCode = 400
               
                response.write(JSON.stringify({ title: "movie not found", message: "movie not found", suggestion: "check movie id" }));
                response.end()
            
            }



        }
        else if(uuid>=4||uuid<=0){
            // wrong uuid
            response.statusCode = 400
            
            response.write(JSON.stringify({ title: "wrong uuid", message: "movie not found", suggestion: "check movie id" }));
            response.end()
        }

        
        
       
    } 
   
    else {
        response.statusCode = 400;
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({ title: "not found", message: "invalid request", suggestion: "make valid request" }));
        response.end();
    }
};
