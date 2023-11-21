
const userNumber = parseInt( prompt ('dimmi un numer0'))

function getNewSquare(){
    const newSquareElement = document.createElement ('article');
    newSquareElement.classList.add ('items-square');

    return newSquareElement
}


const mainContentElement = document.querySelector('main section .main-content')

for ( let i = 0; i < userNumber; i ++){
    const currentSquare = getNewSquare();
    
}
