    import express from 'express'

    import {dirname} from 'path'
    import { fileURLToPath } from 'url'

    const __dirname = dirname(fileURLToPath(import.meta.url)) // 3,4,6 line is code for getting vurrent directory

    import bodyParser from 'body-parser' // middleware see in notebook to learn about it 
    // basical  req.body object me server se aya hue data ko parse karta hai

    const app = express()
    const port = 5001

    let authDetails = {
        email:'sahilkhane410@gmail.com',
        pass:'sahil1234'
    }

    app.use(bodyParser.urlencoded({ extended: true })) //usig body parser middleware


    app.get('/',(req,res)=>{
        // display the index.html on this route 
        
        res.sendFile(__dirname+"/public/index.html") // index.html ko visible kia         

    })

    // request handler for handling post request when user enters login button and providing the response
    app.post('/login',(req,res)=>{
        
        // data aa jayega post request se
        console.log(req.body); // able to print the request ke body ka data beacause of body parser middleware

        if(req.body.email===authDetails.email && req.body.password === authDetails.pass ){
            // user enter right credential that match with our app credentials
            console.log('logged in successfully');
            res.send('successfully logged in')
        }
        else{
            console.log('wrong userid password')
            res.send('login failed')
        }
        
    })

    app.listen(port,()=>{
        console.log(`server is listening on the port ${port}`);
    })
