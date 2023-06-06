//JS RESET
console.log('JS OK')

// Funzione per controllare se una parola è palindroma
const checkPalindrome = (word) => {
  // Rimuovo spazi e converto tutto in minuscolo
  const cleanedWord = word.toLowerCase().replace(/\s/g, '');

  // ReverseWord
  const reversedWord = cleanedWord.split('').reverse().join('');