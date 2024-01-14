for (let i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}

var move = 0;

document.getElementById('game').onclick  = function(event) {
    console.log(event);
    if (event.target.className == 'block') {
        if (move%2 == 0){
            event.target.innerHTML = 'x';
        } else {
            event.target.innerHTML = 'o';
        }
        move++;
        checkWinner();
    }
}

function checkWinner() {
    var allblock = document.getElementsByClassName('block');

    function resetGame() {
        for (let i = 0; i < allblock.length; i++) {
            allblock[i].innerHTML = '';
        }
        move = 0;
    }
   
    function checkWinnerSymbol(symbol) {
        switch (true) {
            // Horizontal lines
            case allblock[0].innerHTML === symbol && allblock[1].innerHTML === symbol && allblock[2].innerHTML === symbol:
            case allblock[3].innerHTML === symbol && allblock[4].innerHTML === symbol && allblock[5].innerHTML === symbol:
            case allblock[6].innerHTML === symbol && allblock[7].innerHTML === symbol && allblock[8].innerHTML === symbol:
            // Vertical lines
            case allblock[0].innerHTML === symbol && allblock[3].innerHTML === symbol && allblock[6].innerHTML === symbol:
            case allblock[1].innerHTML === symbol && allblock[4].innerHTML === symbol && allblock[7].innerHTML === symbol:
            case allblock[2].innerHTML === symbol && allblock[5].innerHTML === symbol && allblock[8].innerHTML === symbol:
            // Diagonals
            case allblock[0].innerHTML === symbol && allblock[4].innerHTML === symbol && allblock[8].innerHTML === symbol:
            case allblock[2].innerHTML === symbol && allblock[4].innerHTML === symbol && allblock[6].innerHTML === symbol:
                alert(`${symbol}'s win`);
                resetGame();
                break;
        }
    }
    checkWinnerSymbol('x');
    checkWinnerSymbol('o');
}