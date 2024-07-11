// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
//        1             2               4            8 byte

// ..................string method.............................

// 1. trim

// let text="     hello        ";
// let text1=text.trim();    //hello
// console.log(text1);

// 2. pad()
// let text = "5";
// let padded = text.padEnd(2,"+");    //5+
// console.log(padded);


// 3. slice
// text1="helo ma";
// let t1=text1.slice(0,1);    //h
// console.log(t1);

// 4. split() convert into array
// text1="he,loma";
// let t1=text1.split(",");    //['he','loma']
// console.log(t1);

// ........................math method...................
// 1.round
// console.log(Math.round(4.5)); //5 nearest int
// console.log(Math.ceil(5.2)); //6  up
// // console.log(Math.floor(5.2)); //5  down
// console.log(Math.min(5,0,2,1)); //0
// console.log(Math.max(5,0,2,1)); //5
// // console.log(Math.abs(-8)); // 8 
// console.log(Math.sqrt(16)); // 4 
// console.log(Math.random()); 
// console.log(Math.trunc(3.02)); //5  give  integer value

// console.log(Number.isSafeInteger(8.8));    //false     //isintger or issafeiteger


// .......................date strng.................
// const d=new Date();
// console.log(d.toDateString());

// .......................array......................

// const fruit=["mango"];
// fruit.push("lemon"); //add at last
// fruit.push("apple");
// fruit.unshift("card"); // add at first
// fruit.shift();  // remove at first
// console.log(fruit.pop()); // remove at last                //["mango","lemon"]
// console.log(fruit);

// let x=2+4;
// const car=["car",1,2,"car2"];  //["car",1,2,"car2",6]
// let array1=car.concat(x);
// console.log(array1);

// ......................sorting array-number wise.....................
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});   
// console.log(points);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());
// console.log(fruits.sort());
// console.log(fruits.reverse());

// ..........................arrya print..................
// const arr=[1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// .....................max umber........................

// const arr=[1,2,3,4,5];
// function myfun(arr)
// {
//     return Math.max.apply(null,arr);    //max number

// }
// console.log(myfun(arr));

// const fruits = ["Banana", "Orange", "Apple"];
// delete fruits[0];
// console.log(fruits);                          //[empty, 'Orange', 'Apple']
//  console.log(fruits instanceof Array); //true

// .......................arrya flat()............
// a1=[[1,2],["a","string"],[1,"1.5"]];
// let a2=a1.flat();
// console.log(a2);                //[1, 2, 'a', 'string', 1, '1.5']

// .....................foreach loop...............
// var Array1=["a","b","c"];

// Array1.forEach(function(v,i) {
//    document.write(i+v+"<br>");
// }
    
// );
// .....................some $ every.............
// var arr=[10,15,4,18];
//  let a1=arr.some(adult);
//  document.write(a1);

//  function adult(val)
//  {
//     return val>=18;
//  }

