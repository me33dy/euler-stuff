function checkPalidrome(number) {
    var convertString = number.toString();
    var reverseString = convertString.split("").reverse().join("");
    return (convertString == reverseString) ? true : false;
    
}

function highestPalidrome(low, high) {
    var max;
    var product;
    for(var i = low; i <= high; i++) {
        for(var j = i; j <= high; j++) {
            product = i*j;
            if(checkPalidrome(product) && product > max) {
                max = product;
            }
        }
    }
    return max;
}

highestPalidrome(1,99);