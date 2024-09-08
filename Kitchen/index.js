const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const textBox = document.getElementById('text-box');
let levels = false;
let startB = true;

function start(){
    console.log('start');
    location.replace(`index.html`);
}

const prompt = async () => {
    typeWriter('Click anywhere on the screen to begin')
}


function music() {
    if (!startB){
        return
    }
    let bossaNova = new Audio('./feel-bossa-nova-153613.mp3');
    bossaNova.loop = true;
    bossaNova.play();
    instructions();
    startB = false;
}


const instructions = async () => {
    textBox.textContent = "";
    startType();
    typeWriter("Welcome! Choose a level to begin.");
    await sleep(4000);
    endType();
    levels = true;
}

const forbiddenLevel3= async () => {
    if (!levels){
        return
    }
    startType();
    textBox.textContent = "";
    typeWriter("This level hasn't been finished yet. But come back soon to see it.")
    await sleep(6000);
    endType();

}




function typeWriter(message, i=0) {
    if(i == message.length){
        return
    }
    textBox.textContent += message[i];
    
    setTimeout(() => typeWriter(message, i+1), 80);
}


let mySound = new Audio('./typing-6458.mp3');
function startType() {
    mySound.play();
}


function endType(){
    mySound.pause();
    mySound.currentTime = 0;
}