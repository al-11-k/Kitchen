let map = new Map();

map.set('0', 'images/frame0.png')
map.set('1', 'images/frame1.png')
map.set('2', 'images/frame2.png')
map.set('3', 'images/frame3.png')
map.set('4', 'images/frame4.png')
map.set('5', 'images/frame5.png')
map.set('6', 'images/frame6.png')
map.set('7', 'images/frame7.png')
map.set('8', 'images/frame8.png')
map.set('9', 'images/frame9.png')
map.set('10', 'images/frame10.png')
map.set('11', 'images/frame11.png')

map.set('12', 'images/pearS1.png')
map.set('13', 'images/pearS2.png')
map.set('14', 'images/pearS3.png')
map.set('15', 'images/pearS4.png')

map.set('16', 'images/berryS1.png')
map.set('17', 'images/berryS2.png')
map.set('18', 'images/berryS3.png')
map.set('19', 'images/berryS4.png')

map.set('20', 'images/orangeS1.png')
map.set('21', 'images/orangeS2.png')
map.set('22', 'images/orangeS3.png')
map.set('23', 'images/orangeS4.png')

map.set('clean', 'images/cleanFrame.png')




const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const textBox = document.getElementById('text-box');

let dryingBool = false;
let drainingBool = false;
let sprayingBool = true;
let spongeBool = false;



const startInstruction = async () => {
    document.getElementById('start-button').remove();
    let bossaNova = new Audio('./feel-bossa-nova-153613.mp3');
    bossaNova.loop = true;
    bossaNova.play();
    startType();
    typeWriter("Woah! Look at all these dishes. Let's put them away.");
    await sleep(5500);
    endType();
    textBox.textContent = "";
    startType();
    typeWriter("Click the towel to get started");
    dryingBool = true;
    await sleep(2000)
    endType();
    document.getElementById('drying-button').style.borderColor = `#F46541`;
    return
}



function callDrying(){
    if (!dryingBool) {
        console.log('exit');
        return;
    }
    dryingBool = false;
    drying();
}



const drying = async () => {
    console.log('drying');
    textBox.textContent = "";
    switchBackground('1');
    startType();
    typeWriter("Let's dry this plate. Take a deep breath in.");
    await sleep(4000);
    endType();
    countingPop();
    textBox.textContent = "";
    await sleep(3800);

    startType();
    typeWriter("Blow on the plate.");
    await sleep(2000);
    endType();
    countingPop();
    await sleep(3700);
    switchBackground('2');

    textBox.textContent = "";
    await sleep(2500);
    startType();
    typeWriter("Great job! Now let's do the rest of the plates.");
    switchBackground('3');
    await sleep(4000)
    endType();

    switchBackground('4');
    textBox.textContent = "";
    await sleep(2000);
    startType();
    typeWriter("Deep breath in...........")
    await sleep(2000);
    endType();
    countingPop();
    await sleep(4000);

    textBox.textContent = "";
    startType();
    typeWriter("Now blow out")
    await sleep(2000);
    endType();
    countingPop();
    await sleep(3700);
    switchBackground('5');

    textBox.textContent = "";
    await sleep(4000);
    startType();
    typeWriter("Beautiful! Just one more now.")
    switchBackground('6');
    await sleep(4000)
    endType();

    switchBackground('7');
    textBox.textContent = "";
    await sleep(2000);
    startType();
    typeWriter("Deep breath in...........")
    await sleep(2000);
    endType();
    countingPop();
    await sleep(4000);

    textBox.textContent = "";
    startType();
    typeWriter("Now blow out")
    await sleep(2000);
    endType();
    countingPop();
    await sleep(3700);
    switchBackground('8');

    textBox.textContent = "";
    await sleep(2000);
    startType();
    typeWriter("All done!");
    await sleep(1000);
    endType();

    switchBackground('9');
    textBox.textContent = "";
    await sleep(1000);
    document.getElementById('drying-button').style.borderColor = '#555555';
    startType();
    typeWriter("Now we need to drain the sink. Tap the sink to drain.");
    await sleep(4000);
    endType();
    drainingBool = true;
}


const countingPop = async () => {
    document.getElementById('count1').style.opacity = 1;
    await sleep(1000)

    document.getElementById('count2').style.opacity = 1;
    await sleep(1000)

    document.getElementById('count3').style.opacity = 1;
    await sleep(1000)

    document.getElementById('count1').style.opacity = 0;
    document.getElementById('count2').style.opacity = 0;
    document.getElementById('count3').style.opacity = 0;
}



function callDraining(){
    if (!drainingBool) {
        console.log('exit');
        return;
    }
    draining();
}


const draining = async () => {
    document.getElementById('countingPop').remove();
    switchBackground('10');
    await sleep(2000);
    switchBackground('11');
    textBox.textContent = "";
    startType();
    typeWriter('Now the sink needs to be cleaned!');
    await sleep(3800);
    endType();
    startType();
    typeWriter(' Click the spray bottle to get started.');
    await sleep(2000);
    endType();
    document.getElementById('spray-button').style.borderColor = `#F46541`;
    sprayingBool= true;
}



function callSpraying(){
    if (!sprayingBool) {
        console.log('exit');
        return;
    }
    sprayingBool = false;
    document.getElementById('spray-button').style.borderColor = `#555555`;
    pickColor();
}




const pickColor = async () => {
    textBox.textContent = "";
    startType();
    typeWriter('Pick a scent for the cleaning spray.')
    await sleep(3000);
    endType();

    console.log('displaying');
    let colorDiv = document.createElement("div");
        
    colorDiv.id = "colorDiv";
    
    for (let i = 1; i <= 3; i++) {
        let newDiv = document.createElement("div");

        if(i == 1){
            newDiv.className = `pearDiv`;
            newDiv.onclick = function() {
                pearSpray();
            };
        }

        if(i == 2){
            newDiv.className = `berryDiv`;
            newDiv.onclick = function() {
                berrySpray();
            };
        }

        if(i == 3) {
            newDiv.className = `orangeDiv`;
            newDiv.onclick = function() {
                orangeSpray();
            };
        }

        colorDiv.appendChild(newDiv);
    }

    const bkgDiv = document.getElementById('bgContainer');
    bkgDiv.appendChild(colorDiv);
}





const pearSpray = async () => {
    textBox.textContent = "";
    document.getElementById('colorDiv').remove();
    switchBackground('12');
    await sleep(2000);
    switchBackground('13');
    await sleep(2000);
    switchBackground('14');
    await sleep(2000);
    switchBackground('15');
    await sleep(2000);
    finishSpray();
}


const berrySpray = async () => {
    textBox.textContent = "";
    document.getElementById('colorDiv').remove();
    switchBackground('16');
    await sleep(2000);
    switchBackground('17');
    await sleep(2000);
    switchBackground('18');
    await sleep(2000);
    switchBackground('19');
    await sleep(2000);
    finishSpray();
}


const orangeSpray = async () => {
    textBox.textContent = "";
    document.getElementById('colorDiv').remove();
    switchBackground('20');
    await sleep(2000);
    switchBackground('21');
    await sleep(2000);
    switchBackground('22');
    await sleep(2000);
    switchBackground('23');
    finishSpray();
}


const finishSpray = async () => { 
    startType();
    typeWriter("Now it's time to scrub the sink clean.")
    await sleep(3400);
    endType();
    textBox.textContent = "";
    startType();
    typeWriter("Click the sponge and then drag it across the sink to clean.")
    await sleep(7000);
    endType();
    document.getElementById('sponge-button').style.borderColor = `#F46541`;
    spongeBool= true;
}



function callSponge(){
    if (!spongeBool) {
        console.log('exit');
        return;
    }
    spongeBool = false;
    sponge();
}


/* This code adapted from https://www.geeksforgeeks.org/draggable-element-using-javascript/ */
function sponge() {
    let spongeDiv = document.createElement("div");
    console.log('sponge');

    spongeDiv.id = "spongeDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(spongeDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        spongeDiv.style.left = `${leftValue + movementX}px`;
        spongeDiv.style.top = `${topValue + movementY}px`;
    }
    spongeDiv.addEventListener("mousedown", () => {
        spongeDiv.addEventListener("mousemove", onMouseDrag);
    });
    spongeDiv.addEventListener("mouseup", () => {
        spongeDiv.removeEventListener("mousemove", onMouseDrag);
        document.getElementById('spongeDiv').remove();
        finish();
    });

    const bkgDiv = document.getElementById('bgContainer');
    bkgDiv.appendChild(spongeDiv);

}



const finish = async () => {
    textBox.textContent = "";
    switchBackground('clean');
    startType();
    typeWriter('You finished! Time to move on to level 2.')
    await sleep(4000);
    endType();
    location.replace(`index.html`);
}


function switchBackground(frame) {
    const container = document.getElementById('bgContainer');
    const currentBackground = container.style.backgroundImage;
    const frameUrl = map.get(frame);

    container.style.backgroundImage = `url('${frameUrl}')`;
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