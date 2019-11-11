// 1. Дано три числа a, b, c. Написати функцію яка повертає true, якщо можна побудувати трикутник зі сторін, довжини яких = a, b, c. false - в іншому випадку.
// Простий варіант
// function trukytnuk(a, b, c){
//     hipotenusa = (c * 2);
//     katet = ((a * 2) + (b * 2));
//     if ((hipotenusa == katet) || (a & b == c)){
//         return true;
//     }else{
//         return false;
//     };
// };
// console.log(trukytnuk(1, 1, 35));
// console.log(trukytnuk(1, 1, 2));
// console.log(trukytnuk(3, 3, 3));

// Математичний варіант
function trukytnuk(a, b, c){
    if ((c == Math.pow(((a * 2) + (b * 2)), 0.5)) || (a & b == c)){
        return true;
    }else{
        return false;
    };
}
console.log(trukytnuk(1, 1, 35));
console.log(trukytnuk(1, 1, 2));
console.log(trukytnuk(3, 3, 3));



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