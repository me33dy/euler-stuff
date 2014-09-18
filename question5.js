function findAllPrime(number) {
    var limit = Math.floor(Math.sqrt(number));
    var result = [];
    var num = number;
    for(var i = 2; i <=limit; i++) {
        if(number%i == 0 && !findAllPrime(i)) {
            result.push(i);
        }
    }
    if (result.length == 0) {
        return false;
    } else {
        for(var i = 0; i < result.length; i ++) {
            num /= result[i];
        }
        if (num >1 && !findAllPrime(num) && result.indexOf(num) < 0) {
            result.push(num);
        }
    }
    return result;
}

findAllPrime(2520);

