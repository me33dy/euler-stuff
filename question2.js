function fib(n) {
    if (n < 3) return n;
    return fib(n-1) + fib(n-2);
}

// even fibo starts with 1, 2 is every (3n-1) term

function sumFibo(limit) {
    var sum = 0;
    for(var i = 1; sum < limit; i++) {
        sum += fib(3*i - 1);
    }
    return sum;
}


sumFibo(5);
sumFibo(4000000);