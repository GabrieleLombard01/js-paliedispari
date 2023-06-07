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

// LOGICA ->
form.addEventListener('sumbit', function(event){
    //Blocco l'esecuzione
    event.preventDefault();

    //Recupero i valori
    const userNumber = parseInt(numberField.value);
    const choice = choiceField.value;
});