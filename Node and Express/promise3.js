const p = Promise.resolve("success")

p.then((val)=>{
    console.log(val);
    return 'done2'
}).then((val)=>{
    // this will be executed only after upper promise code is executed 
    console.log(val);
    return 'done3'
}).then((val)=>{
    // this will be executed only after upper promise code is executed 
    console.log(val);
    return 'done4'
})

// in promise chaining then should always return something which will act as the  arument for next then  
