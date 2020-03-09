// ************************ 1. Сума усіх транзакцій ************************
// let fs = require("fs");
// let content = fs.readFileSync("./data5.json", "utf8");
// content = JSON.parse(content);

// function TurnOverSum(arr){
//     let Suma = 0;
//     arr.forEach(item => Suma += Math.abs(item.operation));
//         return Suma;
// }
// let Suma = TurnOverSum(content);
// fs.writeFileSync('./readResult5.txt', Math.floor(Suma));  
// console.log(Suma)



// ********* 2. Сума усіх транзакцій для користувача Taras ****************
// let fs = require("fs");
// let content = fs.readFileSync("./data5.json", "utf8");
// content = JSON.parse(content);

// function TarasTransctionSuma(arr, name){
//     let Suma = 0;
//     arr.forEach(item => {
//         if(item.name === name){
//             Suma += Math.abs(item.operation);
//         }
//     });
//         return Suma;
// }

// let Suma = TarasTransctionSuma(content, "Taras");
// fs.writeFileSync('./readResult5.txt', Suma);  
// console.log(Suma);



// ******** 3. Сума усіх транзакцій для карточки 5167985560601337 *********
// let fs = require("fs");
// let content = fs.readFileSync("./data5.json", "utf8");
// content = JSON.parse(content);

// function TarasTransctionSuma(arr, cardNumber){
//     let Suma = 0;
//     arr.forEach(item => {
//         if(item.cardNumber === cardNumber){
//             Suma += Math.abs(item.operation);
//         }
//     });
//         return Suma;
// }

// let Suma = TarasTransctionSuma(content, 5167985560601337);
// fs.writeFileSync('./readResult5.txt', Suma);  
// console.log(Suma);



// 4. Користувач, який найбільше поповнив карточку
// let fs = require("fs");
// let content = fs.readFileSync("./data5.json", "utf8");
// content = JSON.parse(content);


// item.operation
// total = 0,  //set a variable that holds our total
// taxes = operation,  //reference the element in the "JSON" aka object literal we want


// totalTaxes = taxes.reduce(function (sum, tax) {
//     return sum + tax.amount;
// }, 0);
// console.log(Math.abs(item.operation));

// let fs = require("fs");
// let content = fs.readFileSync("./data5.json", "utf8");
// content = JSON.parse(content);

// function MaxOperation(arr, cardNumber){
//     let Max = 0;
//     arr.forEach(item => {
//         if(item.cardNumber === cardNumber){
//             Max += Math.abs(item.operation);
//         }
//     });
//         return Max;
// }

// let Max = MaxOperation(content, 5167985560601337);
// console.log(Max);

// function MaxOperation(arr, name){
//     let Max = 0;
//     arr.forEach(item => {
//         if(item.operation >= operation){
//             Max = Math.max(operation);
//         }
//     });
//         return Max;
// }
// let named = MaxOperation(operation, name);
// // let Max = MaxOperation(content, named);
// // console.log(Max);
// console.log(named);

// let fs = require("fs");
// let content = fs.readFileSync("./data5.json", "utf8");
// obj = JSON.parse(content);

// function TarasTransctionSuma(arr, name){
//     let Suma = 0;
//     arr.forEach(item => {
//         if(item.name == name){
//             Suma += Math.abs(item.operation);
//         }
//     });
//         return Suma;
// }

// let Suma = TarasTransctionSuma(content);
// console.log(Suma);

// let resultMap = {content};
// var array1 = [resultMap];
// console.log(Math.max(array1));
// console.log(obj.name);
// console.log(content1.result);

// структура:
// задати масив під запис нового імені з сумою
    // якщо для імені плюсове значення в операції
        // сумувати це значення
        // записати у масив
    // якщо ні то пропустити це
// порівняти суми у масиві
// вивести ім'я з найбільш поповненою картою

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
// var fileManager = require('./files-manager');
// let content = fileManager.readFromFile('./data5.json');
// var result = getAllPossitiveCards(content);

// function getAllPossitiveCards(ListOfTransaction){
//     let resultMap = getCardsBalances(ListOfTransaction);
//     let positiveCardsArray = getCarWithPositiveBalance(resultMap);

//     return positiveCardsArray;
// };
// function getCardsBalances(ListOfTransaction){
//     let resultMap = {};
//     ListOfTransaction.forEach(item => {
//         if (! Object.keys(resultMap).includes(item.cardNumber)){
//             resultMap[item.cardNumber] = 0;
//         }
//         resultMap[item.cardNumber] += item.operation;
//     });
//     return resultMap;
// };
// function getCarWithPositiveBalance(resultMap){
//     var items = Object.entries(resultMap);
//     let positiveCardsArray = [];
//     items.forEach(item => {
//         if (item[1] > 0){
//             positiveCardsArray.push(item[0]);
//         }
//     });
//     return positiveCardsArray;
// };

// console.log("РЕЗУЛЬТАТ: ", result);



// // 6. Усі користувачі, які більше знімали, ніж клали на карткові рахунки
// структура:
// задати масив під запис нового імені з від'ємною сумою
    // якщо для імені мінусове значення в операції
        // сумувати це значення
        // записати у масив ім'я та від'ємну суму
    // якщо ні то пропустити це
// вивести користовачів з масиву



// // 7. Користувачі, які мають більше однієї карточки
// структура:
// задати масив під запис нового користувача
    // якщо у користувача є більше 1 унікальної картки
        // записати ім'я у масив
    // якщо ні то пропустити це
// вивести користувачів з масиву