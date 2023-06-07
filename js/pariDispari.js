//JS RESET
console.log('JS OK')

/*___________________________________
|||||||||| PARI E DISPARI -> |||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

// RECUPERO elementi dal dom
const form = document.getElementById('paridispari_form');
const numberField = document.getElementById('number');
const choiceField = document.getElementById('choice');
const resultElement = document.getElementById('evenOdd-result');

// FUNZIONI:

// FUNZIONE per randomizzare
function getRandomNumber(min = 1, max = 5, isMaxIncluded = true) {
	if (min >= max) {
        console.error(`i numeri forniti sono incongruenti.: ${min} è maggiore o uguale a ${max}`);
        return;
    }
    if (isMaxIncluded) max++;
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}
//FUNZIONE per pari o dispari
function isEven(number){
    return number % 2 === 0;
}

// LOGICA ->
form.addEventListener('submit', function (event){
    //Blocco l'esecuzione
    event.preventDefault();

    //Recupero i valori
    const userNumber = parseInt(numberField.value);
    const userChoice = choiceField.value;

    //VALIDAZIONE
    if(isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert('Attenzione, il numero scelto non deve essere inferiore a 1 e superiore a 5');
        return; 
    }
    if(!userChoice || (userChoice !== 'even' && userChoice !== 'odd')) {
        alert('Attenzione, qualcosa è andato storto!');
        return; 
    }

    // Genero un numero random per la cpu
    const cpuNumber = getRandomNumber(1, 5);

    //Sommo i numeri
    const sum = cpuNumber + userNumber;

    //Verifico se il risultato è pari o dispari
    const rightChoice = isEven(sum) ? 'even' : 'odd';

    //Individuo il vincitore
    const winner = userChoice === rightChoice ? 'Il giocatore ha ' : 'La cpu ha ';

    //Stampo il risultato:
    resultElement.innerText = winner + 'vinto!';

});