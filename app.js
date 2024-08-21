// class users {
//     constructor(name) {
//         this.name = name
//     }
//     sayHi(){
//         console.log(this.name)
//     }
// }
// let user = new users('Ploy')

// console.log(user)

// class user {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// let users = new user("You");
// users.sayHi();
// let users1 = new user("Konkamon");
// users1.sayHi();
// let users2 = new user("Fungsuk");
// users2.sayHi();

// console.log('---------------------')

// class ploy {
//   constructor(you) {
//     this.you = you;
//   }
//   youuu() {
//     console.log(this.you);
//   }
// }
// let ploys = new ploy("Home 2");
// ploys.youuu();

//class
// class user{
//     login(){
//         console.log('user login')
//     }
// }
// let names = new user()
// // names.login()

// class admin extends user{
//     updatePrice(){
//         console.log('admin')
//     }
// }
// const admin1 = new admin()
// admin1.login()
// admin1.updatePrice()

// class admin extends user{
//     constructor(){
//         // console.log('admin')
//     }
// }
// const admin1 = new admin()
// admin1.login()
// admin1.updatePrice()

// class admin extends user{
//     constructor(){ super()
//         // console.log('admin')
//     }
// }
// const admin1 = new admin()
// // admin1.login()
// admin1.updatePrice()

// let  arr = ['ploy', 'you' , 12 ,13]
// let obj = { name : 'Ploy'}
// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))

// let arr = {};
// function check(arr2) {
//   return Array.isArray(arr2);
// }
// console.log(check(arr));

// let checkarr = (arr2) => {
//   return Array.isArray(arr2);
// };
// console.log(checkarr(arr));

//การเข้าถึงobject
// let user = {
//     name : 'ploy',
//     age : 30
// }
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// let func = (...rest)=>{
//     console.log(rest[0])
//     console.log(rest[1])
//     console.log(rest[2])
//     console.log(rest[3])
// }
// func(1,'ploy','codecamp',18)

// let sum = (...args) => {
//   let result = 0;
//   for (let arg of args) result += arg;
//   return result;
// };

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));

// let showname = (fname, lname, ...titles) => {
//   console.log(`${fname} ${lname}`);
//   console.log(titles[0]);
//   console.log(titles[1]);
//   console.log(titles.length);
// };
// showname("ploy", "konkamon", "you", "mee", " ployy", 3);

// console.log("-----------------------------------------");
// let arr = [4, 5, 6];
// console.log(Math.max(...arr));
// console.log(Math.max(9, 2, 3, 4, 5));

// let str = "hello";
// console.log([...str]);

// let strcopy = [...str];
// console.log(str === strcopy);

//lab1 result not collect
// class Calculator {
//     constructor(init = 0){
// this.value = init
//     }
//     add(num){
//         this.value +=num
//         return this.value
//     }
//     mul(num){
//         this.value *=num
//         return this.value
//     }
//     sub(num){
//         this.value -=num
//         return this.value
//     }
//     devid(num){
//         this.value /=num
//         return this.value

//     }
//     show(){
//         console.log(`value = ${this.value}`)
//     }
// }
// let result = new Calculator(50)
// let result1 = new Calculator(40)
// result.show()
// // console.log(result.add(60))
// result1.show()
// console.log(result1.add(60))
// console.log(result1.mul(70))
// console.log(result1.sub(70))
// console.log(result1.devid(70))

// let arr = ["ploy ", "konkamon", "fungsuk", 30, "Thailand"];
// let [fname, sname, , , national] = arr;
// console.log(arr);
// console.log(fname);
// console.log(sname);
// console.log(national);

// console.log("-----------------------------------------");
// let [name1, ...next] = ["ploy ", "konkamon", "fungsuk", 30, "Thailand"];
// console.log(name1);
// console.log(next[0]);
// console.log(next[1]);
// console.log(next.length);

// console.log("-----------------------------------------");
// let array = ["ploy", "you", "me", "konkamon"];
// let [names = "ploy", ssname = "konkamon"] = array;
// console.log(names);
// console.log(ssname); // you

// console.log("-----------------------------------------");
// let user = {
//   username: "ploy",
//   email: "pploy@h.c",
//   password: "ploy123",
// };
// let { username: u, email, password } = user;
// console.log(u);
// console.log(email);
// console.log(password);
// console.log("-----------------------------------------");
// let uuser = {
//     username : 'ploy789',
//     password : '123456'
// }
// let {username, email = 'pploy@h.c', password} =uuser
// console.log(email)
// console.log(username)
// console.log(password)
// console.log("-----------------------------------------");
// let uuser = {
//   username: "ploy789",
//   password: "123456",
//   email : "ploy@h.c"
// };
// let { username, ...rest } = uuser;
// console.log(rest);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["cake", "donuts"],
//   extra: true,
// };
// let {
//   size: { width, height },
//   items: [item1, item2],
//   extra,
// } = options;
// console.log(options);

// function nameee(user){
//     console.log(`${user.fname} ${user.sname}`)
// }
// nameee({fname : 'ploy', sname:'konkamon'})

// function nameee({fname, sname}) {
//   console.log(`${fname} ${sname}`);
// }
// nameee({ fname: "ploy", sname: "konkamon" });

// console.log('--------------------------------------')

// let namee = (ob) =>{
//     console.log(ob.sname)
// }
// let ob = {
//     fname : 'ploy',
//     sname : 'konkamon'
// }
// namee(ob)

//improt export
// import {gb,p} from"./module.js"
// import ployy from'./module1.js'

// function Hi(){
//     console.log('Hi!!!')
// }
// Hi()
// gb()
// p()
// ployy()

// console.log('--------------------------------------')

//lab2
// class sale{
//     constructor(_name,_amount,_price){
//         this.name = _name
//         this.amount = _amount
//         this.price = _price
//     }
// calcPrice(){
//     return this.amount * this.price
// }
// }
// class Beverage extends sale{
// constructor (_name,_amount,_price){
//     super (_name,_amount,_price)
// }
// }
// let result = new Beverage ('Cola', 4 , 20)
// console.log(result.calcPrice())

//lab1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Peter: 130,
// };

// let values1 = Object.values(salaries);
// console.log(values1);

// let check = values1.reduce((a, c) => {
//   return (a += c);
// }, 0);
// console.log(check);

//lab2
// let user = { name: "ploy" };
// let userr = {};
// function checkEmpty(ob) {
//     for (let check of Object.entries(ob) )
//   console.log(check);
// }
// checkEmpty(user);

//lab1
// let mul = (...numm) =>{
// let sum = 1
// for (let num of numm){
//     console.log(num)
//     sum*=num
// }
// return sum
// }
// let result = mul(1,2,3,4,5)
// console.log(result)

//lab2
// let odds = (...nums) =>{
//     let odd = nums.filter((a)=>{
//         return a %2 ==0
//     })
//     return odd
// }
// let number = odds(1,2,3,4,5,6,7,8)
// console.log(number)

//lab3????????????????
// let mergeOb= (...obj)=>{

// }

//lab4
// let num1 = [1, -2, 3, 4];
// let num2 = [8, 3, -8, 1];
// let  num3 = [5,...num1,-6,-1,...num2]
// let sum = num3.reduce((a,b)=>{
// return a+b
// },0)
// console.log(sum)
// console.log(num3)

//lab5
// let arr = [1, 2, 3, 4, 5, 6];

// let edit = () => {
//   let newarr = [...arr];
//   (newarr[3] = newarr[3] ** 2)
//   return newarr
// };
// let result = edit(arr);
// console.log(result);
// console.log(arr);

//lab6
// let self1 = ["ploy", "konkamon", " fungsuk", "youu", "ployyy"];
// let self = (arr) => {
//   let [fname, sname, ...hobbies] = arr;
//   return [fname, sname, hobbies.length];
// };
// console.log(self(self1));

//lab7
// let num = [1, 2, 3];
// let doubleAndRetureArgs = (arr,...num) => {
//     let result = num.map(item=>{
//         return item*2
//     })
//     console.log(result)
//     console.log(arr)
//     let result1 = arr.concat(result)
//     console.log(result1)
//     return result1
// };
// doubleAndRetureArgs(num,4,4)
// doubleAndRetureArgs([2],10,4)

//lab8
// let array = [1,2,3]
// let removeRandom =(arr)=>{
// let remove = Math.floor(Math.random()*arr.length)
// let result = arr.splice(remove,1)
// console.log(arr)
// console.log(result)
// return arr
// }
// console.log(removeRandom(array))

//lab9
// let arr = [1, 2, 3, 4, 5];

// let cloneArray = (arr) => {
//   return [...arr];
// };
// console.log(cloneArray(arr));
// console.log(cloneArray(arr) == arr);

//lab10
// let obj = {
//     name : 'ploy',
//     age: 30
// }
// let cloneObj =(newobj)=>{
//     return {...newobj}
// }
// console.log(cloneObj(obj) == obj)

//lab11
// let [f,s,t] = ['ploy','konkamon','fungsuk']
// console.log(f)
// console.log(s)
// console.log(t)

//lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
// ];
// console.log(raindrops)
// console.log(whiskers)
// console.log(aFewOfMyFavoriteThings)

//lab13 error
// let numbers = [10, 20, 30]
// [numbers[1], numbers[2]] = [number[2], numbers[1]];
// console.log(numbers);

//lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets);
// console.log(yearNeptuneDiscovered);

//lab15
// let planetFacts = {
//     numPlants : 8,
//     yearNeptuneDiscovered : 1846,
//     yearMarsDiscovered : 1659,
// }
// let { numPlants,...discoveryYears} = planetFacts
// console.log(discoveryYears)

//lab16
// function getUserData({ firstName, favoriteColor = "green" }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// let result = getUserData({ firstName: "Alejandro", favoriteColor: "purple" });
// let result1 =getUserData({ firstName: "Melissa" });
// let result2 =getUserData({});
// console.log(result) // Your name is Alejandro and you like purple
// console.log(result1) // Your name is Melissa and you like green
// console.log(result2) //Your name is undefined and you like green

//lab17
// let guest = "ploy";
// let admin = "konkamon";
// [guest, admin] = [admin, guest]
// console.log(guest)
// console.log(admin)

//lab18
// let user ={
//     fname : 'ploy',
//     sname : 'konkamon',
//     age : 19,
// }

// let checkage =({fname,sname,age})=>{
// if (age>18){
//    return `Hello ${fname} ${sname}`
// } else{ return 'connot'}
// }

// console.log(checkage(user))

//lab19
// let user ={
//     name : 'ploy',
//     years : 30
// }
// let { name, years : age, isAdmin = 'isAdmin' } = user
// console.log(name)
// console.log(age)
// console.log(isAdmin)
// console.log(isAdmin == isAdmin)//??????????????? default value is false

//lab20
// let salaries1 = {
//   John: 100,
//   Peter: 300,
//   Mary: 250,
// };
// let topSalaries = (salaries) => {
//   let max = Math.max(...Object.values(salaries));
//   for (let [key,value] of Object.entries(salaries))
//  if (value === max){
//   return `${key} salary is  ${value}`;}
// };
// console.log(topSalaries(salaries1));

//lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]]; // decleration == การประกาศตัวแปร
// const [a, [b, [[[c, d], e], f]]] = arr
// console.log(a,b,c,d,e,f);

//lab22
// const obj = { prop: 5, prop2: 10 };
// let {prop : a ,prop2 : b } = obj
// console.log(a)
// console.log(b)

//lab23 error
// let a, b;
// { a, b } = {a: 1, b: 2};
// console.log(a)
// console.log(b)

//lab24 undefined
// const [, , , a, b] = [1, 2, 3];
// console.log(a,b);

//lab25
// const q = { prop: 5, prop2: [10, 100] };
// let {prop : a ,prop2 : [,y] } = q
// console.log(a)
// console.log(y)

//lab26
// const q = {
//   prop: "Hello",
//   prop2: { prop2: { nested: ["a", "b", "c"] } },
// };
// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [a, y, c],
//     },
//   },
// } = q;
// console.log(y);
// console.log(x);

//lab27
// const names = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jack", lastName: "Dann" },
//   { firstName: "Joe", lastName: "Dunne" },
// ];
// for (const element of names) {
//   let { firstName, lastName } = element;
//   console.log(`${firstName} ${lastName}`);
// }

//lab28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 },
// ];
// for (const element of users) {
//   let { user, age } = element;
//   if (age === undefined) {
//     console.log(` ${user} age :unknow`);
//   } else {
//     console.log(` ${user} age : ${age}`);
//   }
// }
