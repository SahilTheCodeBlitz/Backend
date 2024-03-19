const promise = new Promise((resolve,reject)=>{
    console.log('async task execute ho rha hai');
    //let say we are fetching data from api
    // if true data fetched successfully 
    // else flase data did not fetched successfully 
    if(true){
        let obj = {
            name:'sahil',age:56
        }
        resolve(obj)
    }
    else{
        throw error
        reject('error')
    }
})

// how to handle the asyncchronous events using promise

// promise.then((val)=>{

//     // then executed if success that is resolve
//     // write success code here

//     console.log('sucees we got');
//     console.log('value returned from theresolve = ',val);

// }).catch((val)=>{
    //write failure code here

    // console.log('failure we got');
    // console.log('value returned from the reject = ',val);
// })

// or

promise.then(
    
    (val)=>{
        // first call back success code write here
    
    console.log('sucees we got');
    console.log('value returned from theresolve = ',val);

},

(val)=>{
    //write failure code here

    console.log('failure we got');
    console.log('value returned from the reject = ',val);
}

)