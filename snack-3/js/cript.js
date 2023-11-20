const prima = prompt('scrivi una parola')
const seconda = prompt('scrivi una parola')


if (sonoUguali (prima, seconda)){
    console.log(prima, seconda)
} else if ( prima.length > seconda.length){
    console.log(prima)
} else {
    console.log(seconda)
}

function sonoUguali (parolaUno, parolaDue){
    if (parolaUno.length === parolaDue){
        return true
    } else {
        return false
    }
}


