// concept is summ of numbers which are multiple of 3, 3 + 6 + 9 + 12.., which can be factor 3 out as 3*(1+2+3+4..), the sumSteps find out the range of later parts of equations

// how many multiple of num within the limit
function sumSteps(num, limit) {
    var sum = 0;
    var steps = 0;
    if(limit%num === 0) {
        steps = (limit/num) - 1;
    } else {
        steps = Math.floor(limit/num);
    }
    for(var i = 0; i <= steps; i++) {
        sum += i;
        }
    return sum;
}

sumSteps(2,10);

// function find sum of multiple is find the sum of a first number + second number - the common number
function findSumOfMultiple(num1, num2, limit) {
    // check if input is integer
    if (num1 === parseInt(num1) && num2 === parseInt(num2) && limit === parseInt(limit)) {
        var commonNum = num1 * num2;
        return num1*sumSteps(num1, limit) + num2*sumSteps(num2, limit) - commonNum*sumSteps(commonNum, limit)
    } else {
        console.log('Please provide all the input as integer.');
    }
}

findSumOfMultiple(3, 5, 1000);