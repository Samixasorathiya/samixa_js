// ...................../* 5 = Students Marks */

// let a=Number(prompt("enter math mark :"));
// let b=Number(prompt("enter java mark :"));
// let c=Number(prompt("enter c++ mark :"));

// console.log("math :"+a);
// console.log("java :"+b);
// console.log("c++ :",c);
// let mark=a+b+c;
// let per=mark/3;

// console.log("mark is: ",mark);
// console.log("per is: ",per);

// if(per>33)
// {
//     console.log("pass");
// }else{
//     console.log("fail");
// }

/* 
    continue statement -> for , while , do-while
                       -> continue , break
    for in , for of (array , object) -> forEach
*/

// let x = Number(prompt("Enter x : "));
// for (let i = 1; i <= x; i++){
//         console.log(i);
// }
// let x = Number(prompt("Enter x : "));
// let txt = " ";
// for (let i = 1; i <= x; i++){
//     txt = txt + i + " ";
// }
// console.log(txt);
    

/*    even  -   n   */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//         if(i%2==0) {
//             txt = txt + i + " ";
//         }
//      }
//     console.log(txt);


/*    odd  -   n   */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//         if(i%2!=0) {
//             txt = txt + i + " ";
//         }
//      }
//     console.log(txt);

// ........................./*    1 , 4 , 3 , 16 , 5 */

// let n = Number(prompt("Enter n : "));
// let txt="";
// for(i=1; i<=n; i++)
// {
//     if(i%2!=0)
//     {
//        txt=txt+i+" ";
//     }
//     else{
//         txt=txt+(i*i)+" ";
//     }
// }
// console.log(txt);

/* ......................Total 1, 2 , 3 ......, 10 = 55 */
// sum = 0;
//  for (let i = 1; i <= 10; i++)
//  {
//      sum += i;      
//  }
//      console.log("Sum is : ",sum);
     
// ......................... /* Total Odd 1 , 3 , 5 */  
// sum=0;
// for(i=1; i<=5; i++)
// {
//     if(i%2!=0)
//     {
//         sum=sum+i;
//     }
// }
// console.log("sum is :",sum);


/* ======================================================== */

// Continue and Break Statment

// let x= Number(prompt("Enter X : "));
// for (let i = 1; i <= x; i++) 
// {
//       // if (i==3)
//     if(i==3||i==7){
//       // break;
//      continue;
//   }
//  console.log(i);
// }

/* ======================================================== */

// do - while

// let i = 1;
// let x = Number(prompt("Enter X : "));
// do{
//     console.log(i++);
// }while (i<=x);