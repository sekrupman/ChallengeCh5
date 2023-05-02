// bot pick
function Computer(){
    const comp = Math.floor(Math.random() * 3);
    if (comp==0) {
        com="Rock";
        document.getElementById("com-rock").style.background=
        "#C4C4C4";
        document.getElementById("com-scissor").style.background=
        "#9C835F";
        document.getElementById("com-paper").style.background=
        "#9C835F";
    }
    else if (comp==1) {
        com="Scissor";
        document.getElementById("com-scissor").style.background=
        "#C4C4C4";
  
        document.getElementById("com-paper").style.background=
        "#9C835F";
        document.getElementById("com-rock").style.background=
        "#9C835F";
    } else{
        com="Paper";
        document.getElementById("com-paper").style.background=
        "#C4C4C4";
  
        document.getElementById("com-scissor").style.background=
        "#9C835F";
        document.getElementById("com-rock").style.background=
        "#9C835F";
    }
  }
  // end
  
  // player pick
  function Rock(){
    document.getElementById("player-rock").style.background=
        "#C4C4C4";
    document.getElementById("player-scissor").style.background=
        "#9C835F";
    document.getElementById("player-paper").style.background=
        "#9C835F";
    player="Rock";
    Computer();
    vs();
    result();
  }
  
  function Scissor(){
    document.getElementById("player-scissor").style.background=
        "#C4C4C4";
    document.getElementById("player-paper").style.background=
        "#9C835F";
    document.getElementById("player-rock").style.background=
        "#9C835F";
    player="Scissor";
    Computer();
    vs();
    result();
  }
  
  function Paper(){
    document.getElementById("player-paper").style.background=
        "#C4C4C4";
    document.getElementById("player-scissor").style.background=
        "#9C835F";
    document.getElementById("player-rock").style.background=
        "#9C835F";
    player="Paper";
    Computer();
    vs();
    result();
  }
  // end

  //decide the winner
  function vs(){
    if (player==com){
        hasil="Draw";
    } else if(player=="Rock" && com=="Scissor"){
        hasil="Player WIN";
    } else if(player=="Scissor" && com=="Paper"){
        hasil="Player WIN";
    } else if(player=="Paper" && com=="Rock"){
        hasil="Player WIN";
    } else{
        hasil="COM WIN";
    }
  }
  // end
   
  // Add Draw/Win
  function result() {
    if (hasil == "Draw") {
        let replace = document.querySelector(".replace")
        replace.innerHTML="DRAW"
        replace.classList.add("result")
        replace.style.background = "#035B0C"
        if (replace.classList.contain("versus")) {
            replace.classList.remove("versus")
        }
        console.log("Match Draw")
    } else if (hasil == 'Player WIN') {
        let replace = document.querySelector(".replace")
        replace.innerHTML="PLAYER 1 <br> WIN"
        replace.classList.add("result")
        replace.style.background = "#4C9654"
        if (replace.classList.contain("versus")) {
            replace.classList.remove("versus")
        }
        console.log("Player Win")
    } else {
        let replace = document.querySelector(".replace")
        replace.innerHTML="COM <br> WIN"
        replace.classList.add("result")
        replace.style.background = "#4C9654"
        if (replace.classList.contain("versus")) {
            replace.classList.remove("versus")
        }
        console.log("Com Win")
    }
  }
  // end