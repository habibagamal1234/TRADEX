//---------------------------------session1-------------------------------//
var a=100;
var b=200.5;
var c=1e2;
var d=2.4;
/*Smallest_integer*/

console.log("Smallest_integer:", Math.floor(Math.min(a,b,c,d)));

/* use the variable a +d one time to get output 10000 */

console.log("Result",(a/2)*Math.floor(b));

/*get integer 2 from d variable with 4 methods */ 

console.log("int1",Math.floor(d));

console.log("int2",Math.trunc(d));

console.log("int3",parseInt(d));

console.log("int4",d.toFixed(0));
/*use variable bed to get string 66.67 and number 67 */

console.log((parseInt(b)/Math.ceil(d)).toFixed(2).toString());

console.log(Math.ceil(Math.ceil(b)/Math.ceil(d)));


/* includes slice & charAt to get from*/
var a = "hello from javascript";
console.log(a.slice(6, 10));

var from = "";

for (var i = 6; i < 10; i++) {
    from += a.charAt(i);
}
console.log(from);
/* 8s*/
for (var i = 0; i < 8; i++) {
    from += a.charAt(a.indexOf('s'));
}
console.log(from);
/*return array ['hello'] */
console.log(a.split(" ",1));
/*use only substr and template literals (" ")to get hello script */

console.log(a.substr(0, 5)+ " "+a.substr(15, 21 )); 

/*solution must be dynamic and string may change make the first and last letter capital and any letter in tha half small*/
console.log(a.charAt(0).toUpperCase()+a.slice(1, -1).toLowerCase()+a.charAt(a.length - 1).toUpperCase());
//---------------------------------session2-------------------------------//
//task 2
let text="Your javaScript";
if(((text.length+text.length).toString())=="30"){
    console.log("30");
}
//task 3
if(text[5]=="j"){
    console.log("j");
}
//task 4
if(typeof text=="string"){
    console.log("string");
}
//task 5
if(typeof (text.length)=="number"){
    console.log("number");
}
//task 6
if((text.slice(0,4)+text.slice(0,4))=="YourYour"){
    console.log("YourYour");
}
//task7
var degree=65;
if(degree>50)
    console.log("fail");

else if(degree<50 && degree>70)
    console.log("good");

else if(degree>70)
    console.log("excellent");
//-------------------------------------------------------------------//
//task1
let myfriends=["sara","soha","ahmed","ali"];
console.log(myfriends.slice(0,3));
//task2
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [...arrOne, ...arrTwo].sort().reverse();
console.log(finalArr);
//task3
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
console.log(arr2[2].toLowerCase()+arr1[2].toLowerCase()+arr2[3].toLowerCase());
//--------------------------------------------------------------------//
let Zero = 0;
let counter = 3;
let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];

/*task #1 ["Osama", "Elham", "Maryan", "Ahmed"]; */
console.log(my.reverse().slice(--counter));

/*task #2 ["Elham", "Maryan"] */

console.log(my.reverse().slice(++Zero,++counter).reverse());

/*task #3 "Elryan" */
my.push("Elryan");
console.log(my[6]);

/*task #4 "aN" */
console.log(my[6][4]+my[6][5].toUpperCase());
//--------------------------------task-----------------------------------//
/*task 1 */
let job = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(`Salary is ${salary}`);

/*task 2*/
let holidays = 0;
let money = 0;

if (holidays == 0){
  money = 5000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 1 || holidays == 2){
  money = 3000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 5) {
  money = 0;
  console.log(`My Money is ${money}`);
}
else {
  money = 0;
  console.log(`My Money is ${money}`);
}
//-----------------------------session3------------------------------------------//
/*task 1*/
var arr=['ahmed','cairo',1253,true ,'id','age']
//escape 'cairo'  //stop 'id'
for(var i=0;i<arr.length;++i){
    if(arr[i]=="cairo")
        continue;
    if(arr[i]=="id")
        break;
    console.log(arr[i]);
}
/*task 2*/
var friends=['ali',2,'ahmed',3,5,'sara']
var names=[]//strings from friends
for(var i=0;i<arr.length;++i){
    if(typeof(friends[i])=="string")
        names.push(friends[i]);
}
console.log(names);

/*task3 */
var friends=['Ahmed',"Sayed","Eman","Mahmoud","Ameer","Osama","Sameh"];
var c=0;
let letter='a';
for(var i=0;i<friends.length;++i){
    if(friends[i][0]==letter.toUpperCase())
        continue;
    c++;
    console.log(`${c}=>${friends[i]}`);
}
//1=>Sayed
//2=>Eman
//3=>Mahmoud
//4=>Osama
//5=>Sameh
 /*task */
let products=["Product A","Product B","Product C","Product D"]
let colors=['red','green','blue']
let model=['2020','2022']
for(var i=0;i<products.length;++i){
    document.write(`<h2 class="bg-dark text-primary w-50"> Type : ${products[i]} ____</h2> `);
    document.write(`<h4 class="text-danger" > ---Colors--- </h4>`);
    for(var x=0;x<colors.length;++x){
        document.write(`<span>${colors[x]}</span> `);
    }
    document.write(`<h4 class="text-warning">---model---</h4> `);
    for(var y=0;y<model.length;++y){
        document.write(`<span>${model[y]}</span> `)
    }
}
/*task1 */
function years(start, end) {
   document.write(`<select>`); 
  
  for (let year = start; year <= end; year++) {  
    document.write(`<option>${year}</option>`)
      
  }
  document.write(`</select>`)
}
years(2004,2024);
/*task2 */
function print(lest){
  for(var i=0;i<lest.length;++i)
    console.log(lest[i]);
}
let lest=["habiba","gamal",20];
print(lest);

/*task3 */
function num(start,end,b,c){

for(var i=start;i<end;++i){
  if(i==c)
      continue;
  if(i==b)
      break;
  console.log(i);
}
}
num(1,20,10,5);
