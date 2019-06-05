 function reverse (w){
    let resultArray = [];
    let cont = 0;
    let length = w.length;
    for(let i=length-1; i>=0; i--){
        resultArray[cont] = w.charAt(i);
        cont ++;
    }
    return resultArray;
 }
 
module.exports.reverse = reverse;