// find the second largest element from the given array
let array = [23,42,11,34,22,41,2,43] 

let largest = 0
let secondLargest = 0


function findLargest(array){


    
        for(let j=0 ;j<array.length;j++){
            if(array[j]>=largest){
                // if current element is greater than the largest element
                // make current element as largest element
                // and second largest element as the previous largest element
                secondLargest =largest
                largest = array[j] 
            }
            else if(array[j]>=secondLargest && array[j]!==largest){
                // change the second largest element
                secondLargest = array[j]
            }
        }
  
    return [largest,secondLargest]
   
}

let [res,ans] = findLargest(array)

console.log(res,ans);