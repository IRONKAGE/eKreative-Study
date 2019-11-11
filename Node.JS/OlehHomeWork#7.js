// 1 - Дано три числа a, b, c. Написати функцію яка повертає true, якщо можна побудувати трикутник зі сторін, довжини яких = a, b, c. false - в іншому випадку.
// Простий варіант
function trukytnuk(a, b, c){
    hipotenusa = (c * 2);
    katet = ((a * 2) + (b * 2));
    if ((hipotenusa == katet) || (a & b == c)){
        return true;
    }else{
        return false;
    };
};
console.log(trukytnuk(1, 1, 35));
console.log(trukytnuk(1, 1, 2));
console.log(trukytnuk(3, 3, 3));

// Математичний варіант
function trukytnuk(a, b, c){
    if ((c == Math.pow(((a * 2) + (b * 2)), 0.5)) || (a & b == c)){
        return true;
    }else{
        return false;
    };
};
console.log(trukytnuk(1, 1, 2));

// 2 - Дане число, функція має повернути середню букву слова - якщо довжина слова непарна і дві середні букви якщо довжина слова - парна.
// getMiddle("test") -> "es"
// getMiddle("testing") -> "t"
// getMiddle("middle") -> "dd"
// getMiddle("A") -> "A"
// getMiddle("") -> ""

