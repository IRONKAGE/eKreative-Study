//// 1 тема
// let fileManager = require('./files-manager');

// let content = fileManager.readFromFile('./data.json');

// console.log(content);

//// 2 задача 
// var fileManager = require('./files-manager');

// let content = fileManager.readFromFile('./data.json');

// resultMap = {};
// content.forEach(item => {
//     if (! Object.keys(resultMap).includes(item.name)){
//         result[item.name] = 0;
//     }
//     resultMap[item.name] += item.operation;
// });
// console.log(resultMap);

//// позитивний баланс
// let fileManager = require('./files-manager');

// let content = fileManager.readFromFile('./data.json');

// resultMap = {};
// content.forEach(item => {
//     if (! Object.keys(resultMap).includes(item.cardNumber)){
//         result[item.cardNumber] = 0;
//     }
//     resultMap[item.cardNumber] += item.operation;
// });

// var items = Object.entries(resultMap);

// var maxSum = Number.MIN_VALUE;
// var maxCardNumber = null;
// items.forEach(item => {
//     if (maxSum < item[1]){
//         maxSum = item[1];
//         maxCardNumber = item[0];
//     }
// })

// console.log(maxCardNumber);

//// позитивний баланс усіх карток
// var fileManager = require('./files-manager');

// let content = fileManager.readFromFile('./data.json');

// resultMap = {};
// content.forEach(item => {
//     if (! Object.keys(resultMap).includes(item.cardNumber)){
//         result[item.cardNumber] = 0;
//     }
//     resultMap[item.cardNumber] += item.operation;
// });

// var items = Object.entries(resultMap);
// let positiveCardsArray = [];

// items.forEach(item => {
//     if (item[1] > 0){
//         positiveCardsArray.push(item[0]);
//         console.log(item[0]);
//     }
// });

// console.log(positiveCardsArray);

///// Home Work
// var fileManager = require('./files-manager');

// let content = fileManager.readFromFile('./data.json');

// function getAllPossitiveCards(ListOfTransaction){
//     resultMap = {};
//     ListOfTransaction.forEach(item => {
//         if (! Object.keys(resultMap).includes(item.cardNumber)){
//             result[item.cardNumber] = 0;
//         }
//     resultMap[item.cardNumber] += item.operation;
//     });

//     var items = Object.entries(resultMap);
//     let positiveCardsArray = [];

//     items.forEach(item => {
//         if (item[1] > 0){
//             positiveCardsArray.push(item[0]);
//         }
//     });
//     return positiveCardsArray;
// };

// var result = getAllPossitiveCards(content);

// console.log(positiveCardsArray);

/////спрощено
// var fileManager = require('./files-manager');

// let content = fileManager.readFromFile('./data.json');

// var result = getAllPossitiveCards(content);

// console.log("RESULT: ", result);


// function getAllPossitiveCards(ListOfTransaction){
//     let resultMap = getCardsBalances(ListOfTransaction);
//     let positiveCardsArray = getCarWithPositiveBalance(resultMap);
    
//     return positiveCardsArray;
//     };

// function getCardsBalances(ListOfTransaction){
//     resultMap = {};
//     ListOfTransaction.forEach(item => {
//         if (! Object.keys(resultMap).includes(item.cardNumber)){
//             result[item.cardNumber] = 0;
//         }
//     resultMap[item.cardNumber] += item.operation;
// }
//     var items = Object.entries(resultMap);
//     let positiveCardsArray = [];

//     items.forEach(item => {
//         if (item[1] > 0){
//             positiveCardsArray.push(item[0]);
//         }
//     });
//     return positiveCardsArray;
// };

// function getCardsBalances(ListOfTransaction){

// }

////приклад
// let item = {
//     name: "Igor",
//     gender: "male",
//     role: "student"
// }

// console.log(item);

////дата
// let someDate = new Date();
// console.log(someDate);

var fileManager = require('./files-manager');
let content = fileManager.readFromFile('./data5.json');
var result = getAllPossitiveCards(content);

function getAllPossitiveCards(ListOfTransaction){
    let resultMap = getCardsBalances(ListOfTransaction);
    let positiveCardsArray = getCarWithPositiveBalance(resultMap);
    
    return positiveCardsArray;
};
function getCardsBalances(ListOfTransaction){
    let resultMap = {};
    ListOfTransaction.forEach(item => {
        if (! Object.keys(resultMap).includes(item.cardNumber)){
            resultMap[item.cardNumber] = 0;
        }
        resultMap[item.cardNumber] += item.operation;
    });
    return resultMap;
};

function getCarWithPositiveBalance(resultMap){
    var items = Object.entries(resultMap);
    let positiveCardsArray = [];
    items.forEach(item => {
        if (item[1] > 0){
            positiveCardsArray.push(item[0]);
        }
    });
    return positiveCardsArray;
};


console.log("РЕЗУЛЬТАТ: ", result);