let phrase = 'Chevrolet corvet c6r is a fast car!';
let phraseLength = phrase.length;
console.log(phraseLength);



let capital = 'ya tvoy rot programmiroval!';
let firstLetter = capital.charAt(0).toUpperCase();

let nonCapital = capital.slice(1);

const result = firstLetter + nonCapital;

console.log(result);




function equalReverse(str) {
    let reverseWord = str.split('').reverse().join('');
    return str === reverseWord;
}

console.log(equalReverse('довод'));
console.log(equalReverse('tenet'));
console.log(equalReverse('pineapple'));
console.log(equalReverse('улыбоктебедедмакар'));
console.log(equalReverse('аргентинаманитнегра'));
console.log(equalReverse('ковалпопполавок'));
console.log(equalReverse('программист'));