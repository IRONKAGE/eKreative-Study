// 1. Convert boolean values to strings 'Yes' or 'No' {8kyu} - Повертає Правду або Брехню у булевому значенні
function boolToWord( bool ){
    if (bool == true){
        return 'Yes';
    }else{
        return 'No';
    };
}

console.log(boolToWord(true)) == 'Yes';
console.log(boolToWord(false)) == 'No';



// 2. Highest and Lowest {7kyu} - Повернення найбільшого і найменшого числа у рядку
function highAndLow(NumStr){
    var CreateArr = NumStr.split(" ");
    var Max = CreateArr.reduce(function(a, b) {return Math.max(a, b)});
    var Min = CreateArr.reduce(function(a, b) {return Math.min(a, b)});
    return Max + " " + Min;
}

console.log(highAndLow("1 2 3 4 5")) == "5 1"
console.log(highAndLow("1 9 3 4 -5")) == "9 -5";



// 3. Count of positives / sum of negatives {8kyu} - Кількість позитивних та сума негативних чисел
function countPositivesSumNegatives(Numbers){
    if (!Numbers || !Numbers.length) {return []};
    var Positives = Numbers.filter(x => x > 0);
    var Negatives = Numbers.filter(x => x <= 0);
    return [Positives.length, Math.floor(Negatives.reduce((a, b) => a + b, 0))];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) == "10, -65";



// 4. Multiply {8kyu} - Перемножити два числа
function multiply(a, b){
    return a * b;
}

console.log(multiply(2, 5)) == "10";



// 5. Even or Odd {8kyu} - Повертає Even для парних чисел, та Odd для непарних чисел
function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even";
    }else{
        return "Odd";
    };
}

console.log(even_or_odd(5)) == "Odd";
console.log(even_or_odd(8)) == "Even";



// 6. Sum of positive {8kyu} - Сумує позитивні числа
function positiveSum(arrPositives){
    return (arrPositives.reduce((a, b) => a + (b > 0 ? b : 0), 0));
}

console.log(positiveSum([1,-4,7,12])) == "1 + 7 + 12 = 20";



// 7. Opposite number {8kyu} - Повертає протилежне число
function opposite(number){
    return -number;
}

console.log(opposite(1)) == "-1";
console.log(opposite(-9)) == "9";



// 8. Remove First and Last Character {8kyu} - Видаляє перший та останній символ із рядка
function removeChar(strVsjakogo){
    return strVsjakogo.slice(1, -1);
}

console.log(removeChar('eloquent')) == "loquen";
console.log(removeChar('person')) == "erso";



// 9. String repeat {8kyu} - Повторює рядок задану кількість разів
function repeatStr(count, string){
    return string.repeat(count);
}

console.log(repeatStr(6, "I")) == "IIIIII";
console.log(repeatStr(2, "Hi ")) == "Hi Hi ";



// 10. Return Negative {8kyu} - Повертає від'ємне число, навіть якщо воно від'ємне
function makeNegative(number){
    return -Math.abs(number);
}

console.log(makeNegative(42)) == "-42";
console.log(makeNegative(-33)) == "-33";