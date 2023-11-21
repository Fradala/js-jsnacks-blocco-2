
const userNumber = parseInt( prompt ('dimmi un numer0'));

const wrapper = document.querySelector('section .main-content');

for (let i = 0; i < userNumber; i ++){
    wrapper.appendChild(generateSquare);
}

function generateSquare(){
    const divElement = document.createElement('div');
    divElement.classList.add('square');

    return divElement
}