// // Підрахунок суми очок команди
// let comanda = ["3:3", "2:4", "1:0", "5:3", "2:5", "4:0", "5:0", "3:5", "1:0", "7:4"];
// function calculateScores(arrOfGameResults){
//     var suma = 0;
//     arrOfGameResults.forEach(element => {
//         let score = element.split(":");
//         if (+score[0] > +score[1]){
//             suma += 3;
//         }else{
//             if (+score[0] == +score[1]){
//                 suma += 1;
//             }
//         }
//     });
//     return suma;
// }
// console.log(calculateScores(comanda));

// // 

function countPositivesSumNegatives(input) {
    let count = sum = 0;
    let result = [];
    if (input == null || input.length == 0) {
        return [];
    }
    input.forEach(element => {
        if (element > 0) {
            count++;
        } else if (element < 0) {
            sum += element
        }
    });
    result.push(count, sum);
    return result;
}

function data(a){
    return
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) == "10, -65";
console.log(countPositivesSumNegatives([])) == "0, 0";
