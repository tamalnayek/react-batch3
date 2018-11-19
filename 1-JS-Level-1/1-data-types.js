"use strict";

console.log('-data-types-');



/*
    2 types
    --------
    1. simple / primitives ==> values
        a.  undefined
        b.  string
        c.  number
        d.  boolean
    2. complex / reference ==> objects
    
*/



//-----------------------------------------------------------------
// 1. simple / primitives ==> values
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// a. undefined
//-----------------------------------------------------------------

var v;



//-----------------------------------------------------------------
// b. string
//-----------------------------------------------------------------

var name = "Nag"
var selection = 'abc'
var dyanmicString = "the trainer is " + name
// or ==> string-interpoltion ( es6 )
var dyanmicString2 = `the trainer is ${name}`
var result = `the sum of 1+ 2 is ${1 + 2}`
var multiLineString = `
    Line -1
    Line -2
    Line -3
`
var htmlTemplate = `
    <div>
        <h1>react by ${name}</h1>
    </div>
`;


//-----------------------------------------------------------------
// c. number
//-----------------------------------------------------------------

var count = 12;
var cost = 12.12;



//-----------------------------------------------------------------
// d. boolean
//-----------------------------------------------------------------

var isFound = false;


// imp-note:

// falsy-values ==> false,"",0,undefined,null,NAN

// Ref : https://dorey.github.io/JavaScript-Equality-Table/





//-----------------------------------------------------------------
// 2. complex / reference ==> object
//-----------------------------------------------------------------


//  syntax:

/*
    var ref=new Constrcutor()
*/

// in ES-5,  function ==> class/construtor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// or

//  from ES-6,  class-syntax

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

var p1 = new Person('Nag', 35)
var p2 = new Person('Ria', 3)

/*
    imp-note: by default, 
    => objects are extensible & configurable
*/

p1.techSkill = "java,js"
delete p1.age

Object.preventExtensions(p2)

// p2.techSkill = "java" // error




//-----------------------------------------------------------------
//literal-style objects
//-----------------------------------------------------------------


//-----------------------------------------------------------------
// A. Object
//-----------------------------------------------------------------

var config = new Object()
config.url = "http://"
config.httpMethod = "GET";
config.onSuccess = function () {
    console.log('im executing on success')
}

// or


var newConfig = {
    url: "http://",
    httpMethod: 'GET',
    onSuccess: function () {
        //..
    }
}


//-----------------------------------------------------------------
// B. Array/List
//-----------------------------------------------------------------

var arr = new Array();
arr.push("item1")
arr[1] = "item-2"

// or

var newArr = ["item1", "item-2"];




//-----------------------------------------------------------------
// C. RegExp
//-----------------------------------------------------------------

var re = new RegExp("\\d{10}");

// or literal-style

var newRe = /\d{10}/;
var adharPattern = /\d{4}-\d{4}-\d{4}/;


//-----------------------------------------------------------------
// D. Function
//-----------------------------------------------------------------

var add=new Function('n1','n2','var result=n1+n2;return result')


// or literal-style

function add(n1, n2) {
    var r = n1 + n2; return r;
}


//-----------------------------------------------------------------

/*
    way-1 : '.' notation
    way-2 : '[]' notation , if property name has 'space' or 'dash' or 'digit'
*/

var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: 'one',
    100: 'hundred'
};

// How to access obj's properties ?
console.log(person.name)
console.log(person["home-address"])
console.log(person['1'])
console.log(person[1])