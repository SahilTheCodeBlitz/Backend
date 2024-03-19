const userLogin =()=>{
    console.log('getting user input and password for authentication');
    let username = prompt("enter username = ")
    let password = prompt("enter the password = ") 

    return new Promise((resolve,reject)=>{
       if(username==='Sahil' && password ==='Sahil'){
        resolve("auth success")
       }else{
        reject("auth not success error")
       }
    }) 
}

const goToHomePage = (userAuthStats)=>{
    return Promise.resolve(`Go to Homepage : ${userAuthStats}`)
}

// userLogin().then((response)=>{
//     // code after success
//     console.log('authentication successfull user validated');
//     console.log(response);
//     //if user authentication is successfull then just calling homepage function 
//     return goToHomePage(response) //promise return which will act as a argument to next then
// }).then((val)=>{
//     // it means gottohomepage is successfull  and code after it is successfull
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })

// writing above code using asymc await
// async make function asynchronous
// await is used to write chaining code of promises
// await make sure that until the response is not get next task not be executed

// to handle error in await we use try cathch


async function taskExecuter(){

    try{

        const res = await userLogin() // jab tak response nhi ayega age ka code nit executed
        console.log('authentication successfull user validated');
        console.log(res);
    
        const homeres = await goToHomePage(res)
        console.log(homeres);

    }
    catch(err){
    console.log(err);
    }
   

}


taskExecuter()