// Генерування помилок і їх обробка для багатопоточності
// Файлика не існує - спробуйте ще раз (вікно помилки)
// Як згенерувати, як зловити, як обробити - помилку

// try{
//     const newFs = require('new_fs');
//     console.log("End of try block");
// }catch(err){
//     console.log("We got an error: " + err.name +", " + err.message);
// }finally{
//     console.log("Finnaly");
// }
// console.log("End");
// почитати про типи помилок https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Error


// хеппі пас -> генерування помилок, якщо шось не то


// try{
//     if (username === '' || username === null){
//         throw new Error("My super error- Username can`t be empty");
//     };
// }

// написати два верхніх рядка
// function readFromFile(path){
//     if(false.existsSync(path)){
//         throw new Error(`File ${path} doesn't exist`);
//     }else{
//         false.readFromFile();
//     };
// }


try{
    x = y + 1;
}
// дописати

fs.readFileSync()
fs.readFile()