let cps = 0.5; 
let intervalTime = 1000 / cps; 
let intervalID = null; 

function click() { 
    ModAPI.clickMouse(); 
} 

document.addEventListener('keydown', function(event) { 
    if (event.key === '[') { // Toggle activation on pressing "["
        if (intervalID === null) { 
            intervalID = setInterval(click, intervalTime); 
        } else { 
            clearInterval(intervalID); 
            intervalID = null; 
        } 
    } 
});
