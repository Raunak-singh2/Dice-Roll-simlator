const rollButtonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rolLHistoryEl = document.getElementById("roll-history");
let histoerList=[];

function upDateHistory(){
rolLHistoryEl.innerHTML="";
for(let i=0; i<histoerList.length; i++){
const listItems=document.createElement("li");
listItems.innerHTML=`Roll ${i +1}: <span>${getDiceFace(histoerList[i])} </span>`;
rolLHistoryEl.appendChild(listItems)
}
}



function rollDice() {
  const randomeEl = Math.floor(Math.random() * 6) + 1;
 const diceFace= getDiceFace(randomeEl);
 diceEl.innerHTML=diceFace;
histoerList.push(randomeEl);
 upDateHistory();
}
function getDiceFace(randomeEl) {
  switch (randomeEl) {
    case 1:
      return "&#9856;";

    case 2:
      return "&#9857;";

    case 3:
      return "&#9858;";

    case 4:
      return "&#9859;";

    case 5:
      return "&#9860;";

    default:
        return "";
  }
}

rollButtonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 2000);
});
