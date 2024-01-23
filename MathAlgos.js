/*
+++++++++++++++++CheatSheet for determining the Big-O+++++++++++++++++++++
1-O(n)-Loop
2-O(n^2)-Nested-loop
3-O(logn)-Input size reduced half
*/
//Fibonacci algorithm it's big-O is O(n) 
function fibonacci(n){
    let fib=[0,1]
    for (let i = 2; i <n; i++) {
        fib[i]= fib[i-1]+fib[i-2];//The Big-O of this algo is O(n)
    }
    return fib
        
}
//  console.log(fibonacci(2))

//Factorial of a number(It's big-O is also O(n))

function factorial(n){
let fact=1;
  for (let i = 1; i <=n; i++) {
    fact*=i
}
return fact
    
}


// console.log(factorial(4))

// Number is prime or not

function isPrime(n){
    if(n<2){
        return false
    }
    for (let i = 2; i < n; i++) {
        
        if(n%i===0){
       return false
        }
    }
    return true
}
console.log(isPrime(9));
//Big-O of this algo is O(n). As input grows loop run at it's rate

// Optimal solution for this question is given below:
function isPrimeOpti(n){
    if(n<2){
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        
        if(n%i===0){
       return false
        }
    }
    return true
}
console.log(isPrimeOpti(80))
// It's Big-O will be O(sqrt(n)) because loop will not run according to increase in input

//Power of two algorithm

function isPowerTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
     if(n%2!==0){
        return false
     }
     n=n/2
    }
    return true
}
console.log(isPowerTwo(4)); // we can se on line number 69 input size is reducing half at each iteration so Big-O is O(logn) 

//There is anohter solution to the power of two

function isPowerTwoBitwise(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) ===0
}
console.log(isPowerTwoBitwise(4));
/* 
If we convert each input to bits like 4 will become 1000 and 3 will become 0011 when we apply & on them it will give 0000 which is equal to 0
Big-O = O(1)
*/