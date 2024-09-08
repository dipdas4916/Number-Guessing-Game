let randomNumber = Math.round(Math.random() * 100 + 1);

const input = document.querySelector('#input');

const submit = document.querySelector('#subbtn');

const displayResult = document.querySelector('#game-result');

const previousGuess = document.querySelector('#previous-guess');

const remaining = document.querySelector('#game-remaining');

const showResult = document.querySelector('#result');

const startButton = document.querySelector('#button');

startButton.style.display = 'none';

let readyToPlay = true;
let attempts = 1;
let alreadyGuessedNumber = [];
let userinput;
//start()
//function start(){
if(readyToPlay){
    submit.addEventListener('click', function(e){
        e.defaultPrevented;
        userinput = parseInt(input.value);
        validateInput(userinput);
        
    });
}
//}
function validateInput(n){
    if(isNaN(n)){
        alert("Please Enter a Valid Number..");
    }
    else if(n <= 0){
        alert("Please Enter a Number which is greater than 0..")
    }
    else if(n > 100){
        alert("Please Enter a Number which is lesaser than 101..")
    }
    readyToPlay = true;
    input.value = '';
    evaluateResult(userinput);
}

function evaluateResult(n){
    if(attempts>=10){
        showResultMessage(`!!! 😔😔 No More Attempts Left 😔😔\n Computer Generated Number is: ${randomNumber}`, "");
        endGame();
    }
    else if(n === randomNumber){
        showResultMessage("🎉🎉Congratulations!! You Won the Game!! 🎉🎉", "");
        endGame();
    }
    else if(n < randomNumber){
        showResultMessage("Your Entered Number is Tooo Low..", `${n}`);
        attempts++;
        alreadyGuessedNumber.push(n);
    }
    else if(n > randomNumber){
        showResultMessage("Your Entered Number is Tooo High..", `${n}`);
        attempts++;
        alreadyGuessedNumber.push(n);
    }
}
function showResultMessage(message, num){
    previousGuess.innerHTML += `${num},\t`;
    if(attempts >=10){
        remaining.innerHTML = '';
    }else{
        remaining.innerHTML = `${10 - attempts}`;
    }
    showResult.innerHTML = `${message}`;
}
function endGame(){
    readyToPlay = false;
    input.setAttribute('disabled','');
    previousGuess.innerHTML = '';
    startButton.style.display = 'inline';
    startButton.addEventListener('click', function(e){
        e.defaultPrevented;
        input.removeAttribute('disabled');
        location.reload();

    })
}