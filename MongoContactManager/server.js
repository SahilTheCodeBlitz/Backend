import express from 'express'
import dotenv from 'dotenv' 
import contactRouteMethod from './routes/contactRoutes.js' 
import bodyParser from 'body-parser'

dotenv.config()

const port =process.env.PORT || 5000 


const app = express()

app.use(bodyParser.json())

app.use('/api/contacts',contactRouteMethod) // here direct the route module is exported where we have written 
// all request handlers code this is common route and if any addition needed we have done that in  
// request handlers regarding route 



// app.get('/',(req,res)=>{
//     res.status(200).json({message:"resonse successfull",timepass:"done"})
// })

app.listen(port,()=>{
    console.log(`server is listeneing at port ${port}`);
})