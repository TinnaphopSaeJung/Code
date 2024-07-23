// Find max & min
// let x = 10
// let y = 20

// if (x < y) {
//     console.log(`${y} is max number.`);
//     console.log(`${x} is min number.`);
// } else if (x == y) {
//     console.log("Number is equal.");
// } else {
//     console.log(`${x} is max number.`);
//     console.log(`${y} is min number.`);
// }

// /*----------------------------------------------------*/

// // Check Age
// const fname = "Tinnaphop"
// const birthYear = 2545

// const currentYear = (new Date().getFullYear()) + 543;
// const age = currentYear - birthYear

// if (age > 22) {
//     console.log(`Welcome ${fname} to Javascript Course`);
// } else {
//     console.log(`Please wait for team to carry you. Welcome ${fname} to JavaScript Course`);
// }

// /*----------------------------------------------------*/

// // Factorial
// let numFac = 5
// let fac = 1

// for (let i = 1; i <= numFac; i++) {
//     fac *= i
// }
// console.log(`${numFac}! is ${fac}`);

// /*----------------------------------------------------*/

// // Multiplication Tables
// let numMul = 2

// let multiplicationTable = (numMul) => {
//     for (let i = 1; i <= 12; i++) {
//         console.log(`${numMul} x ${i} = ${numMul * i}`);
//     }
// }

// multiplicationTable(numMul)

/*----------------------------------------------------*/

// Orderby Function
// let row = 5
// let orderBy = 'asc'

// switch(orderBy) {
//     case 'asc':
//         asc(row)
//         break
//     case 'desc':
//         desc(row)
//         break
//     default:
//         console.log("Not in case");
// }

// function asc(row) {
//     for (let i = 1; i <= row; i++) {
//         let line = '';  
//         for (let j = 1; j <= i; j++) {
//             line += j;
//         }
//         console.log(line);  
//     }
// }

// function desc(row) {
//     for (let i = row; i >= 1; i--) {
//         let line = '';  
//         for (let j = i; j >= 1; j--) {
//             line += j;
//         }
//         console.log(line);  
//     }
// }

/*----------------------------------------------------*/

// Remove Vowels
// let text = ["hello", "world", "i am", "zebra"]

// let result = text.map(function(str) {
//     return str.replace(/[aeiou]/gi, '')
// })

// console.log(result);

/*----------------------------------------------------*/

// ASCII
// function encodeStringArray(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i];
//         let encodedStr = '';

//         console.log(str);
//         for (let j = 0; j < str.length; j++) {
//             let char = str[j];
//             console.log(char);
//             if (char === ' ') {
//                 encodedStr += ' ';
//                 console.log(`encodedStr : ${encodedStr}`);
//             } else {
//                 let lowerChar = char.toLowerCase();
//                 console.log(`lowerChar : ${lowerChar}`);
//                 if (lowerChar === 'z') {
//                     encodedStr += 'a';
//                 } else {
//                     encodedStr += String.fromCharCode(lowerChar.charCodeAt(0) + 1);
//                 }
//             }
//             console.log(`ถูกเปลี่ยนเป็น ${encodedStr}`);
//         }

//         result.push(encodedStr);
//         console.log(`result รอบที่ ${i} : ${result}`);
//         console.log('--------------------------------------');
//     }

//     return result;
// }

// const plain_text = ["hello", "world", "I am", "zebra"];
// const encoded_text = encodeStringArray(plain_text);
// console.log(encoded_text);  // Output: ["ifmmp", "xpsme", "j bn", "afcsb"]


