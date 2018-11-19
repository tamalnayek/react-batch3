



// in ES-5,  function ==> class/construtor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log("im " + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log("im " + this.age + " old");
// }

// in ES6, class syntax

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = null
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " old");
    }
}


// var p1 = new Person('Nag', 35)
// var p2 = new Person('Ria', 3)

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary
    }
    saySalary() {
        console.log('i wont')
    }
    askForBonus() {
        return this.salary * 0.02;
    }

}

// let e = new Employee('Nag', 35, 1000.00)

class Boss extends Employee {

    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }

}

let boss = new Boss('Nag', 35, 1000.00)



class Abc {
    static staMethod() {
        ///
    }
}
Abc.staVar1 = 1;
Abc.staVar2 = 2;

Abc.staMethod();