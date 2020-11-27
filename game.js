const player = document.getElementById('player');
const game = document.getElementById('game');
game.addEventListener('click', jump);

function jump() {
    if (player.classList != 'animate'){
        player.classList.add('animate');
    }
    setTimeout(function() {
        player.classList.remove('animate');
    },500)
}