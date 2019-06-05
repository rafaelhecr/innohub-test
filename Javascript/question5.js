function serieFibonacci(n){
    let suc = n;
    let susc = 1, bef = 0, tmp;
 
    while(n>=0){
        tmp = susc;
        susc = susc + bef;
        bef = tmp;
        n--;
    }
 
    return bef + suc;
 }
 
module.exports.serieFibonacci = serieFibonacci;