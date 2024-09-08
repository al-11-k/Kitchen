const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const textBox = document.getElementById('text-box');


function heart() {
    let heartDiv = document.createElement("div");

    heartDiv.id = "heartDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(heartDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        heartDiv.style.left = `${leftValue + movementX}px`;
        heartDiv.style.top = `${topValue + movementY}px`;
    }
    heartDiv.addEventListener("mousedown", () => {
        heartDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        heartDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(heartDiv);

}


function swirl() {
    let swirlDiv = document.createElement("div");

    swirlDiv.id = "swirlDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(swirlDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        swirlDiv.style.left = `${leftValue + movementX}px`;
        swirlDiv.style.top = `${topValue + movementY}px`;
    }
    swirlDiv.addEventListener("mousedown", () => {
        swirlDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        swirlDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(swirlDiv);
}


function berry() {
    let berryDiv = document.createElement("div");

    berryDiv.id = "berryDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(berryDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        berryDiv.style.left = `${leftValue + movementX}px`;
        berryDiv.style.top = `${topValue + movementY}px`;
    }
    berryDiv.addEventListener("mousedown", () => {
        berryDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        berryDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(berryDiv);
}


function pear() {
    let pearDiv = document.createElement("div");

    pearDiv.id = "pearDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(pearDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        pearDiv.style.left = `${leftValue + movementX}px`;
        pearDiv.style.top = `${topValue + movementY}px`;
    }
    pearDiv.addEventListener("mousedown", () => {
        pearDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        pearDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(pearDiv);
}


function orange() {
    let orangeDiv = document.createElement("div");

    orangeDiv.id = "orangeDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(orangeDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        orangeDiv.style.left = `${leftValue + movementX}px`;
        orangeDiv.style.top = `${topValue + movementY}px`;
    }
    orangeDiv.addEventListener("mousedown", () => {
        orangeDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        orangeDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(orangeDiv);
}



function k() {
    let kDiv = document.createElement("div");

    kDiv.id = "kDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(kDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        kDiv.style.left = `${leftValue + movementX}px`;
        kDiv.style.top = `${topValue + movementY}px`;
    }
    kDiv.addEventListener("mousedown", () => {
        kDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        kDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(kDiv);
}



function r() {
    let rDiv = document.createElement("div");

    rDiv.id = "rDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(rDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        rDiv.style.left = `${leftValue + movementX}px`;
        rDiv.style.top = `${topValue + movementY}px`;
    }
    rDiv.addEventListener("mousedown", () => {
        rDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        rDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(rDiv);
}



function a() {
    let aDiv = document.createElement("div");

    aDiv.id = "aDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(aDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        aDiv.style.left = `${leftValue + movementX}px`;
        aDiv.style.top = `${topValue + movementY}px`;
    }
    aDiv.addEventListener("mousedown", () => {
        aDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        aDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(aDiv);
}



function flower() {
    let flowerDiv = document.createElement("div");

    flowerDiv.id = "flowerDiv";

    function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(flowerDiv);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        flowerDiv.style.left = `${leftValue + movementX}px`;
        flowerDiv.style.top = `${topValue + movementY}px`;
    }
    flowerDiv.addEventListener("mousedown", () => {
        flowerDiv.addEventListener("mousemove", onMouseDrag);
    });
    document.addEventListener("mouseup", () => {
        flowerDiv.removeEventListener("mousemove", onMouseDrag);
    });

    const bkgDiv = document.getElementById('fridge');
    bkgDiv.appendChild(flowerDiv);
}


function startInstruction() {
    document.getElementById('start-button').remove();
    let bossaNova = new Audio('./feel-bossa-nova-153613.mp3');
    bossaNova.loop = true;
    bossaNova.play();
    startType();
    typeWriter("Click a magnet to add it to the fridge. Then drag to decorate!");
    endType();
}


function returnHome() {
    location.replace(`index.html`);
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