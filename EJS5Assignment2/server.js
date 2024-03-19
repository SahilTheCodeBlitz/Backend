import express from 'express'
import bodyParser from 'body-parser'

const port = 5000

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

// Generate a random number between 0 and 6
function generateRandomNumber() {
    return Math.floor(Math.random() * 7); // Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
}

const arr = [
    {
        'ActivityName' : 'Ludo',
        'NumberOfPersonNeeded':4
    },
    {
        'ActivityName' : 'Chess',
        'NumberOfPersonNeeded':2
    },
    {
        'ActivityName' : 'Visit Outside',
        'NumberOfPersonNeeded':1
    },
    {
        'ActivityName' : 'Trek',
        'NumberOfPersonNeeded':2
    },
    {
        'ActivityName' : 'Watch Movie',
        'NumberOfPersonNeeded':1
    },
    {
        'ActivityName' : 'Listen Songs',
        'NumberOfPersonNeeded':0
    }

]

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/submit',(req,res)=>{
    const randomnumber = generateRandomNumber()
    res.render('index.ejs',arr[randomnumber])
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})