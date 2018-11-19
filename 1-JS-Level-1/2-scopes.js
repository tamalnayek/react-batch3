"use strict"

/*


    scope / execution-context
    -------------------------

        memory/stack-frame with given arg & local variables

        phase-1 : creation   / push

        ==> any variable declared with 'var' keyword any-where in scope ,
        always get hoisted with default-value to top 

        phase-2 : execution  / pop

        ==> instruction will get execute in seq

        -----------------------------------------------
        imp-note:
        => every .js-runtime has one global-scope by default
        -----------------------------------------------

        => every function-invocation also creates new-scope,
          which is child of in which scope that function has declared/created        
*/

//------------------------------------------------

// var v=12;
// console.log(v);  

//------------------------------------------------

//------------------------------------------------

// var v=12;
// function f1(){
//     console.log(v)
//     var v=13;
// }
// f1(); // f1-scope  <== global-scope

//------------------------------------------------

// -----------------------------------------------
// Quiz
/* 
var v = 12;
function f1() {
    function f2() {
        console.log(v);
    }
    f2(); // f2-scope <-- f1-scope
    var v = 13;
}
f1(); // f1-scope <--- global-scope */

// -----------------------------------------------

// -----------------------------------------------

//  var v=12;
//  var v=13;

// -----------------------------------------------

// -----------------------------------------------

// Quiz

// var v = 12;
// if (true) {
//     var v = 13;
// }
// console.log(v)

// -----------------------------------------------


// -----------------------------------------------

// problems with 'var' keyword

// => always get hoist
// => can re-declare same variable within scope
// => no block-scope


// soln: using 'let' & 'const' keywords ( es6 ) with block-scope

// -----------------------------------------------


// -----------------------------------------------

// console.log(v1)  // error
// let  v1 = 12;

// -----------------------------------------------

// -----------------------------------------------

// let v1=12;
// let v1=13;

// -----------------------------------------------

// -----------------------------------------------

// var v = 12;
// if (true) {
//     let v = 13;
// }
// console.log(v) 

// -----------------------------------------------

// const v = 12;
// v = 13;


// const trainer = { name: 'Nag' }
// trainer.name = "New Tnr"
// trainer = null; // error


// -----------------------------------------------


// -----------------------------------------------

// summary :

    /*
        use 'let' for mutable reference
        use 'const' for immutable reference
        avoid using 'var' keyword
    */

// -----------------------------------------------

// Quiz

// function func(){
//     i=100;
// }
// func();
// console.log(i);  

// -----------------------------------------------