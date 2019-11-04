// ************************ 1. Сума усіх транзакцій ************************
let fs = require("fs");
let content = fs.readFileSync("./data5.json", "utf8");
content = JSON.parse(content);

function TurnOverSum(arr){
    let Suma = 0;
    arr.forEach(item => Suma += Math.abs(item.operation));
        return Suma;
}
let Suma = TurnOverSum(content);
fs.writeFileSync('./readResult5.txt', Math.floor(Suma));  
console.log(Suma)



// ********* 2. Сума усіх транзакцій для користувача Taras ****************
let fs = require("fs");
let content = fs.readFileSync("./data5.json", "utf8");
content = JSON.parse(content);

function TarasTransctionSuma(arr, name){
    let Suma = 0;
    arr.forEach(item => {
        if(item.name === name){
            Suma += Math.abs(item.operation);
        }
    });
        return Suma;
}

let Suma = TarasTransctionSuma(content, "Taras");
fs.writeFileSync('./readResult5.txt', Suma);  
console.log(Suma);



// ******** 3. Сума усіх транзакцій для карточки 5167985560601337 *********
let fs = require("fs");
let content = fs.readFileSync("./data5.json", "utf8");
content = JSON.parse(content);

function TarasTransctionSuma(arr, cardNumber){
    let Suma = 0;
    arr.forEach(item => {
        if(item.cardNumber === cardNumber){
            Suma += Math.abs(item.operation);
        }
    });
        return Suma;
}

let Suma = TarasTransctionSuma(content, 5167985560601337);
fs.writeFileSync('./readResult5.txt', Suma);  
console.log(Suma);

// // 4. Користувач, який найбільше поповнив карточку



// ************* 5. Усі карточки, які мають позитивний баланс *************
// -------------------------- Звичайний варіант ---------------------------
// var fileManager = require('./files-manager');
// let content = fileManager.readFromFile('./data5.json');

// function getAllPossitiveCards(listOfTransaction) {
//     resultMap = {};
//     listOfTransaction.forEach(item => {
//         if (! Object.keys(resultMap).includes(item.cardNumber)){
//             resultMap[item.cardNumber] = 0;
//         }
//         resultMap[item.cardNumber] += item.operation;
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

// console.log("РЕЗУЛЬТАТ: ", result);


// -------------------------Професійний варіант ---------------------------
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



// // 6. Усі користувачі, які більше знімали, ніж клали на карткові рахунки



// // 7. Користувачі, які мають більше однієї карточки