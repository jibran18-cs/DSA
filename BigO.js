// Factorail or summation of a Number algo
//Algo 1
function summation(n){
let sum=0 //This line will run once
for (let i = 1; i <= n; i++) {
     sum += i // This line will run 4 times 
    }
    return console.log(sum) // This line will also run once (Hence time complexity will be n+2 . n for input and 2 for 2 lines executing one time each. But we will consider only O(n) as big O ignores minute details)
}
summation(4)

//Algo 2

function summation2(n){
    return (n*(n+1))/2
}
console.log(summation2(4)); // Time complexity of this algo is O(1) which is constant