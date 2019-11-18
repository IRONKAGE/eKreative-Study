// 1. Дано три числа a, b, c. Написати функцію яка повертає true, якщо можна побудувати трикутник зі сторін, довжини яких = a, b, c. false - в іншому випадку.
// Простий варіант
// // function trukytnuk(a, b, c){
// //     hipotenusa = (c * 2);
// //     katet = ((a * 2) + (b * 2));
// //     if ((hipotenusa == katet) || (a & b == c)){
// //         return true;
// //     }else{
// //         return false;
// //     };
// // }


// Математичний варіант
// // function trukytnuk(a, b, c){
// //     if ((c == Math.pow(((a * 2) + (b * 2)), 0.5)) || (a & b == c)){
// //         return true;
// //     }else{
// //         return false;
// //     };
// // }


// Варіант з матиматиченою формулою, яка включає всі можливі значення
// // function trukytnuk(a, b, c) {
// //     if ((a == Math.pow(((b * 2) + (c * 2)), 0.5)) ||
// //     (b == Math.pow(((a * 2) + (c * 2)), 0.5)) ||
// //     (c == Math.pow(((a * 2) + (b * 2)), 0.5)) ||
// //     (a & b == c)){
// //         return true;
// //     }if (((a + b) | c) || ((a + c) | b) || ((b + c) | a)){
// //         return false;
// //     }else{
// //         false;
// //     };
// // }


// Ще один математичний варіант
// // function trukytnuk(a, b, c) {
// //     if ((a === Math.pow((Math.pow(b, 2) + Math.pow(c, 2)), 0.5)) ||
// //     (b === Math.pow((Math.pow(a, 2) + Math.pow(c, 2)), 0.5)) ||
// //     (c === Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5)) ||
// //     (a & b == c) ||
// //     (a + b > c && a + c > b && b + c > a)){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }


// Ще один математичний варіант
// // function trukytnuk(a, b, c) {
// //     const ALPHA = parseFloat((Math.acos(((Math.pow(b, 2)) + (Math.pow(c, 2)) - (Math.pow(a, 2))) / (2 * b * c))).toFixed(99));
// //     const BETTA = parseFloat((Math.acos(((Math.pow(a, 2)) + (Math.pow(c, 2)) - (Math.pow(b, 2))) / (2 * a * c))).toFixed(99));
// //     const GAMMA = parseFloat((Math.acos(((Math.pow(a, 2)) + (Math.pow(b, 2)) - (Math.pow(c, 2))) / (2 * a * b))).toFixed(99));
// //     if ((Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) - (2 * b * c * Math.cos(ALPHA))) ||
// //     (Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2) - (2 * a * c * Math.cos(BETTA))) ||
// //     (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2) - (2 * a * b * Math.cos(GAMMA)))){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }


// І ще один математичний варіант
// // function trukytnuk(a, b, c) {
// //     const ALPHA = parseFloat((Math.acos(((Math.pow(b, 2)) + (Math.pow(c, 2)) - (Math.pow(a, 2))) / (2 * b * c))).toFixed(99));
// //     const BETTA = parseFloat((Math.acos(((Math.pow(a, 2)) + (Math.pow(c, 2)) - (Math.pow(b, 2))) / (2 * a * c))).toFixed(99));
// //     const GAMMA = parseFloat((Math.acos(((Math.pow(a, 2)) + (Math.pow(b, 2)) - (Math.pow(c, 2))) / (2 * a * b))).toFixed(99));
// //     if ((a / (Math.sin(ALPHA))) === (b / (Math.sin(BETTA))) === (c / (Math.sin(GAMMA)))){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }


// Варіант Кості
// function trukytnuk(a, b, c){
//     if ((a + b > c) && (a + c > b) && (b + c > a)){
//         return true;
//     }else{
//         return false;
//     };
// }


// Профі варіант
function trukytnuk(a, b, c){
        return (a + b > c) && (a + c > b) && (c + b > a);
}

console.log(trukytnuk(1, 1, 1));
console.log(trukytnuk(3, 3, 3));
console.log(trukytnuk(1, 1, 2));
console.log(trukytnuk(3, 3, 4));
console.log(trukytnuk(3, 7, 4));



// 2. Дане число, функція має повернути середню букву слова - якщо довжина слова непарна, і дві середні букви якщо довжина слова - парна.
function Powernennya(text) {
    var middle;
    var length;
    if (text.length % 2 == 1){
        middle = text.length / 2;
        length = 1;
    }else{
        middle = text.length / 2 - 1;
        length = 2;
    };
    return text.substring(middle, middle + length);
}

console.log(Powernennya("Мойсей"));
console.log(Powernennya("test"));
console.log(Powernennya("testing"));
console.log(Powernennya("middle"));
console.log(Powernennya("A"));
console.log(Powernennya(""));