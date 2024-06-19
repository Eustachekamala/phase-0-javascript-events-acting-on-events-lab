// Your code here
const dodger = document.getElementById("dodger");
dodger.style.background = "#FF69B4";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft"){
        mouseDodgerLeft();
    }
});

document.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowRight") {
    mouseDodgerRight();
    }
});