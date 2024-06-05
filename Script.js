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

//array in js for loop 

 //let names = ["nikhil","Nikita","omkar","vinay"];

// for (let idx = 0; idx < names.length; idx++){
//     console.log(names[idx]);
// }


//for of loop 

// for(let el of names){
//     console.log(el.toUpperCase());
// }


//sum of array and avg 

// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for (let val of marks){

//    // sum = sum + val;
//    sum += val

// }

// let avg = sum/marks.length;
// console.log(`avg mark of the class = ${avg} `);



// let items = [250, 645 , 300 , 900 , 50]
 
// // let idx = 0;
// // for (let val of items){
// //     console.log(`value of index ${idx} = ${val}`);
// //     let offer = val/10;
// //     items[idx] = items[idx] - offer;
// //     console.log(`value after offer = ${items[idx]}`)

// //     idx++;
// // }

// for (let i = 0 ; i < items.length ; i++){

//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// array push method 

// let num = [2,3,4,5,6,7];

//num.push(8,9,10);

// //pop method 
// console.log(num);

// let deletedIteam = num.pop();
// console.log(num);
// console.log("Deleted" , deletedIteam);

//toSting method 

// console.log(num);
// console.log(num.toString());


//let num = [1,2,3,4,5,6,7];

//change elemenet 
//num.splice(2,2,101,102);

//add Element 
//num.splice(2,0,101);

//delete Element
//num.splice(3, 1);
//console.log(num);

//function

// function myFuction(){
//     console.log("dwiqodniwq");
//     console.log("dnkqenbfdjbqm x");
// }

// myFuction();


//Arrow Function
//   let arrowSum = (a,b) =>{
//     //console.log(a+b);
//     return a+b;
// }


function countVowels(str){
  let count = 0;
    for(const char of str){

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}
