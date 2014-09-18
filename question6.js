
var answer = 0;
for(var i = 1; i<=100; i++ ) {
    for(var j = 1; j<=100; j++ ) {
		if(i == j) continue;
		answer += i*j;
	}
}
console.log(answer);
