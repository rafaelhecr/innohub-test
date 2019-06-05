function totalFibonacci(n){
    function fibonacciRecursive(num) {
        if (num <= 1) return 1;
   
        return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
    }
    return fibonacciRecursive(n) + n;
 }
 
 
module.exports.totalFibonacci = totalFibonacci;