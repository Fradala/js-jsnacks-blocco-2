const nomi = ['luca', 'marco', 'maria', 'lucia'];

const cognomi = ['bob', 'felice', 'della valle' , 'park'];

const listaInvitati = []
let nomeCompleto 

for ( let i = 0; i < listaInvitati.length; i ++){
   let nomeRandom = nomi[Math.floor(Math.random()* nomi.length)]
   let cognomiRandom = cognomi[Math.floor(Math.random()* cognomi.length)]
   let nomeCompleto = nomeRandom + '' + cognomiRandom;
   listaInvitati.push(nomeCompleto);
   console.log(nomeRandom, cognomiRandom)
}


console.log(listaInvitati)

