// 1. Сума всіх чисел
// function sumaGausa(n) {
//     return (n * (n + 1)) / 2;
// }
// console.log(sumaGausa(4));


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
// function StringCut(s) {
//     return s.slice(1, -1);
// }
// console.log(StringCut("Ну що тут скажеш"));


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