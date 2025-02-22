/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowelsList = 'aeiou';
const consonantsList = 'bcdfghjklmnpqrstvwxyz';

let wowelQuantity = 0;
let consonantsQuantity = 0;

for (let i = 0; i < word.length; i++) {
    const lowerChar = word[i].toLowerCase();

    if (vowelsList.includes(lowerChar)) {
        wowelQuantity += 1;
    } else if (consonantsList.includes(lowerChar)) {
        consonantsQuantity += 1;
    }
}

vowelsAndConsonantsResult = `${word} contains ${wowelQuantity} vowels and ${consonantsQuantity} consonants`;

console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
