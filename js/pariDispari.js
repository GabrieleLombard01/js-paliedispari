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

// FUNZIONE per randomizzare
function getRandomNumber(min, max) {
	const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

// LOGICA ->
form.addEventListener('sumbit', function(event){
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
    const cpuNumber = getRandomNumber(1,5);

    //Sommo i numeri
    const sum = cpuNumber + userNumber;

    //Verifico se il risultato è pari o dispari

});