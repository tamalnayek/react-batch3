


/*
    How to create function? 2 ways
    
    1. function-declaration
        => Named function
        => function-object created at scope creation-phase
        => always get hoist with function-object
    2. function-expression
        => anonymous function
        => function-object created at scope execution-phase
        => we can invoke after expression
*/


//---------------------------------------------
// 1. function declaration
//---------------------------------------------

// console.log(add(12,13))

// function add(n1, n2) {
//     return n1 + n2
// }

// console.log(add(12,13))


//---------------------------------------------
// 2. function expression / Anonymous function 
//---------------------------------------------

// console.log(add(12,13)) // error

// let add = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13))



//---------------------------------------------
// function parameters
//---------------------------------------------


// function func(a, b, c, d) {
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
//     console.log(arguments[3])
// }
// func(10, 20, 30, 40);


//---------------------------------------------
// can we overload functions? No
//---------------------------------------------


// function getFood(){
//     return "No Food"
// }
// function getFood(pay) {
//     if (arguments.length === 0) return "No food"
//     return "biryani"
// }

// console.log(getFood());




//---------------------------------------------
// function with default param(s)  => ES6
//---------------------------------------------


// function func(a=1, b=2) {
//     // if (!a) a = 1
//     // if (!b) b = 2
//     // or
//     // a=a||1;
//     // b=b||1;
//     console.log(a)
//     console.log(b)
// }
// func(undefined, 20)



//---------------------------------------------
// function with rest param  => ES6
//---------------------------------------------

// function func(a, b, ...rest) {
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }

// func(10, 20, 30, 40, 50)




//---------------------------------------------
// FP Principles
//---------------------------------------------


/*
    // .js-language , 
    
     ==> functions are first-class values/citizens

    - A function can be stored in a variable or value/object
    - A parameter of a function can be a function
    - The return value of a function can be a function

*/



//---------------------------------------------
// - A function can be stored in a variable or value/object
//---------------------------------------------


// function greet() {
//     console.log('Hello..')
// }

// let sayHello = greet;
// sayHello();




//---------------------------------------------
// - A parameter of a function can be a function
//---------------------------------------------


/* 
function greet(f) {
    console.log("=========================");
    if (f) {
        f()
    } else {
        console.log('hello..')
    }
    console.log("=========================");
}


greet();
let tn = function () { console.log('vanakkam') }
greet(tn);

// e.g

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort();
let asc = function (x, y) { return x - y }
nums.sort(asc)
console.log(nums);  

 */




//---------------------------------------------
// - The return value of a function can be a function
//---------------------------------------------



// function teach() {
//     console.log("teaching .js");
//     let learn = function () {
//         console.log('learning .js ');
//     }
//     // learn();
//     console.log('teaching ends');
//     return learn;
// }

// let learnFunc = teach();
// learnFunc()
// learnFunc()
// learnFunc()




//---------------------------------------------
// - Higher-Order-Programming / Function
//---------------------------------------------



/*
   
A function that does at least one of the following
is a Higher Order Function.

    1. Takes one or more functions as arguments.
    2. Returns a function as its result.

*/


/* function logBefore() {
    console.log("before : Log");
}

function logAfter() {
    console.log("after : Log");
}

function f1() {
    console.log('f1()');
}
function f2() {
    console.log('f2()');
}


function logAround(f) {
    return function () {
        logBefore();
        f();
        logAfter();
    }
}


let f1WithLog=logAround(f1);

f1WithLog(); */




//---------------------------------------------
// - Function closures
//---------------------------------------------



/*
A closure is a function having access to the parent scope,
even after the parent function has closed.
*/

/* 
function teach(sub) { 
    console.log('teaching ' + sub);
    let notes = sub + "-notes"
    let fun="bla bla";
    function learn() {
        console.log("learning with "+notes);
    }
    // learn();
    console.log('teaching ends');
    return learn;
}


let learnFunc=teach('.js');
learnFunc()
learnFunc();
 */




// why / where we need closures ?

/*
   // ==> to abstract public behav of module
*/


/*
   e.g : counter-module
           - count
           - increment()
           - get()
*/



// counter module
//----------------------------------------------------

// self-executable function ==> module design pattern

const counter = (function () {
    let count = 0;  // private
    function increment() {
        count++;
    }
    function get() {
        return count;
    }
    return {
        inc: increment,
        get: get
    };
})();



//----------------------------------------------------
