// 1. Сума всіх чисел
function sumaGausa(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumaGausa(4));


// 2. Видалення першої та останньої букви із рядку
// перший варіант
// var StringNormal = "Ну що тут скажеш";
// var StringCut = StringNormal.substring(1, StringNormal.length-1);
// console.log(StringCut);

// другий варіант
// function StringCut (s) {
//     return s.substring(1, s.length -1);
// }
// console.log(StringCut("Ну що тут скажеш"));

// третій варіант
function StringCut(s) {
    return s.slice(1, -1);
}
console.log(StringCut("Ну що тут скажеш"));


// 3. Розгорнута сума числа
// Не працює з мінусовими числами
// function expandedForm(num) {
//     var i,
//         position,
//         numArr = Array.from(num.toString()).map(Number),
//         numArrLen = numArr.length,
//         result = '';
//     if (num < 10) {
//         return num;
//     } else {
//         for(i = 0; i < numArrLen; i++) {
//         position = numArrLen - 1 - i;
//         if( i === numArrLen-1 ) {
//             result += numArr[i] * Math.pow(10, position);
//         } else {
//             if(numArr[i] !== 0){
//             result += numArr[i] * Math.pow(10, position) + " + ";
//             } 
//         }
//         }
//         return result;
//     }
// }
// console.log(expandedForm(-42));

// Краще рішення
function RozhornytaSuma(num) {
    let numStringArray = Array.from(String(num));
    let len = numStringArray.length;
    let result = '';
    numStringArray.map((n, index) => {
        if(n > 0) {
        if(result) {result += ' + '};
        result += new String(n).padEnd(len - index, '0');
        }
    });
    return result;
}
console.log(RozhornytaSuma(-42));


// 4. Сума масиву чисел, окрім найменшого та найбільшого числа
// Хід думок =)
// var numbers = [6, 2, 1, 8, 10];
// numbers.sort(function(a, b) { // сортування
//     return a - b;
// });
// console.log(numbers);
// Cut = numbers;
// function StringCut(s) { // обрізання
//     return s.slice(1, -1);
// };
// console.log(StringCut(Cut));
// numb = StringCut(Cut);
// var Suma = numb.reduce(function(sum, current) { // додавання
//     return sum + current
// });
// console.log(Suma);
// var unique = arr.filter(function(elem, index, self) {
//     return index === self.indexOf(elem);
// })

// Із дебагом кожної операції
// function SumCutMaxMin(Array){
//     console.log(Array);
//     var Sort = Array.sort(function(a, b) {return a - b});
//     console.log(Sort);
//     var Unique = Sort.filter(function(elem, index, self) {return index === self.indexOf(elem)});
//     console.log(Unique);
//     var StringCut = Unique.slice(1, -1);
//     console.log(StringCut);
//     var Suma = StringCut.reduce((sum, current) => (sum += current), 0);
//     return (Suma);
// }
// console.log(SumCutMaxMin([6, 2, 1, 8, 10, 1]));

// Чисте рішення
function SumCutMaxMin(Array){
    var Sort = Array.sort(function(a, b) {return a - b});
    var Unique = Sort.filter(function(elem, index, self) {return index === self.indexOf(elem)});
    var StringCut = Unique.slice(1, -1);
    var Suma = StringCut.reduce((sum, current) => (sum += current), 0);
    return (Suma);
}
console.log(SumCutMaxMin([6, 2, 1, 8, 10, 1]));