"use strict";

function squareShadow(n){
    if(n>0){
        return n**2;
    } else {
        return ('n tiene que ser entero positivo mayor que cero');
    }
 }
 
 module.exports.squareShadow = squareShadow;