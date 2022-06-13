// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// parola inserita dall'utente
const userWord = prompt('Scrivi una parola');

// funzione applicata alla parola inserita dall'utente
const wordIsPalindroma = palindromaWord(userWord);
console.log(wordIsPalindroma)

// function
function palindromaWord(word) {
    // variabile per formare la parola al contrario
    let reverseWord = '';

    // scorrere la parola dalla fine all'inizio e confrontarla con la parola scritta dall'utente
    for(let i = word.length - 1; i >= 0; i--) {
        let thisLetter = word[i];
        
        // concatenazione delle lettere
        reverseWord += thisLetter;
    }

    console.log(reverseWord);

    // output del risultato
    let result = 'La parola non è palidroma';

    // se la parola scritta al contrario è uguale alla parola iniziale allora è palindroma
    if (reverseWord === word) {
        result = 'La parola è palindroma';
    } 

    return result;
}
