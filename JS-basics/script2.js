/*//////////////////////////////////////
// Lecture: Hoisting

calAge(1999);

function calAge(year){
    console.log(2020 - year); 
}

//retirement(1999);

var retirement = function(year){
    console.log(65 - (2020 - year));
}

//variables
console.log(age);
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);*/



/*//////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}
*/

/*//////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
function calAge(year){
    console.log(2020 - year);
}

var john = {
    name: 'john',
    year: 1999,
    calAge: function(){
        console.log(this);
        console.log(2020 - this.year);
        
         //function fun(){
        //    console.log(this);
       // }
        // fun();
    }
}
john.calAge();

var mike = {
    name: 'mike',
    year: 1996
};

//borrow function of john
mike.calAge = john.calAge;
mike.calAge();
*/


