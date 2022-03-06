// Iniciar variáveis
let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


// A função handleMove verifica quem fez o movimento e em qual quadrado ele fez o movimento, colocando assim um simbolo dentro do array de acordo com a vez do jogador.

function handleMove(position) {

    if (gameOver) {
        return;

    }

    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin();

        if (gameOver == false) {

            playerTime = (playerTime == 0 ? 1 : 0)
        }
    }
    return gameOver;
}


// Verificando se as combinações de jogadas são iguais as combinações vencedoras
function isWin() {


    // O for faz a verificação, se o a seq tiver os mesmos componentes que dão a vitória o jogo será finalizado
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true
        }
    }
    return false
}

function restart() {
    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    symbols = ['o', 'x'];
    gameOver = false

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.innerHTML = ""
    })

    let h1 = document.getElementsByTagName("h1")

    h1[0].innerHTML = "<h1>Jogo da velha</h1>"
}