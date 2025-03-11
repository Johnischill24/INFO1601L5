/*let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966
*/

/*Task 4.1
console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!") //but "false" is true enough here
*/

/*Task 4.2
let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}
*/

/*Task 4.3
let num =0;

while(num < 10){
  console.log(num);
  num++;
}

for(let i=0; i <10; i ++){
  console.log(i);
}
*/

/*Task 4.4
for(let i=0; i< 50; i++){
    if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
      console.log('fizzbuzz');
    }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
      console.log('fizz');
    }else if(i%5 === 0){ //no? what about just 5 then?
      console.log('buzz');
    }else{              //so its not divisible by 3 or 5 then
      console.log(i);
    }
  }
*/

/*Task 5 - Date & Math
let nowTimestamp = Date.now();//store the current Date

console.log(nowTimestamp);//unix timestamp in milliseconds 1581291269848

let now = new Date(nowTimestamp);//today's Date object 

//months go from 0 - 11
let date = new Date(2019, 11, 17, 3, 24, 0);//December 17, 2019 03:24:00
//printing the date

console.log(date.toLocaleDateString("en-US"));//12/17/2019
//1 is added to month because January is 0
console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `); // 9 - 2 - 2020 

//Calculate difference between two dates in milliseconds
let difference = now - date;
//convert milliseconds to days

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);//54.6740790437368
*/

