// After loading the page, the interface will save all the elements of the "square" class inside the squares variable

// Then with forEach we will scan the array and add an event for each square when clicked

document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
      square.addEventListener('click', handleClick);
  })

})

// The handleClick function shows which square was clicked, the square variable receives this square and identifies it by its ID

// The handleMove function is executed and the current player will have their symbol placed on the screen

function handleClick(event) {
  console.log(event.target);

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    let h1 = document.getElementsByTagName("h1")

    h1[0].innerHTML = ("The Player " + (playerTime + 1) + " Win!!" + "<br>" + "<h1> Tic Tac Toe</h1>" )
  };
  updateSquares();
}

// forEach will scan the squares, it will receive the position of that square and it will receive what is inside the board array, if it is filled with any symbol, it will update in the HTML


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


function start(){
 start = document.querySelector("#startgame")

 start.style.display = "none";

}