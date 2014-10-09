// the approach is to find all prime numbers under 20, for each one of these primes, find the highest exponent under 20. and multiple them together.


function isPrime(num) {
	var limit = Math.floor(Math.sqrt(num));
	for(var i=2; i<=limit; i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
}

function findPrimes(limit) {
	var allPrimes = [];
	for(var i=2; i<=limit; i++) {
		if(isPrime(i)) {
		
			allPrimes.push(i);
		}
	}
	return allPrimes;
}

function findHiExpo(num, limit) {
	var power = 1;
	var highestVal = 0;
	while(Math.pow(num, power)<= limit) {
		highestVal = Math.pow(num, power);
		power++;
	}
	return highestVal;
}

function smallMul(num) {
	var allPrimes = findPrimes(num);
	for(var i= 0; i< allPrimes.length; i++) {
		allPrimes[i] = findHiExpo(allPrimes[i], num);
	}
	return allPrimes.reduce(function(a,b) {
		return a*b;
	});
}

console.log(smallMul(20));
