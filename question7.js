function checkPrime(number) {
    var testLimit = Math.floor(Math.sqrt(number));
    for(var i = 2; i <= testLimit; i ++) {
        if(number % i == 0) return false;
    }
    return true;
}

function findPrimeByPosition(number) {
    var position = 0;
    var answer = 0;
    for(var i = 2; position < number; i++) {
        if(checkPrime(i)) {
            // console.log(i);
            position++;
            answer = i;
            // console.log(i);
        }
    }
  return answer;
}

findPrimeByPosition(10001);