/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  const normalizedWord = word.toLowerCase().trim();
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;
}

//console.log(isPalindrom("madam"))
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    return [];
  }

  const words = sentence.split(/\s+/);
  let longestWords = [];
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;

    if (wordLength > maxLength) {
      maxLength = wordLength;
      longestWords = [words[i]];
    } else if (wordLength === maxLength) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}
//console.log(findLongestWords('The quick bron fox'))
export { isPalindrom, findLongestWords };
