// we can also print time required to run the function

const sum = ()=>{
    console.log('the sum of 2 and 3 is = ',2+3);
}

const multiply =()=>{
    console.log('the multiplication of 2 and 3 is = ',2*3);
}

const measureTime = ()=>{
    console.time('label1')
    sum()
    console.timeEnd('label1')
    console.time('label2')
    multiply()
    console.timeEnd('label2')
}

measureTime()