// synchronous
// function createGreet(name, age) {
//     return name + ", who is " + age + " years old."
// }
// function greet(message) {
//     console.log(message);
// }

// var myMessage  = createGreet("Eric", 28);
// greet(myMessage);

function greetNow(name, age) {
    var message = name + ", who is " + age + " years old.";
    return function greet() {
        console.log(message);
    };
}

var bobGreeter = greetNow("Bob", 44);
bobGreeter();

