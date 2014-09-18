function Product(name, price) {
	this.name = name;
	this.price = price;
	if(price < 0)
		throw RangeError('cannot create product ' + name + ' with a negative price.');
	return this;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}
Food.prototype = new Product();

var cheese = new Food('feta', 5);

// The only way to create a new scope is through the function keyword. Nothing else, not even for ... in blocks create new scopes.
// The var statement declares a variable as local to the current scope and the entire current scope, not just from the var statement onward. These local variables shadow any existing variables from outer scopes.
// All variables except "this" and "arguments" follow lexical scope. Their meaning is defined by the physical location in the code.
// The variables "this" and "arguments" change at every nesting level. If you want to preserve them in a closure, then you need to first create a reference to their value through another variable that follows lexical scope.
// The value of "this" is defined by how the function is called. You can control this through use of apply and call.
