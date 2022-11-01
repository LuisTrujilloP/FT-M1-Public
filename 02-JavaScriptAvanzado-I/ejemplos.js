
// //                     Hoisting

// // CON VARIABLES


// var miVariable = "Hola";
// console.log(miVariable)

// // CON FUNCIONES


// saludar()
// function saludar(){
//     console.log("hola")
// }

// var instructor = 'Tony';

// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor);


// var instructor = 'Tony';
// console.log(instructor);// Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor); //Franco
//    }
// })();
// console.log(instructor);//Tony


// function printing() {
//    console.log(1);//1
//    setTimeout(function () {
//       console.log(2);
//    }, 1000);//4
//    setTimeout(function () {
//       console.log(3);
//    }, 0);//2
//    console.log(4);//3
// }

// printing();
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname; 
      },
   },
};

console.log(obj.prop.getFullname());//Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());// Undefined 



// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN  
// 7 / 0 // error   (Infinity)
// {}[0] // 2
// parseInt("09") // 9
// 5 && 2 // 2
// 2 && 5 // 0
// 5 || 0 // 5
// 0 || 5 // 5 
// [3]+[3]-[10] // 23
// 3>2>1 // true
// [] == ![] // false