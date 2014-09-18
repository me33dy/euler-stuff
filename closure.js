function saveName(fisrName) {
	// here capitalizeName method does not need to pass the fistName parameter in,since it's the inner function, capitalizeName has the access to the outer function's local varibale and parameter. 
	function capitalizeName () {
		return firstName.toUpperCase();
	}
	var caped = capitalizeName();
	console.log(caped);
}

//  inner functions referring to local variables of its outer function create closures

function add(x) {
	return function(y) {
		return x + y;
	};
}
var add5 = add(5);
// function(y) {
	// 5 + y;
// }
var no8 = add5(3);
alert(no8);
// loop issue
function addlinks() {
	for(var i = 0; link; i< 5; i++) {
		link = document.createElement('a');
		link.innerHTML = 'Link' + i;
		//  variable i get its value increased with 1 for each iteration of the loop, and since the onclick event isn’t being executed, just applied to the a element, it adds up. 
		link.onclick = function () {
			alert(i);

		link.onclick = function(num) {
			// execute right away to return a function with outer parameter i as num for onclick event later. 
			return function() {
				alert(num);
			}(i);
		}
		};
	}
}

function myModule() {
	var name = 'tim', age = 28;
	return function greet() {
		return "name: " + name + " ; " + "age: " + age;
	};
}




var perosn = function () {
	var name = "Robert";
	return {
		getName: function() {
			return name;
		},
		setName: function(newName) {
			name  = newName;
		}
	};
}