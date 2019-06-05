"use strict";

function totalFibonacci(n){
    if (n<=1)return 1;
    return n + totalFibonacci(n-1);
 }
 
 module.exports.totalFibonacci = totalFibonacci;