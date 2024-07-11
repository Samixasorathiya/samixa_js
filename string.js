// // const str = "JavaScript is awesome";

// // const substring1 = str.substr(4);
// // console.log(substring1); // Output: "Script is awesome"

// // const substring = str.substr(4, 10);
// // console.log(substring2); // Output: "Script is"

// // const str1 = "JavaScript is awesome";

// // const substrin = str1.substring(0, 10);
// // console.log(substrin); // Output: "JavaScript"
// // console.log(str1);

// // const str1 = "Hello, World!";
// // console.log(str.substring(7)); // Output: "World!"
// // console.log(str.substr(0, 5)); // Output: "Hello"
// // console.log(str.slice(7, 12)); // Output: "World"

// // let fruits = ['Grapes', 'Kiwi','yellow'];
// // let moreFruits = ['Grapes', 'Kiwi'];
// // let allFruits = fruits.concat(moreFruits); // ['Apple', 'Orange', 'Grapes', 'Kiwi']
// // console.log(fruits)
// // or
// // let allFruits = [...fruits, ...moreFruits]; // ['Apple', 'Orange', 'Grapes', 'Kiwi']
// // let numericArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// // let a=[...numericArray].sort(function(a,b) {
// //     return b-a
// // });
// // console.log(a)
// // console.log(numericArray)

// // for(i=0; i<numericArray.length;i++)
// // {
// //     console.table(numericArray[i]);
// // }

// // numericArray.forEach((e)=>console.log(e));

// // for(let i of numericArray){
// //     console.log(i)
// // }

// // let str="hello world";
// // let sp=str.split("");
// // console.log(str)
// // console.log(sp)

// // let numericArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// // let jn=numericArray.join(" ");
// // console.log(jn)

// // const arr=[
// //     {fname:"radha",lname:"patel"},
// //     {fname:"riya",lname:"patel"},
// //     {fname:"maya",lname:"patel"}
// // ];
// // let text="";
// // for(i=0; i<arr.length;i++)
// // {
// //     text+=arr[i].fname+" "+arr[i].lname + `\n`;
// // }
// // console.log(text);
// // arr.forEach((x)=>console.log(x.fname))

// // let a=arr.map(function abc(e){
// //  return e.fname+" "+e.lname;
// // });

// // console.log(a);
// // console.log(arr);

// // const fruits=new Map([
// //     ["name","samixa"],
// //     [1,"this is one"],
// //     [{},"this is object"],
// //     [()=>{},"aerrow fun"],
// // ]);

// // fruits.forEach((v,k)=>{console.log(k+" "+v)});

// // console.log(fruits)
// // // console.log(fruits.keys());
// // // console.log(fruits.values());
// // fruits.set(12,"tweleve");                            //set in map
// // fruits.set(12,"ssssssssssssssss")
// // console.log(fruits.get(12))      //get in map
// // console.log(fruits)

// // const data=new Set([1,2,3]);
// // data.add(8);                                          //add in set
// // data.delete(1);
// // // data.clear();
// // data.forEach((e)=>{console.log(e)});
// // console.log(data)

// //.....................object..............
// // let obj={
// //     name:"samixa",
// //     lnm:"sorahiya",
// //     1:"one",
// //     arr:[1,2,3],
// //     sam:{
// //         city:"surat",
// //         country:"india"
// //     },
// //     fullname:function(){
// //         return this.name+" "+this.lnm;
// //     }
// // };

// // with(obj){
// //     console.log(name+fullname()); // samixa samixa sorathiya
// // }

// // console.log(obj.name);
// // console.log(obj.lnm);
// // console.log(obj.arr[0]);
// // console.log(obj.sam.city+" "+obj.sam.country);
// // console.log(obj.fullname())
// // console.log(obj);

// // ..........................with keyword..............

// // ..............constructor object..........

// // function Student(fnm,lnm,city){
// //     this.fname=fnm;
// //     this.lname=lnm;
// //     this.city=city;
// // }
// // Student.prototype.fullname=function(){
// //     return this.fname+" "+this.lname;
// // }

// // let stud1=new Student("samixa","patel","surat");
// // console.log(stud1.fullname());  //samixa patel

// // Array.prototype.su/m())

// // .................date()................

// // let data=new Date();

// // function todaydate(data){
// //     let year=data.getFullYear();
// //     let day=data.getDay();
// //     let date=data.getDate();
// //     return `${year}-${date}-${day}`;

// // }

// // console.log(todaydate(data));

// const worksDuration = [
//   {
//     name: "Writetutorials",
//     duration: 120,
//   },
//   {
//     name: "Running",
//     duration: 60,
//   },
//   {
//     name: "Proccess",
//     duration: 240,
//   },
// ];

// worksDuration.push({
//   name: "ram",
//   duration: 150,
// });

// worksDuration.unshift({
//   name: "sita",
//   duration: 600,
// });

// //  console.log(worksDuration);
// //  worksDuration.pop();
// //  console.log(worksDuration.length);

// // for(i=0; i<worksDuration.length;i++)
// // {
// //     let ele=worksDuration[i];
// //     console.log("index "+i+" at "+ele.name+" "+ele.duration);
// // }

// // let newarr=worksDuration.map((item)=>{
// //     return item.name+" "+item.duration;
// // });

// // console.log("new arr is "+newarr);

// // let sort=[...worksDuration].sort(function(a,b){
// //     return a.duration-b.duration;
// // });

// // console.log(worksDuration);
// // console.log(sort)

// // const students= [
// //     {
// //       name: "a",
// //       age: 22,
// //       className: "java"
// //     },
// //     {
// //       name: "aa",
// //       age: 22,
// //       className: "java"
// //     },
// //     {
// //       name: "aaa",
// //       age: 22,
// //       className: "java"
// //     },
// //     {
// //       name: "ab",
// //       age: 21,
// //       className: "Node Js"
// //     },
// //     {
// //       name: "abb",
// //       age: 21,
// //       className: "Node Js"
// //     },
// //     {
// //       name: "abbb",
// //       age: 21,
// //       className: "Node Js"
// //     },
// //   ];

// //   const result = Object.groupBy(students, ({ className }) => className);
// //  console.log(result)

// // let sam = {
// //   name: "abbb",
// //   age: 21,
// //   className: "Node Js",
// //   1:12
// // };

// // console.log(sam.name);
// // console.log(sam["1"])

// const students = [
//   {
//     name: "a",
//     age: 22,
//     className: "java",
//   },
//   {
//     name: "aa",
//     age: 22,
//     className: "java",
//   },
//   {
//     name: "aaa",
//     age: 22,
//     className: "java",
//   },
//   {
//     name: "ab",
//     age: 21,
//     className: "Node Js",
//   },
//   {
//     name: "abb",
//     age: 21,
//     className: "Node Js",
//   },
//   {
//     name: "abbb",
//     age: 21,
//     className: "Node Js",
//   },
// ];

// // const result = Object.groupBy(students, ({ className }) => className);
// // console.log(result);

// // const jsstud = result["Node Js"];
// // console.log(jsstud);

// // let name1=jsstud.map((e)=>{
// //     return e.name;
// // });
// // console.log(name1)

// // const result = students.filter((e) => e.name == "aaa");
// // console.log(result)


// // const cls=students.map((e)=>e.className);
// // console.log(cls);

// // const key=students[0];
// // console.log(Object.keys(key));

// // ...................................task 2 of object........................................
// // let myObject = {
// //     character: "McPenguinFace",
// //     origin: "Donald Duck",
// //     notes: "Classic 1939 cartoon .",
// //     canFly: true,
  
// //     chirp: function() {
// //       console.log("CHIRP CHIRP! Is this what penguins sound like?");
// //     },
  
// //     sayHello: function() {
// //       console.log("Hello, I'm a penguin and my name is " + this.character + "!");
// //     },
  
// //     fly: function() {
// //       if (this.canFly) {
// //         console.log("I can fly!");
// //       } else {
// //         console.log("No flying for me!");
// //       }
// //     }
// //   };

// //   myObject["favoritefood"]=["piza","allo","roti"];


// //   console.log(myObject["favoritefood"][1]);

// //   const firstfavfood=myObject["favoritefood"][0];
// //   console.log(firstfavfood);
  
// //   myObject["favoritefood"].push("panipuri");
// //   console.log(myObject);
// //   console.log(myObject["favoritefood"].length)

// //   var lastfavfood=myObject["favoritefood"];
// //   const _data=[...lastfavfood]
// //   _data.splice(3,1,"pineapple");
// //   console.log(_data);
// //   console.log(lastfavfood,"key");

// //   for(i=0;i<lastfavfood.length;i++){
// //         console.log(lastfavfood[i])
// //   }

// // myObject["outfit"]={
// //     hat:"baseball cap",
// //     shirt:"tshirt",
// //     pant:"cargo",
// //     shoes:"flip"
// // };

// // const penguinHatType=myObject.outfit.hat;
// // console.log(penguinHatType,"  hat")
// // myObject.outfit.accessory="pocket watch";
// // myObject.outfit.hat="top hot"

// // delete myObject.outfit.pant;
// // console.log(myObject)
// // let cloth=myObject.outfit;
// // for(let x in cloth){
// //     console.log(cloth[x])
// // }


// let userInput;
// do {
//   userInput = prompt("Enter a positive number:");
// } while (isNaN(userInput) || userInput <= 0);

// console.log("You entered: " + userInput);


let s = "1,23||4,5,6!7";
let numbers = s.split(/[,\|\|!]+/);

console.log(numbers);