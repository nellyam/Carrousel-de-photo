function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
 }
 
 function requestInteger(msg, min, max) {
    let nb;
 
    do {
      nb = parseInt(prompt(msg, 2));
    } while(isNaN(nb) || nb < min || nb > max)
 
    return nb;
 }
 
 