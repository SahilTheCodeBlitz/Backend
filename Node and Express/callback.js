console.log('task executing');

function asyncTask (cb){
    console.log('inside function ');

    // making call to callback function cb in async function so it will execute asynchrounously
    // because of which even if in call back function defination we are using name variable in call back 
    // function defination which is declared after wards
    // but declaring it afterwards it is not giving errro as first all code will be exectued then
    // asynchronous code will be executed 
    
    setTimeout(()=>{

        // cb(null,'Heeee')
        cb(null,'Heeee')

    },0)
}


asyncTask((err,data)=>{

    if(err){
        throw err
    }
    else{
        console.log('no eror');
        console.log('data passed is ',data);
        console.log('declared variable afterwards using before name = ',name);
    }
    console.log('i am call back function');
})


let name = 'sahil'