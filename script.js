let toggle = document.querySelector('.input');
let body = document.querySelector('body');
let currMode = "light";
let navbar = document.querySelector(".nav-bar");
let heading = document.querySelector(".heading");
let btn = document.querySelector(".btn")[0];
         // this is upto light and drak mode
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let o = true;
let newgamebtn = document.querySelector(".newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let footer = document.querySelector(".footer");
const winpatters = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector(".loder");
        loader.classList.add("loder-hidden");
    }, 2000); // Delay in milliseconds (adjust as needed)
});


let winner = null; // Declare winner outside any functions to make it accessible globally
const resetgame = () =>{
    o = true;
    anablebox();
    msgcontainer.classList.add("hide");
}

const anablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disabledbox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = () => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
};

const checkWinner = () => {
    for (let pattern of winpatters) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                winner = pos1;
                showWinner(pos1)
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === "") { // Only proceed if the box is empty
            if (o) {
                box.innerText = "O";
                o = false;
            } else {
                box.innerText = "X"; // Use uppercase "X" for consistency
                o = true;
            }
            box.disabled = true;
            checkWinner(); // Check for a winner after each move
        }
    });
});

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


toggle.addEventListener('click', () => {
    if (toggle.checked) {
        currMode = "dark";
        body.style.background = "#313131";
        body.style.color = "white";
        body.style.backgroundImage = "radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)";
        navbar.style.background = "#212121"; // Dark mode navbar background color // Dark mode navbar text color
        heading.style.color = "white";
        body.style.backgroundSize = "30px 30px";
        body.style.backgroundPosition = " -5px -5px";
        footer.style.background = "white";
        footer.style.color = "black"
    } else {
        currMode = "light";
        body.style.background = "white";
        body.style.color = "black";
        body.style.backgroundImage = "none"; // Remove background image when switching to light mode
        navbar.style.background = "lightgrey"; // Light mode navbar background color
        heading.style.color = "black";
        body.style.backgroundImage = "radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)";
        body.style.backgroundSize = "30px 30px";
        body.style.backgroundPosition = " -5px -5px";
        footer.style.background = "black";
        footer.style.color = "white";
        
    }
});
