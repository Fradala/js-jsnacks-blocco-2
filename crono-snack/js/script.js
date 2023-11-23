const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const secondsOutput = document.getElementById('seconds');

let clock;
startButton.addEventListener('click', function(){
    clock = setInterval ( function () {
        secondsOutput.innerHTML = parseInt(secondsOutput.inert, 10) + 1;

    },1000);
});

startButton.addEventListener('click' , function(){
    clarInterval(clock);
})

resetButton.addEventListener( 'click', () => secondsOutput.innerHTML = 0)