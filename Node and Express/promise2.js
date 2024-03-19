// const prom = Promise.resolve("promise resolved")
const prom = Promise.reject("promise rejected")

// say this promisese are already resolved 
// trying to interact with alrady executed promises

prom.then((val)=>{
    console.log('success');
    console.log(val);
},
((val)=>{
    console.log('failure');
    console.log(val);
    // see asynchronous nature pf prmoise
    // accessing variable that is declared later
    // as first all code will executed then asynchronous code

    console.log(name);


})
)

let name = 'sahuil'
