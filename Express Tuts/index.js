import express from 'express'

const app = express()

const port =3001 // can also take port number from .env variables

app.listen(port,()=>{
    console.log(`Server started on the port ${port}`);
})

// get request 

// get request to home page 

// get request = localhost:3001/
app.get('/',(req,res)=>{
    // res.send('hello ') // sending text as the response
    // we can send also send json response
    res.json({'message':"This is the home page"})
})

app.get('/users/',(req,res)=>{
    res.json({'message':"Get All users"})
})

// here we will pass id which can be any number in the url of the get request

app.get('/users/:id',(req,res)=>{
    res.json({'message':`Get user whose id = ${req.params.id}`})
})

// post request

// passing the data or resource from the client to the server

app.post('/users/',(req,res)=>{
    res.json({'message':`creating the new user`})
})

// put request

// updating the data or resource of the user at server side whose id is being passed 

app.put('/users/:id',(req,res)=>{
    res.json({'message':`updated the data of the user whose id = ${req.params.id}`})
})


// delete the data or resource of the user at server side whose id is being passed 

app.delete('/users/:id',(req,res)=>{
    res.json({'message':`delete the data of the user whose id = ${req.params.id}`})
})

