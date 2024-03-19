function makeApiCall(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(time)
        },time)
    })
}


// This was normal api call
// makeApiCall(1000).then((val)=>{
// // write resolve that is success code here
// console.log(val);
// console.log('data fetched successfully');
// },()=>{
// //write reject that is failure code here
// console.log(val);
// console.log('data did not fetched');
// })

// lets do multiple api callas

let multiApiCall = [makeApiCall(1000),makeApiCall(500),makeApiCall(2000)]

Promise.all(multiApiCall).then((val)=>{
    // write resolve that is success code here
    console.log(val);
    console.log('data fetched successfully');
    },()=>{
    //write reject that is failure code here
    console.log(val);
    console.log('data did not fetched');
    })

    // simulataneously sab execute honge par by asyn pehele 500,fir 1000 and fir 2000

   Promise.race(multiApiCall).then((val)=>{
    // write resolve that is success code here
    console.log(val);
    console.log('data fetched successfully');
    })
    // specifies first apicall made was that takes 500 seconds
    
