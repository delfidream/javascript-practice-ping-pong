const p1 = {
    score:0,
    button:document.querySelector("#add-player-1"),
    display:document.querySelector("#score-player-1")
}
const p2 = {
    score:0,
    button:document.querySelector("#add-player-2"),
    display:document.querySelector("#score-player-2")
}

const buttonReset = document.querySelector("#reset-game");
const selectMaxPlay = document.querySelector('#max-number');
let maxPlay = document.querySelector('#max-number').value;


selectMaxPlay.addEventListener('change',function(e){
    maxPlay = document.querySelector('#max-number').value;
    console.log(maxPlay)
});

function updateScore(player, opponent){

    player.score++;
    player.display.innerText=player.score;
    selectMaxPlay.setAttribute("disabled", "disabled");

    if(player.score==maxPlay){
        player.button.classList.add("disabled");
        opponent.button.classList.add("disabled");
        player.display.classList.add("has-text-primary");
    }

}

p1.button.addEventListener('click',function(e){
    updateScore(p1,p2);
});

p2.button.addEventListener('click',function(e){
    updateScore(p2,p1);
});

buttonReset.addEventListener('click',function(e){

    for (let p of [p1,p2]){
        p.score = 0;
        p.display.innerText=p.score;
        p.button.classList.remove("disabled");
        p.display.classList.remove("has-text-primary");

    }
    selectMaxPlay.removeAttribute("disabled");
});