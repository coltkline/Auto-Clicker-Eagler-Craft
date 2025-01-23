let cps = 0.5;
let intervalTime = 1000 / cps;
let intervalID = null;

function click() {
    ModAPI.clickMouse();
}

document.addEventListener('keydown', function(event) {
    if (event.key === '[') {  // Change this to your desired activation key
        if (intervalID === null) {
            intervalID = setInterval(click, intervalTime);
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '[') {  // Change this to your desired activation key
        if (intervalID !== null) {
            clearInterval(intervalID);
            intervalID = null;
        }
    }
});
