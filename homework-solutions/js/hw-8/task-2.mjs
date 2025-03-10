/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  return wordsArr.sort((a, b) => countVowels(a) - countVowels(b));
}

function countVowels(word) {
  const vowels = 'aeiouAEIOU';
  return word.split('').filter((letter) => vowels.includes(letter)).length;
}

//console.log(sortedByVowels(words));
export { sortedByVowels };
