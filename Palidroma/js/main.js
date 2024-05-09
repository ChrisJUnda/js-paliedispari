'use strict';



const input = 'ingegni'

// Invertire la parola
//confrontare  la parola input con la parola invertita


if(isPalindromo(input)){
    console.log('è palindroma');
}  else {
    console.log('non palindroma')
}


/* 
Function
*/

function isPalindromo (input) {


    if (input.length === 0) return false;
    if (input.length === 1) return true;

    let inverted = '';
    
    for (let i = input.length - 1; i >= 0; i--) {
    console.log(i);
    console.log(input[i]);

    inverted += input[i];
}

if(input === inverted) {
    return true;
}




    return false;
}


