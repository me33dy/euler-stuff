function checkpointPrime(number) {
    var limit = Math.floor(Math.sqrt(number));
    var checkPoint = [];
    for(var i=2; i <=limit; i++) {
        if(number % i == 0 && !checkpointPrime(i)) {
            checkPoint.push(i);
        }
    }
    return (checkPoint.length == 0) ? false : checkPoint
}

function findHighestPrime(number) {
    var checkPoint = checkpointPrime(number);
    
    for(var i = 0; i < checkPoint.length; i++) {
        number/=checkPoint[i];
        }
    return (number > 1 && !checkpointPrime(number)) ? number : checkPoint[checkPoint.length-1];
    
}

findHighestPrime(600851475143);