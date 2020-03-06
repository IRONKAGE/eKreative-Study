// function isProgression(arr) {
//     len result = true;
//     if (arr.length ==0){
//         return false;
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] > arr[i + 1]) {
//             result = false;
//             break;
//         }
//     }
//     return result;
// }

// let result = isProgression([1, 2, 3, 4, 5]);

// console.log(isProgression([1, 2, 3, 4, 5]));

// console.profileEnd(result);


// function isProgression(arr) {
//     let result = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] > arr[i + 1]) {
//             result = true;
//         }
//         else {
//             result = false;
//             break;
//         }
//     }
//     return result;
// }

// let result = isProgression([1, 2, 3, 4, 5]);

// console.log(isProgression([1, 2, 3, 4, 5]));

// var fs = require('fs');

// let content = fs.readFileSync("./data.json", 'utf8');

// content = JSON.parse(content);
// console.log(typeof content);
// console.log(content.length);

// let transactions = [
//     {
//         cardNumber: 1234567812345678,
//         operation: -14
//     },
//     {
//         cardNumber: 1234567812345678,
//         operation: -14
//     },
//     {
//         cardNumber: 1234567812345678,
//         operation: 100
//     }
// ];

// function transactionSum(transactions) {
//     let sum = 0;
//     transactions.forEach(item => {
//         sum += DataTransferItem.operation;
//     });
//     return sum;
// }
// console.log("SUM IS: " + transactionSum(transactions))

// var fs = require('fs');

// let content = fs.readFileSync("./data.json", 'utf8');

// content = JSON.parse(content);
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

// // for(let key of Object.keys(someMap)){
// //     console.log(key, someMap[key]);
// // }
// // console.log(Object.keys(someMap));

// console.log(someMap['name']);
// console.log(someMap.name);

// console.log(1 in [1, 2, 3, 4, 5]); //True
// console.log(1 in [10, 2, 3, 4, 5]); //False

function transactionSum(arr) {
    let sum = 0;
    result = {};
    Array.forEach(item => {
        if(! Object.keys(result).includes(item.name)) {
        // if (!(item.name in Object.keys(result))) { //хибний напис
            result[item.name] = 0;
        }
        result[item.name] += item.operation;
    });
    return result;
    }