"use strict";

function serieFibonacci(n){
    let j=0;
    for(let i=n-1; i>=0; i--){
        n = n+i;
    }
    return n;
 }

module.exports.serieFibonacci = serieFibonacci;