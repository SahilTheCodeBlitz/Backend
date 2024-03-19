function printFibonacci(n){
    let fibArr = []

    fibArr[0]=0
    fibArr[1]=1

    for(let i=2;i<=n;i++){
        let third = fibArr[i-1]+fibArr[i-2]
        fibArr[i] = third
    }

    return fibArr
}

console.log(printFibonacci(6));
console.log(printFibonacci(10));