/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
let maxAge = 60;
let age;

//age = 10;
//age = 17;
//age = 18;
//age = 19;
//age = 59;
//age = 60;
//age = 61;
//age = "36";
//age = "ten";

age = +age;

if (isNaN(age)) {
  console.log("Incorrect data type");
} else if (age < minAge) {
  console.log(`You don't have access cause your age is ${age}. It's less than ${minAge}`);
} else if (age >= minAge && age < maxAge) {
  console.log("Welcome!");
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel.");
} else {
  console.log("Technical work");
}