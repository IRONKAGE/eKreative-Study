// 1. Сума всіх чисел
function sumaGausa(n) {
    return n * (n + 1) / 2;
}
console.log(sumaGausa(8));


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
