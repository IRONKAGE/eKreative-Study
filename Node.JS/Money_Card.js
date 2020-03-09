var fs = require('fs');

let content = fs.readFileSync("./data.json", 'utf8');

content = JSON.parse(content);
console.log(content.length
    );

// function transactionSum(arr, name){
//     let sum = 0;
//     arr.forEach(item => {
//         if(item.name ===name){
//             sum += item.operation
//     }
// });
// return sum;
// }


// let someMap = {
//     "name": "Kostya",
//     "cardNumber": 1234567812345678,
//     "operation": -14,
//     12: 12,
//     "test": 13
// }

// someMap["test"] = 14;
// someMap.test2 = 15;
// // console.log(someMap);


// function transactionSum(arr) {
//     let sum = 0;
//     result = {};
//     Array.forEach(item => {
//         if(! Object.keys(result).includes(item.name)) {
//         // if (!(item.name in Object.keys(result))) { //хибний напис
//             result[item.name] = 0;
//         }
//         result[item.name] += item.operation;
//     });
//     return result;
//     }

// function square(number) {
//     return number * number;
//     }