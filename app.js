let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-bnt");
let msgContainer=document.querySelector(".mes-container");
let msg=document.querySelector("#msg")


let trunO =true;

const winPtn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    trunO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(trunO){
            box.innerText="O";
            trunO=false;
        }else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;

        checkWinner();

    });
});


const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPtn){
        let p1Val=boxes[pattern[0]].innerText;
        let p2Val=boxes[pattern[1]].innerText;
        let p3Val=boxes[pattern[2]].innerText;

        if(p1Val != "" && p2Val != "" && p3Val != ""){
            if(p1Val === p2Val && p2Val === p3Val){
                console.log("Winner",p1Val);
                showWinner(p1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);


