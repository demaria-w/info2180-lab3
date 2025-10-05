//Exercise 1 - Layout the board
document.addEventListener('DOMContentLoaded', () => { //for when the page loads
    
    //to get all the div inside the board
    const boardSquares = document.querySelectorAll("#board div");

    //applying the square class to each 
    boardSquares.forEach(square =>{
        square.classList.add('square');
    });

    
//Exercise 2 - Add an X or O to a square when clicked   

    let currentPlayer = 'X';

    game = Array(9).fill(null); //keeps track of the game

    boardSquares.forEach((square,index) => {
        square.addEventListener('click',() => {
            if (!square.textContent) { //prevents the box from being overwritten
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                game[index] = currentPlayer;

                //switches between layers
                if(currentPlayer === 'X'){
                    currentPlayer = 'O';
                }else {
                    currentPlayer = 'X';
                }
            }
        })
    })
});

