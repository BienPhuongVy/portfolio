/*=========================================
            SAKURA EFFECT
=========================================*/

const container = document.getElementById("sakura-container");
function createPetal(){
    const petal = document.createElement("div");
    petal.className = "sakura";
    petal.innerHTML = "🌸";
    petal.style.left = Math.random()*100 + "vw";
    petal.style.fontSize = (16 + Math.random()*18) + "px";
    petal.style.animationDuration = (8 + Math.random()*8) + "s";
    petal.style.opacity = 0.3 + Math.random()*0.5;
    container.appendChild(petal);
    setTimeout(()=>{
        petal.remove();
    },16000);
}
setInterval(createPetal,450);

/*=========================================
            BUBBLE EFFECT
=========================================*/

function createBubble(){
    const bubble = document.createElement("div");
    bubble.className = "sakura";
    bubble.innerHTML = "🫧";
    bubble.style.left = Math.random()*100 + "vw";
    bubble.style.fontSize = (15 + Math.random()*15) + "px";
    bubble.style.animationDuration = (10 + Math.random()*8) + "s";
    bubble.style.opacity = .2;
    container.appendChild(bubble);
    setTimeout(()=>{
        bubble.remove();
    },18000);
}
setInterval(createBubble,900);