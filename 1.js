
// console.log("hello");

// document.write("samixa is here");

// alert("alert...");

// const p=3.14;

// HTML DOM METHOD:
document.getElementById("test").innerHTML="dom method is here..."

// variable ->var let const

// const pi=20;           
// console.log(pi);      //20

//  function sum()
//  {
//     const pi=30;
//     console.log("block const "+pi);  //30
//  }
//  sum()

// console.log(pi);      //20

/////////////////////////operator///////////////////////

// // arithmetic => 
// assignment =>
// logical =>
// comparison operator =>
// typeof operator


let a=10, b=20;
// console.log(5 ** 2); // 25
// console.log(a++); // 10
// console.log(++a); // 12
// console.log(a--); // 12
// console.log(--a); //10

// console.log("0"==false); //true
// console.log("0"!=false); //false  //  0!=0
// console.log(2!=false); // true
// console.log("0"===false); //false

let a1=2,b1=3,c;

// c=--a1 && b1++
// console.log("c is : ",c);//3

// var d=30;
// var d=40;
// console.log(d);//40

// console.log((10<3)?"True": "false")
//  console.log(typeof(10))

//  console.log(typeof("10"))
//  console.log(typeof(true))
//  console.log("5"+10)  //510
//  console.log(typeof(10 + "5")) //string
//  console.log(10 - "5")     //5
//  console.log("5"-10)     //-5
//  console.log(typeof(10 - "5")) //number
// console.log("100" * 5)
// console.log(typeof("100" * 5))
// console.log(100 + "a")
// console.log(typeof(100 + "a"))
// console.log(100 * "a")
// console.log(typeof(100 * "a"))


// console.log(s1); //undefined
// var s1=90;


// var s={};
// console.log(typeof(s)); //object
// console.log(false == null);  //false


// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// console.log(myFunction(10,10));




// let p1=3,p2=4;
// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// document.getElementById("test").innerHTML = myFunction(p1, p2);
//  console.log(myFunction(p1, p2));

// const person = {
//         firstName: "John",
//         lastName: "Doe",
//         id: 5566,
//         fullName: function() {
//           return this.firstName+this.lastName;
//         }
//       };
//       console.log(person.fullName());

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
   
//   };
//   person.name = function() {
//     return this.firstName + " " + this.lastName;
//     return (this.firstName + " " + this.lastName).toUpperCase();
//   };
//   console.log(person.name());
//   console.log(person);


// for (let x in person) {
//    console.log( x+person[x]);
// };

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// find max number in array
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});
// console.log(points[0]);

// const number = [45, 4, 9, 16, 25];
// let text = "";
// for (let x in number) {
// text += number[x]+" ";

// } 
// console.log(text);

//...............................loop.............................. 


// let text = "";
// for (let i = 1; i <= 5; i++) {
// text = text + i +" ";
// console.log(text);
// }

// const car=["bmw","audi","volvo"];
// let p=" ";
// for(x of car)
// {
//     p+=x+" ";
// }
// console.log(p);

// let text=" ";
// let i=0;
// while (i<=10) {
//     text+=i+" ";
//     i++;
// }
// console.log(text);



// let text=" ";
// let i=1;
// do {
//    text += i + "\t";
//     i++;
// } while (i < 10);
// console.log(text);

// .........................................string  method...................................

// let text="012 45";
// let t1=text.slice(0,4);
// console.log(t1);

// let text="hello cat this cat is beautyful.";
// text=text.replaceAll("cat","dog");
// console.log(text);