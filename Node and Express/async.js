// asynchronus execution means if particular function taking time for execution then next task will be 
// executed and again after execution of next task the first task will be executed

// synchronous means sequential execution of code

console.log('start operation');

function sleep(milliseconds){
    let starttime = new Date().getTime()
    console.log('operation is running');

    setTimeout(()=>{
        console.log('operation processing');
    },milliseconds)


    console.log('operation is done');


}

console.log('Doing Something else');


sleep(1000)