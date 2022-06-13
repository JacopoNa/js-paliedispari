// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// utente sceglie pari o dispari
const userOddOrEven = prompt('Pari o dispari?');

// utente inserisce un numero da 1 a 5
const userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));

// funzione numero random per il computer 
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// somma dei due numeri
const sumNumbers = userNum + getRndInteger(1,5)
console.log(sumNumbers)

// funzione che stabilisce se la somma è pari o dispari 
function sumOddOrEven(sum) {
    let oddOrEven = 'dispari';

    if (sum % 2 === 0) {
        oddOrEven = 'pari';
    }

    return oddOrEven;
}

// funzione applicata alla somma dei due numeri
let resultSum = sumOddOrEven(sumNumbers)


if(resultSum === userOddOrEven) {
    alert('Hai vinto!');
} else {
    alert ('Hai perso!');
}