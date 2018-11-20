"use strict"

/*

    // New syntax ( in ES6 )

    1. let & const keywords with block scope
    2. function with default &rest params
    3. string interpolation
    4. OO with class-syntax

    5. obj-literal enhancements
    6. spread operator
    7. de-structuring

    8. arrow-function

*/


//-----------------------------------------------------
// 8. arrow-function
//-----------------------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

// or

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }
//or
// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
//or
// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total
// }


// why /where we need arrow function ?


// use1: to make compact function-argumenet

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// // nums.sort(function (x, y) { return x - y });
// //or
// // nums.sort((x, y) => { return x - y });
// //or
// nums.sort((x, y) => x - y);
// console.log(nums);


// use1: to capture 'this'


let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        // let askQues = function (q) { console.log(this.name + ' answering ' + q) }
        //or
        let askQues = (q) => { console.log(this.name + ' answering ' + q) }
        console.log('teaching ends');
        return askQues;
    }
};

let askQues = tnr.doTeach()
askQues.call(tnr, "Q1")

let enemyTnr = { name: 'subbu' }
askQues.call(enemyTnr, "Q2")



//-----------------------------------------------------
// 7. de-structuring
//-----------------------------------------------------

//#1

// let person = {
//     name: 'nag',
//     age: 35
// };

// // 
// let myName=person.name;
// let myAge=person.age;
//or

// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person;
//or
// let { name, age } = person;

// let name, age;
// ({ name, age } = person);


// #2


// let nums = [10, 20, 30, 40, 50, 60, [70, 80]];

// // let n1=nums[0]
// // let n2=nums[1]
// // let n3=nums[2]

// // or

// let [n1, n2, n3, n4 = 4, , n6, [n7,n8]] = nums;


//-----------------------------------------------------
// 5. spread operator
//-----------------------------------------------------


// #1

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30]
// func(nums[0],nums[1],nums[2]) // manual spread...
// // or
// func(...nums)

// let maxNum=Math.max(...nums);


// #2

// let arr1 = [1, 2, 3]
// let arr2 = [7, 8, 9]
// let newArr = [...arr1, 4, 5, 6, ...arr2]


// #3

// let o1={x:1,y:2}
// let o2={y:3}
// let o3={...o2,...o1}




//-----------------------------------------------------
// 5. obj-literal enhancements
//-----------------------------------------------------


// let name = "Nag";
// let age = 35;


// // es5

// let person1 = {
//     name: name,
//     age: age,
//     address: 'chennai',
//     sayName: function () {
//         //
//     }
// };

// // es6

// let addressType = 'office'; // home | office | vacation
// let person2 = {
//     name,
//     age,
//     [addressType + "-address"]: 'three',
//     sayName() {
//         //..
//     }
// }