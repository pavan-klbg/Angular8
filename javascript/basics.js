

console.log("welocme to js")


console.log(prime(27));

function prime(number){
    var res = "";
    if (number === 1){
        res = number+" is a prime number";
    } else if(number === 0){
        res = number+" is not a prime number";
    } else if (number < 0){
        res = number + " is a negative number, please provide a positive number";
    } else {
        for(var i=2; i< number;i++){
            if(number%i === 0){
                res = number + " is not a prime number";
                break;
            } else {
                res = number + " is a prime number";
            }
        } 
        
    }
    return res;
}