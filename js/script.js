//JS RESET
console.log('JS OK')

/*________________________________________
|||||||||| PALINDROME FUNCTION -> |||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

// Funzione per controllare se una parola è palindroma
const checkPalindrome = (word) => {
  // Rimuovo spazi e converto tutto in minuscolo
  const cleanedWord = word.toLowerCase().replace(/\s/g, '');

  // ReverseWord
  const reversedWord = cleanedWord.split('').reverse().join('');

   // Controllo se cleanedWord e reverseWord sono uguali
   if (cleanedWord === reversedWord) {
    return true; // è una parola palindroma
    } else {
    return false; // non è una parola palindroma
    }
};

 // Chiedo all'utente di inserire una parola
 const userInput = prompt('Inserisci una parola:');

  // Controllo se la parola è palindroma oppure no
  if (checkPalindrome(userInput)) {
    console.log(`${userInput} è una parola palindroma.`);
  } else {
    console.log(`${userInput} non è una parola palindroma.`);
  }

/*___________________________________
|||||||||| PARI E DISPARI -> |||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

