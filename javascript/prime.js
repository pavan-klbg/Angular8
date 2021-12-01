console.log(prime(7));

function prime(num){
    var res = "";
    if (num === 1|| num ===0 || num < 0 || num%i === 0){
        res = num+" is a prime number";
        res = num+" is not a prime number";
        res = num + " is a negative number, please provide a positive number";
    } else {
        for(var i=2; i< num;i++){
            if(num%i === 0){
                res = num + " is not a prime number";
                break;
            } else {
                res = num + " is a prime number";
            }
        } 
        
    }
    return res;
}