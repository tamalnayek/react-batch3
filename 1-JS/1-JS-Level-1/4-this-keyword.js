
"use strict"




/*
    function-binding
    --------------------

    ==> executing function on object
    
    types
    
    - static 
    - dynamic

*/




//------------------------------------------------
// static function-binding
//------------------------------------------------

/*
function sayNameForAll() {
    console.log('im ' + this.name);
}

let p1 = {
    name: 'Nag',
    sayName: sayNameForAll
};

let p2 = {
    name: 'Ria',
    sayName: sayNameForAll
};

// sayNameForAll();  // error , function not bound to any object , this ==> undefined
p1.sayName();
p2.sayName();

*/


//------------------------------------------------
// dynamic function-binding
//------------------------------------------------

let tnr = { name: 'Nag' }
Object.preventExtensions(tnr)


function ibmTraining(sub, duration, location) {
    console.log(`the trainer : ${this.name} , teaching => ${sub} for ${duration} days in ${location}`);
}


// way-1: call()

// ibmTraining.call(tnr, 'react.js', 3,"BLR")

//way-2: apply()

// ibmTraining.apply(tnr, ['react.js', 3,'PNQ])

// way-3: bind()


// let reactIBMTngByNag=ibmTraining.bind(tnr, 'react', 3)
// reactIBMTngByNag('BLR');
// reactIBMTngByNag('PUNE');
// reactIBMTngByNag('KOL');



// ------------------------------------------------
// summary
// ------------------------------------------------

// function func(){
//     console.log(this)
// }
// func();

// let o1={name:'O1',func:func}
// o1.func();

// let o2={name:'O2'}
// func.call(o2)



// ------------------------------------------------
// Quiz
// ------------------------------------------------

// // let pName = "Global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log('im ' + pName); // scope's hierachy data
//         console.log("im " + person.pName); // referering obj's data
//         console.log("im " + this.pName); // scope-owner's data
//     }
// };

// // person.sayName();
// let oldPerson = person;
// person = { pName: 'Ria' }
// oldPerson.sayName();


//---------------------------------------------------------------
function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function (sub) {
            console.log(this.name + ' teaching ' + sub)
            let notes = sub + '-notes'
            let self=this;
            let learn = function () {
                console.log(this.name + " learning with " + notes +" from "+ self.name)
            }
            console.log('teaching ends');
            return learn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    const trainer = new Trainer('Nag')
    const e1 = new Employee('E1')
    const e2 = new Employee('E2')
    let learnFunc = trainer.doTeach('react.js');
    learnFunc.call(e1);
    learnFunc.call(e2);
}
sessionStart();
//---------------------------------------------------------------

