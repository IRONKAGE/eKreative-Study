// try{
//     const newFs = require('new_fs');
//     console.log("End of try block");
// }catch(err){
//     console.log("NULL");
// }

// function tryMe(){
//     try{
//         let x =y + 100;
//         return x;
//     }catch(err){
//         return null;
//     };
// }
// console.log(tryMe());


// регулярні вирази
// "Dear <user>, ...." - заміна у стрічці, щось на щось

// let myRegExp = new RegExp("")' - старий спосіб'
// /^test.*23$/ -regexp

// "test".search(/t1/);
// "test1".search(/\d/);

// "test1t2".replace(/t\d/g, "Digit")

// "test1t2".replace(/t | e/g, "Digit")

// "test1t2".replace(/^test$/g, "Digit")

// /test/g.exec

// console.log('t jhkj'.search(/^[A-Za-z]*\s+[A-Za-z]*$/));

// console.log('oled   fddf  jhkj'.search(/^[A-z]*\s+[A-z]*$/) ? false : true);

https://regex101.com/r/aStMnj/2
console.log('Oleh Hatsenko'.search(/^[A-Z][a-z]{1,19}\s+[A-Z][a-z]{1,19}$/gu) ? false : true);