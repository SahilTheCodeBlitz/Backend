 module.exports =async (req) =>{
    return new Promise((resolve,reject)=>{
        try{
            let body =""
            // .on is event handler method
            // first arg = event name and second arg =   callback function with arg event returns
            // data event return chunk of data as the argument
            req.on("data",(chunk)=>{
                body = body+chunk
            })
            req.on("end",()=>{
                //'end': Emitted when the entire request has been received.
                // when entire data parsed

                // JSON.parse() is a built-in function that parses a JSON string and converts
                // it into a JavaScript object

                resolve(JSON.parse(body))
            })

        }
        catch(err){
            console.log(err);
            reject(err)
        }
    })

 }   