console.log('-index.js-')

let greetMod = require('ibm-kol-greet-new');
greetMod.greet('en');
greetMod.greet('es');
greetMod.greet();

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]

let _ = require('lodash')

console.log(_.difference(arr1, arr2))


import primaryItem,{item1 as veg,item2 as nveg} from './hotel/menu';
console.log(primaryItem);
console.log(veg);
console.log(nveg);
