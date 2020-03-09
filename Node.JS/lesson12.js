// function a(){
//     return b() + 1;
// }
// function b(){
//     return 1;
// }
// console.log(a());

// function a(){
//     return a() + 1;
// }
// console.log(a());

// var index = 0;
// var maxCount = 5;

// function a(){
//     index++;
//     if (index < maxCount){
//         return a() + 1;
//     };
//     return 1;
// }
// console.log(a());

// var printMe = () => {
//     var numberToPrint = 1;
//     var maxNumber = 10;
//     while(numberToPrint <= maxNumber){
//         console.log(numberToPrint);
//         numberToPrint++;
//     };
// }
// printMe();

// var printMe = () => {
//     var numberToPrint = 1;
//     var maxNumber = 10;
//     while(true){
//         console.log(numberToPrint);
//         numberToPrint++;
//         if (numberToPrint <= maxNumber){
//             break;
//         };
//     };
// }
// printMe();

// var printMe = () => {
//     var numberToPrint = 1;
//     var maxNumber = 10;
//     while(isTrue()){
//         console.log(numberToPrint);
//         numberToPrint++;
//         if (numberToPrint <= maxNumber){
//             break;
//         };
//     };
// }
// printMe();

// var printMe = () => {
//     var numberToPrint = 1;
//     var maxNumber = 10;
//     do{
//         console.log(numberToPrint);
//         numberToPrint++;
//     } while (numberToPrint <= maxNumber)
// }
// printMe();


// var numberToPrint = 1;
// const printMe = () => {
//     console.log(numberToPrint);
//     if(numberToPrint < 10){
//         printMe(++numberToPrint);
//     };
// }
// printMe();


// var numberToPrint = 1;
// const printMe = () => {
//     console.log(numberToPrint);
//     if(numberToPrint < 10){
//         numberToPrint += 2;
//         printMe(numberToPrint);
//     };
// }
// printMe(1);

// var numberToPrint = 1;
// const printMe = () => {
//     if(numberToPrint < 10){
//         numberToPrint += 2;
//         printMe(numberToPrint);
//     };
//     console.log(numberToPrint);
// }
// printMe(1);

// const factorial = (n) => {
//     if (n === 0){
//         return 1;
//     };
//     return n * factorial(n-1);
// }
// console.log(factorial(64));

// function solution(number){
//     var Multiples = 0;
//     for (var i = 1; i < number; i++){
//         if ((i % 3 === 0) || (i % 5 === 0) || (i % 15 === 0)){
//         Multiples = Multiples + i;
//         };
//     };
//     return Multiples;
// }
// console.log(solution(1000))


// Д/З Фібоначі
const fibonacci = (n) =>{
    if (n < 2){
        return n;
    };
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(9));