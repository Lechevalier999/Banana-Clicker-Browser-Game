(function () {
    let clickCount = 0; 

    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "50px";

    const banana = document.createElement("div");
    banana.textContent = "🍌"; 
    banana.style.fontSize = "100px";
    banana.style.textAlign = "center";
    banana.style.marginBottom = "10px";

    const instruction = document.createElement("div");
    instruction.textContent = "Press space to interact";
    instruction.style.fontSize = "18px";
    instruction.style.textAlign = "center";
    instruction.style.marginBottom = "20px";

    const counterDisplay = document.createElement("div");
    const counterText = document.createTextNode(`Clicks: ${clickCount}`);
    counterDisplay.appendChild(counterText);
    counterDisplay.style.fontSize = "24px";
    counterDisplay.style.textAlign = "center";

    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") { 
            event.preventDefault(); 
            clickCount++;
            counterText.nodeValue = `Clicks: ${clickCount}`;
        }
    });

    
    container.appendChild(banana);
    container.appendChild(instruction);
    container.appendChild(counterDisplay);

    document.body.appendChild(container);
})();
