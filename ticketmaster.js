a1 = [[4,3,8],[12,34,5],[77,6,1]];

    var answer = [[],[],[]];
    var position = a1.length - 1;
    for(var i=0; i < a1.length; i++ & position--) {

        a1.forEach(function(a) {
            
            answer[i].push(a[position]);
        });         
    }
   console.log(answer);