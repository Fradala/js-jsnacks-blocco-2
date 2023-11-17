const array = []

let somma = 0


while ( somma  < 50){
     const numeroUtente = parseInt (prompt('scrivi un numero'))
     if ( !isNaN (numeroUtente)){
        somma += numeroUtente
        array.push(numeroUtente)
     }
    

}
console.log( array, somma);