'use strict';

const userPariDispari = 'pari';


const userNumber = getRndInteger(1, 5);


const cpuNumber = getRndInteger(1, 5);


const sumNumbers = userNumber + cpuNumber;

console.log('numero utente', userNumber)
console.log('numero computer', cpuNumber)
console.log('numero userPariDispari', userPariDispari)

console.log('sommanumeri: ', sumNumbers)
console.log('risultato pari dispari: ', pariODispari (sumNumbers))

if (pariODispari(sumNumbers) === userPariDispari) {
  console.log('utente vince');
} else {
  console.log('computer vince');
}

// Genera Numero Random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }




//pari o dispari

function isPari(num) {
    if (num % 2 === 0) return true;

    return false;
  }
  
  function pariODispari(num) {
    if (isPari(num)) return 'pari';
  
    return 'dispari';
  }


