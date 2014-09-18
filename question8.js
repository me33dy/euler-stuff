var max = 0;
var iMax = 0;
// for(var i = 0; i < 1000; i++) {
//     var temp = a[i]*a[i+1]*a[i+2]*a[i+3]*a[i+4]*a[i+5]*a[i+6]*a[i+7]*a[i+8]*a[i+9]*a[i+10]*a[i+11]*a[i+12];
//     if(temp > max) {
//         max = temp;
//     }
// }

for(var i = 0; i < 1000; i++) {
    var temp = Array.prototype.reduce.apply(a.slice(i, i+ 13), [ function(a, b) { return a*b }]);
    if(temp > max) {
        max = temp;
        iMax = i;
    }
}

console.log(max, iMax);