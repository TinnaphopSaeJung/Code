// การประกาศตัวแปร
/*var a = "string"       // var เรียกใช้ได้ทุกที่
{
    let b = 10              // Block Scope
    console.log(b);

    const c = true          // Block Scope & ค่าคงที่
    console.log(c);
}

console.log(a);*/

/*-------------------------------------------------------------*/

// switch case
/*let i = 500
switch(i) {
    case 100:
        console.log("100");
        break
    case 200:
        console.log("200");
        break
    case 300:
        console.log("300");
        break
    case 400:
        console.log("400");
        break
    default:
        console.log("Not in case");
}*/

/*-------------------------------------------------------------*/

// Exercise
// Find max & min
/*const x = 30
const y = 20

if (x < y) {
    console.log(`${y} is max number`);
    console.log(`${x} is min number`);
} else {
    console.log(`${x} is max number`);
    console.log(`${y} is min number`);
}*/

// Exercise
// Check Age
/*let name = "Tinnaphop"
let year = 2544
let age = 2567 - year

if (age > 22) {
    console.log(`Welcome ${name} to Javascript Course`);
} else {
    console.log(`Please wait for team to carry you. Welcome ${name} to JavaScript Course`);
}*/

/*-----------------------------------------------------------------------------------*/

// Loop
/*const n = 5;  

for (let i = 0; i < n; i++) {
  let line = '';
  for (let j = 0; j < n; j++) {
    if (i === Math.floor(n / 2) || j === Math.floor(n / 2)) {
      line += 'x';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}*/

// Exercise
// Factorial
/*let n = 10
let fac = 1

for (let i = 1; i <= n; i++) {
    fac *= i
}
console.log(`${n}! is ${fac}`);*/

/*-------------------------------------------------------------*/

// Functions
/*function hello() {
    console.log("Hello World");
}
hello()

function add(x, y) {
    console.log(x + y);
}
add(10, 20)

function add2(x, y) {
    return x + y
}
let sum = add2(10, 50)
console.log(sum);

let add3 = (x, y) => {
    return x + y
}
let sum2 = add2(10, 90)
console.log(sum2);*/

// Exercise
/*let n = 2

let multiplicationTable = (n) => {
    for (let i = 1; i <= 12; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(n)*/

//Exercise ASC
/*let row = 5;

for (let i = 1; i <= row; i++) {
    let line = '';  
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(line);  
}*/

// Exercise DESC
/*let row = 5;

for (let i = row; i >= 1; i--) {
    let line = '';  
    for (let j = i; j >= 1; j--) {
        line += j;
    }
    console.log(line);  
}*/

/*-------------------------------------------------------------*/

// Import & Export
/*let simple2 = require('./simple2')
console.log(simple2.x);
simple2.hello()
console.log(simple2.add(40, 50));*/

/*-------------------------------------------------------------*/

// String
/*let string1 = 'Tinnaphop'
let string2 = "Saejung"
let string3 = `${string1} ${string2}`

console.log(string1);
console.log(string1.trim());

let number = "1,2,3,45"
console.log(number.split(','));

let string4 = "Hello world world world"
console.log(string4.search('world'));

console.log(string4.replace('world', 'Jung'));
console.log(string4.replaceAll('world', 'Jung'));
console.log(string4.replace(/world/g, 'Jung'));*/

/*-------------------------------------------------------------*/

// Arrays
/*let array = [1, 2, 3, "hello", true, [10, 20]]
console.log(array[5][0]);

let my_arr = [1, 2, 3, 4]

my_arr.push(5)
console.log(my_arr);

my_arr.pop()
console.log(my_arr);

my_arr.shift()
console.log(my_arr);

my_arr.unshift(0)
console.log(my_arr);*/

/*let array = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let i of array) {
    console.log(i);
}

for (let i in array) {
    console.log(i);
}*/

/*let array = [1, 2, 3, 4, 5, 6]

let array2 = array.map(function(element) {
    return element      // ค่า element ถูก push ลงไปใน array2 เรื่อยๆ
})
console.log(array2);

let filter = array.filter((element) => {
    return element % 2 == 0          // ต้อง return เป็น Boolean
})
console.log(filter);    // ถ้า % 2 แล้วเป็น True ค่าก็จะถูกเก็บ*/

/*let array = [1, 2, 3, 4, 5, 6]
let sum = array.reduce((curr, next) => {
    return curr + next  
})
console.log(sum);*/

/*let array = [1, 2, 3, 4, 5, 6]
let some = array.some((element) => {
    return element % 2 == 0     // แค่มีรอบใดรอบหนึ่งเป็น True ก็จะส่ง True
})
let every = array.every((element) => {
    return element % 2 == 0     // ต้องทุกรอบเป็น True ถึงจะส่ง True
})
console.log(some);
console.log(every);*/

/*-------------------------------------------------------------*/

// Object
/*let obj = {
    name: "Tinnaphop",
    age: 14,
    color: ["red", "blue"]
}*/

/*obj.height = 170

console.log(obj.name);
console.log(obj["age"]);
console.log(obj);*/

/*let { name, age: year } = obj     // De-Structuring
console.log(name);
console.log(year);*/

/*let obj2 = obj
obj2.name = "Hello"
console.log(obj.name);  // ข้อมูลมัน Reference กันอยู่*/

/*let obj2 = {...obj}     // ใช้เฉพาะในกรณีที่ไม่มี obj ซ้อนกันอยู่ข้างใน
obj2.name = "Hello"
console.log(obj.name);  // ข้อมูลไม่ Reference กันแล้ว*/

/*let name = "Jung"
let age = 20
let key_name = 'nickName'

let obj = {
    [key_name]: name,
    age
}
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));*/

/*-------------------------------------------------------------*/

// Asynchronous
/*function a() {
    return new Promise((res, rej)=>{
      setTimeout(function(){
        console.log('this is a')
        res(11)
      }, 2000)
  
    })
  }
  
  function b() {
    return new Promise((res, rej)=>{
      setTimeout(function(){
        console.log('this is b')
        res(10)
      }, 3000)
    })
  }

  function c(a , b) {
    return new Promise((res, rej)=>{
      setTimeout(function(){
        console.log('this is c')
        res(a + b)
      }, 1000)
    })
  }
  
  async function main() {
    await a()
    await b()
    await c(10, 20)
  }
  
  main()*/

/*-------------------------------------------------------------*/

// ดัก Error
try {
    let x = 1
    let y = 20

    if (x < 0) {
        throw {message: "error"}    // บังคับ error
    }
    console.log(x + y);
} catch (err) {
    console.log(err.message);
}