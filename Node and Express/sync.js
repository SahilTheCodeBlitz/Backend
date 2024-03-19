// synchronous means sequential execution of code

console.log('start operation');

function sleep(milliseconds){
    let starttime = new Date().getTime()
    console.log('operation is running');

    // wile loop that will keep on executing till specified milliseoncds not over
    
    while(new Date().getTime() < starttime+milliseconds){
        
    }

    console.log('operation is done');


}
console.log('Doing Something else');
sleep(1000)