// ..........shallow copy..............

// const p1={name:"sam"}
//  const p2=Object.assign({},p1);
//  p2.name="riya";
//  console.log(p1);
//  console.log(p2);

// ............deep copy............

// const p1={
//     name:"samixa",
//     city:{
//         name:"surat"
//     }
// }

// let p2= JSON.stringify(p1);
// console.log(p2);

// p2=JSON.parse(p2);
// console.log(p2);

// console.log(p2.city.name="amdavad"); //amdavad
// console.log(p1.city.name);      //surat

// .....................array method...........
//  txt="samixa";
//  txt=Array.from(txt);
// console.log(txt); ["s","a","m","i","x","a"]
// console.log(Array.from("sam"));

// const map = new Map([
//     [1, 2],
//     [2, 4],
//     [4, 8],
//   ]);
// console.log(Array.from(map));   // [Array(2), Array(2), Array(2)]

// const mapper = new Map([
//     ["1", "a"],
//     ["2", "b"],
//   ]);
//   console.log( Array.from(mapper.keys()));//['1','2']

// console.log(Array.from([1,2,3],(x)=> x+x)); //[2, 4, 6]n

// console.log(Array.of("a","b")); //['a', 'b']
// console.log(Array.of(1,2)); //[1, 2]
// console.log(Array.of('foo')); //[foo]

// const a1=[1,2,3,4,5];
// console.log(a1.at(0)); //1
// console.log(a1.concat(1,2));  //[1, 2, 3, 4, 5, 1, 2]
// const a2=a1.entries();
// console.log(a2.next().value);  [0,1]
// for(const x of a2)
// {
//     console.log(x);
// }                                //[0, 1]
                                //  [1,2] so on..
// .........every()..........
// const a1=[1,2,3,4,5];
// // console.log(a1.every((x)=>x<90))
// console.log(a1.every(disp))
// function disp(x)
// {
//     return x<10;
// }

// console.log(a1.fill(0)) //[0,0,0,0,0]
// console.log(a1.fill(0,1,2))     //[1,0,3,4,5]



// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   console.log(filtered)  //[12,130,44]

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

//   const c1=inventory.find(({name})=>name==="cherries");
//   console.log(c1)

inventory.forEach((element)=>console.log(element));