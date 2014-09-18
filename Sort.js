// insertion sort 
arr = [3, 5, 6, 3, 1];

function insertSort(test) {
    for(var i =0; i < test.length; i++) {
        
        var value = test[i];
        
        for( var j = i-1; j > -1 && test[j] > value; j-- ) {
            test[j + 1] = test[j];
        }
        test[j+1] = value;
    }
    return test;
}

insertSort(arr);