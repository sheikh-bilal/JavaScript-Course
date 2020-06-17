/*/Function Constructor

var john = {
    name: 'John',
    year: 1999,
    job: 'teacher'
};

var Person = function(name, year, job){
    this.name = name;
    this.year = year;
    this.job = job;

}
Person.prototype.calculateAge = function(){
        console.log(2020 - this.year);
}
Person.prototype.lastName = 'Smith';


var john = new Person('John', 1999, 'teacher');
var jane = new Person('Jane', 1989, 'designer');
var mark = new Person('Mark', 1990, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


//Object.create

var personProto = {
    calculateAge: function(){
        console.log(2020 - this.year);
    }
};

var john = Object.create(personProto)
john.name = 'John';
john.year = 1999;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'jane'},
    year: {value: 1998},
    job: {value: 'designer'}
});


//Primitives vs Objects


//Primitives 
var a = 23;
var b = a;
a = 46;
console.log(a,b)


//Objects 
var obj1 = {
    name: 'John',
    age: 1999
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age)
console.log(obj2.age)

//Functions 
var age = 27;
var obj = {
    name: 'Johnas',
    city: 'lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Frans...'
}

change(age, obj);
console.log(age);
console.log(obj.city);

//Passing Functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

//fn is called callback function

function arrayCalc(arr,fn){
     var arrRes = [];
     for(var i = 0; i < arr.length; i++){
         arrRes.push(fn(arr[i]));
     }
    return arrRes;
}

function calculateAge(year){
    return 2020 - year;
}

function isFullAge(year){
    return year >= 18;
}

function maxHeartRate(x){
    if(x >= 18 && x<= 81){
            return Math.round(206.9 - (0.67 * x));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var Hrates = arrayCalc(ages,maxHeartRate)
console.log(ages);
console.log(fullAges);
console.log(Hrates);

//Functions returning functions

function interviewQues(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what UX design is?') ;
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name + ', What subject do you teach?'); 
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}

var teacherQuestion = interviewQues('teacher');
var designerQuestion = interviewQues('designer');

teacherQuestion('John');
designerQuestion('Jane');


interviewQues('teacher')('Mark')

//IIFE immedialtly invoked fun expression

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})(); 

(function(x){
    var score = Math.random() * 10;
    console.log(score >= 5 - x);
})(5); 


// Closures

function retirement(retirementAge){
    var a = ' year left until retirement';
    return function(year){
        var age = 2020 - year;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66); 
var retirementGermany = retirement(65); 
var retirementIceland = retirement(67); 

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1992);



//using closure
function interviewQues(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you explain what UX design is?') ;
        }else if(job === 'teacher'){
            console.log(name + ', What subject do you teach?'); 
        }else{
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}
interviewQues('teacher')('mark')

// Bind, call and Apply

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    pesentation: function(style, timeofDay){
        if(style === 'formal'){
            console.log('Good ' + timeofDay + ' Ladies & gentelmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. ');
        }else if (style === 'friendly'){
            console.log('Hey What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '+timeofDay + '.');
        }
    }
}

var  emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.pesentation('formal','morning');
john.pesentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = 
    john.pesentation.bind(john,'friendly');
johnFriendly('morning');

var emilyFormal = 
    john.pesentation.bind(emily,'formal');
emilyFormal('morning');
//john.pesentation.apply(emily, ['friendly', 'afternoon']);




var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr,fn){
     var arrRes = [];
     for(var i = 0; i < arr.length; i++){
         arrRes.push(fn(arr[i]));
     }
    return arrRes;
}

function calculateAge(year){
    return 2020 - year;
}

function isFullAge(limit, year){
    return year >= limit;
}

var ages = arrayCalc(years, calculateAge)
var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));
console.log(fullJapan);*/



////////////////////////////////////////////////////////
//Coding Level #7
///////////////////////////////////////////////////////


//use invoke function so main program can't effect by it if used if another code.
(function(){    
    function Question(ques, answers, correct){
    this.question = ques;
    this.answers = answers;
    this.correct = correct;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' ,this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callBack){
        var sc;
        if(this.correct === ans){
            console.log('Correct Answer!');
            sc = callBack(true);
        }else{
            console.log('Wrong Answer!');
            sc = callBack(false);
        }
        this.displayScore(sc);
    }
    
   Question.prototype.displayScore = function(score){
        console.log('Yout total Score is: '+score);
        console.log('----------------------------');
   }

    var q1 = new Question('Is javascript the coolest language in the world?', ['Yes', 'No'], 0);

    var q2 = new Question('What is the name of this course\'s teacher? ', ['John', 'Michael', 'Jonas'], 2);

    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun','Tedious'], 2);
    
    var questions = [q1,q2,q3];
    
    function Score(){
        var score = 0;
        return function(correct){
            if(correct){ score++;}
            return score;
        }
    }
    
    var totalScore = Score();

    function nextQuestion (){
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please Select Correct Answer');
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), totalScore);
            nextQuestion();
        }
        
    }
    
    nextQuestion();
})();





































































































































































