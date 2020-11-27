const player = document.getElementById('player');
const game = document.getElementById('game');
game.addEventListener('click', jump);

function jump() {
    if (player.classList != 'animate'){ //only add animation if it isn't already
        player.classList.add('animate');
    }
    setTimeout(function() {
        player.classList.remove('animate'); //remove animation so it can be added aggain
    },500)
}

const lose = document.getElementById('message')

let uLose = setInterval(function() {
    let playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue('top')); //get int position of the player
    let blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue('left')); //get int position of block
    if (blockLeft<20 && blockLeft>0 && playerTop>=330) { //block inside player(<20) but positive, player height 330
        block.style.animation = 'none';
        lose.innerHTML = 'You Lose'

    }
})