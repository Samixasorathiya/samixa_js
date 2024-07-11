// function

// Hello();           // function call

// function Hello()        //  function defined
// {
//     console.log("Hello World");
// }

// Hello();           // function call

// function Add(a,b)
// {
//     console.log(a+b);
// }

// Add(10,'hello');

// function Product(a,b,c) {
//     return a*b*c;
// }

// let x = Product(1,50,6);
// console.log(x);

// console.log(Product(1,5,6));


// function as variable / anonymous function

// let fun=function()
// {
//     console.log("hello");
// }
// fun()

// let fun1=function(a,b,c)
// {
//   return a+c;
// }

// console.log(fun1(1,2,3));


// const person={
//     fullname:function()
//     {
//         return this.fname+" "+this.lname; 
//     }
// }

// const person2={
//     fname:samixa,
//     lname:sorathiya,
// }

// let a=person.fullname.apply(person2);
// console.log(a);


// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//     return this.firstName + " " + this.lastName;
//     }
//     }
//     const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//     }
//     let fullName = person.fullName.bind(member);
//     console.log(fullName);