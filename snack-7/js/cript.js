
const zucchine = [

    {
        varieta: 'snella',
        peso: 12,
        lunghezza: 33
    },
    {
        varieta: 'snella',
        peso: 12,
        lunghezza: 33
    },
    {
        varieta: 'snella',
        peso: 12,
        lunghezza: 33
    },
    {
        varieta: 'snello',
        peso: 1,
        lunghezza: 22
    },
    {
        varieta: 'snela',
        peso: 2,
        lunghezza: 3
    },
    {
        varieta: 'nella',
        peso: 12,
        lunghezza: 333
    },
    {
        varieta: 'boh',
        peso: 12,
        lunghezza: 33
    },
    {
        varieta: 'carota',
        peso: 12,
        lunghezza: 33
    },
    {
        varieta: 'azzurra',
        peso: 22,
        lunghezza: 33
    },
    {
        varieta: 'verde',
        peso: 12,
        lunghezza: 3333
    }

   
]

let sommaPeso = 0

for (let i = 0; i < zucchine.length; i ++){
     
    const zucchina = zucchine[i];

    sommaPeso = sommaPeso + zucchina.peso

   console.log(sommaPeso)
}

