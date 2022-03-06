// Após carregar a página, a interface salvará todos os elementos da classe "square" dentro da variável squares

// Depois com o forEach iremos varrer o array e adicionar um evento para cada square quando for clicado

document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
      square.addEventListener('click', handleClick);
  })

})

// A função handleClick mostra qual quadrado foi clicado, a variável square recebe esse quadrado e identifica ele pela sua ID

// A função handleMove é executada e o jogador da vez terá seu símbolo colocado na tela

function handleClick(event) {
  console.log(event.target);

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    alert("O Jogador " + playerTime + 1 + " Venceu!!" )
  };
  updateSquares();
}

// O forEach irá varrer os quadrados, receberá qual a posição desse quadrado e irá receber o que tem dentro do array board, caso o mesmo esteja preenchido com algum símbolo, ele irá atualizar no HTML


function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
      let position = square.id;
      let symbol = board[position]

      if (symbol != '') {
          square.innerHTML = '<div class=' + symbol + '></div>'
      }
  })
}

function btnClick() {
  btn = document.querySelector(".btn")

  btn.addEventListener("click", restart)
}

btnClick()