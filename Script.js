// Aritimetic oprations

/*let a = 10;
let b = 2;

console.log("a =", a , "& b =", b);
console.log(a ,"+" , b ,"=", a + b);    
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);//10^2 = 100 */

// let a = 10;
// let b = 2;

// console.log("a =", a , "& b =", b)
// //console.log("++a =", ++a);
// console.log("a++ =" , a++);
// console.log("a = ",a);

//condition statment 

// let age  = 20;

// if(age > 18){

//     console.log("Vote");

// }
// else{
//     console.log("Not vote")
// }

//even odd numbers 

// let a = 3;

// if(a % 2 === 0){
//     console.log (a ,"Number is even")
// }
// else{
//     console.log(a ,"Number is odd")
// }



// let age = 19;

// //let reuslt = age>18 ?"adult":"not adult";


//  age>18 ?console.log("adult"):console.log("not adult")

// //console.log(reuslt);



// let name = prompt("Hello!");
// console.log(name);

// let num = prompt("Enter the Number -");

// if (num%5 === 0){
//     console.log(num ,"is a multiple of 5 ")
// }
// else{
//     console.log(num ,"is a not multiple of 5 ")

// }

// let score = prompt("Enter the Student Score =");

// if(score >= 90 && score<=100){
//     console.log(score,"is a Student Score - grades is = A") ;  
// }
// else if(score >= 70 && score<=89){
//     console.log(score,"is a Student Score - grades is = B");
// }
// else if(score >= 60 && score<=69){
//     console.log(score,"is a Student Score - grades is = C");
// }
// else if(score >= 50 && score<=59){
//     console.log(score,"is a Student Score - grades is = C");
// }
// else if (score>= 0 && score<=49){
//     console.log(score,"is a Student Score - grades is = fAIL");

// }


// for loop

// for (let i = 1; i<=5 ; i++){
//     console.log("Java prohramming guide");
// }

// calultae sum of N numbers 

// let num = prompt("Enter the Number - ");
// let sum = 0;
// for(let i = 1; i<=num;i++){
//     sum = sum + i;

// }
// console.log ("sum of ", num ," numbers " ,sum);

// for-of loop

// let Name = "Java Programming Guide"

// let size =0;
// for(let i  of Name){
//     console.log("i =",i);
//     size++;

// }
// console.log("Size of String ",size);

// for-in loop 

// let Student ={
//     name : "nikhil Raut",
//     age : 25,
//     cgpa : 7.1,
//     isPass : true, 
// };

// for(let key in Student){
//     console.log("key =",key,"value = ",Student[key]);
// }

//print evven number from 0 to 100

// for(let i =1; i<=100;i++){

//     if(i%2 === 0)
//     console.log("i =", i);
   
// }


// let gameNum = 30;
// let userNum = prompt("Guess the Game Number ")

// while(gameNum != userNum){
//     userNum = prompt("Your entered wrong Number try again :");

// }

// console.log("Congratulation , you entered the right Number")

//templets literals

// let specialString = `this is template literal ${1+3+1}`;
// console.log(specialString);
// console.log("Java\tProgramming \nGuide")

//Streing Methods

// let str = "java programming guide ";
//   let newstre =str.toUpperCase();
//  console.log(str);
//  console.log(newstre);


// let userNum = prompt("Enter your Name :");
// let result =`@${userNum}${userNum.length}`;
// console.log(result);

let names = ["nikhil","Nikita","omkar","vinay"];

for (let idx = 0; idx < names.length; idx++){
    console.log(names[idx]);
}