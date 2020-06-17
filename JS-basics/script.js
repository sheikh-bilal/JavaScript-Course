/*var firstName = 'Bilal';
console.log(firstName);

var lastName = 'Ahmed';
console.log(lastName);

var check = true;
console.log(check);

var baba;
console.log(baba);*/

/******************************/
/* variable mutation and type coercion */
/*****************************
var firstName = 'Bilal';
var age = 21;
//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'student';
isMarried = false;

console.log('User Name is ' + firstName + ' & he is a ' + job + ' & is he married? ' + isMarried);

//variable mutation
job = 'driver';
age = 'twenty eight';

alert('User Name is ' + firstName + ' & he is a ' + job + ' & is he married? ' + isMarried);

var lastName = prompt('What is your LastName?');
console.log(firstName + ' ' + lastName);

//logic operator
var num1,num2;
num1 = 5; num2 = 6;

var compare = num2 > num1;
console.log(compare);

//typeof operator
console.log(typeof compare);
console.log(typeof num1);
var xyz;
console.log(typeof xyz);*/

/******************************
*   Operator Precedence
*****************************

//multiple operators
var now = 2020;
var birthday = 1999;
var fullAge =  21;
var isFullAge = now - birthday >= fullAge;
console.log(isFullAge);

//grouping
var ageBilal = 21;
var ageAhmed = 20;
var avg = (ageBilal + ageAhmed) / 2;
console.log(avg);

//multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);*/


/***** Challange 1 ********

var markMass = 70, johnMass = 75, markHeight = 1.82, johnHeight = 1.67;
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);


//if else statements
if(markBMI > johnBMI){
    console.log('Mark\'s BMI higher than John\'s');
}else{
    console.log('Mark\'s BMI lesser than John\'s');
}*/

/************Ternanry operator******
var name = 'bilal';
var age = 12; 

age >=18 ? console.log(name + ' can drink beer') : console.log(name + ' can drink juice');

var drink = age>=18 ? 'beer' : 'juice';
console.log(drink);*/

/*****************Switch statement******
var job = 'driver';
switch(job){
    case 'teacher':
        console.log(name + ' teaches kid to code');
        break;
    case 'driver':
        console.log(name + ' drives kid to school');
        break;
    default:
        console.log(name + ' does somethig cool');
}
var age = 15;
switch(true){
    case age < 13:
        console.log(name + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(name + ' is a teenager');
        break;
    default:
        console.log(name + ' is a man');
}*/ 

/*************Functions*************
function calAge(year){
    return 2020 - year;
}
console.log(calAge(1999));

function yearUntilRetire(year, name){
    var age = calAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }else{
        console.log(name + ' is already retired.');
    }
}

yearUntilRetire(1999, 'Bilal');
yearUntilRetire(1954, 'Riaz');*/

/****function expression*****

var whatToDo = function(job, name){
    switch(job){
        case 'teacher':
            return name + ' teaches kid to code';
        case 'driver':
            return name + ' drives to school';
    }
}

console.log(whatToDo('teacher','Bilal'));*/

/*************** ARRAYS **************
var names = ['bilal', 'dg', 'mark'];
var years = new Array(1990, 1991, 1992);

console.log(names);

var John = ['john', 'smith', 1990, 'designer', false];
John.push('blue');
John.unshift('Mr.');
console.log(John);

John.pop();
John.pop();
John.shift();
console.log(John);*/

/********CHALLANGE 03***********
var bills = [124, 48, 268];

function tipCal(amount){
    var percent;
    if(amount < 50){
        percent = 0.2;
    }else if(amount >= 50 && amount <= 200){
        percent = 0.15;
    }else{
        percent = 0.10;
    }
    return amount * percent;
}

var tips = [tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2])];

var finalVal = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(bills);
console.log(tips);
console.log(finalVal);*/

/**************Objects************
var john = {
    firstName: 'Bilal',
    lastName: 'Ahmed',
    year: 1999,
    family: ['john', 'james', 'mark'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'year';
console.log(john[x]);

//new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.year = 1990;  
jane['lastName'] = 'mortal';
console.log(jane);

//methods
var john = {
    firstName: 'Bilal',
    lastName: 'Ahmed',
    year: 1999,
    family: ['john', 'james', 'mark'],
    job: 'teacher',
    isMarried: false,
    calAge: function(){
        this.age = 2020 - this.year;
    }
};
john.calAge();
console.log(john);*/

/**************Challange 04***********

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    fullName: 'Mark Olive',
    mass: 78,
    height: 1.69,
    calBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}


if(john.calBMI() > mark.calBMI()){
    console.log(john.fullName + ' has a greate BMI of ' + john.BMI);
}else if(  mark.calBMI() > john.calBMI()){
    console.log(mark.fullName + ' has a greate BMI of ' + mark.BMI);
}else{
    console.log('They have same BMI');
}*/

/*********Loops************
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
    if(typeof john[i] != 'string') continue;
    console.log(john[i]);
}

for(var i = 0; i < john.length; i++){
    if(typeof john[i] != 'string') break;
    console.log(john[i]);
}*/

/********** Challange 05*************

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var percent;
            var bill = this.bills[i];
            
            if(bill < 50){
                percent = 0.2;
            }else if(bill >= 50 && bill <= 200){
                percent = 0.15;
            }else{
                percent = 0.10;
            }
            
            //tip and finalvalue added 
            this.tips[i] = bill * percent;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
}

var mark = {
    fullName: 'Mark Olive',
    bills: [77, 475, 110, 45],
    calTips: function(){ 
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var percent;
            var bill = this.bills[i];
            
            if(bill < 100){
                percent = 0.2;
            }else if(bill >= 100 && bill <= 300){
                percent = 0.10;
            }else{
                percent = 0.25;
            }
            
            //tip and finalvalue added 
            this.tips[i] = bill * percent;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
}

function avgTips(tips){
    var avg = 0;
    for(var i = 0; i< tips.length; i++){
        avg += tips[i];
    }
    return avg / tips.length; 
}

//add calculations
john.calTips();
mark.calTips();

john.average = avgTips(john.tips);
mark.average = avgTips(mark.tips);
console.log(john, mark);

if(john.average > mark.average){
    console.log(john.fullName + ' family pays high tips with an average of Rs ' + john.average);
}else if (mark.average > john.average){
    console.log(mark.fullName + ' family pays high tips with an average of Rs ' + mark.average);
}*/





