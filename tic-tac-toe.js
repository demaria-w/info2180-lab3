//Exercise 1 - Layout the board
document.addEventListener('DOMContentLoaded', () => { //for when the page loads
    
    //to get all the div inside the board
    const boardSquares = document.querySelectorAll("#board div");

    //applying the square class to each 
    boardSquares.forEach(square =>{
        square.classList.add('square');

//Exercise 3 - Change the style when you move your mouse over a square
        square.addEventListener('mouseenter',() =>{
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave',() =>{
            square.classList.remove('hover');
        });
    });

//Exercise 4 - Check for the winner and update the status

const status = document.getElementById('status');
let gameOver = false;

const winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; //win patterns for row, column and diagonals

function testWinner(){
    for (let combo of winCombos){
        const [num1,num2,num3] = combo;
        if (
            game[num1] && game[num1] === game[num2] && game[num1] === game[num3] //tess values against win combinations
        ) {
            const winner = game[num1];
            status.textContent = `Congratulations! ${winner} is the Winner!`; //shows the winner
            status.classList.add('you-won');
            gameOver = true;
            return true;
        }
    }
    return false;
}
    
    
//Exercise 2 - Add an X or O to a square when clicked   

    let currentPlayer = 'X';

    game = Array(9).fill(null); //keeps track of the game

    boardSquares.forEach((square,index) => {
        square.addEventListener('click',() => {
            if (!square.textContent && !gameOver) { //prevents the box from being overwritten and that the game isn't over
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                game[index] = currentPlayer;

                //switches between players once there is no winner
                if (!testWinner()){
                    if(currentPlayer === 'X'){
                        currentPlayer = 'O';
                    }else {
                        currentPlayer = 'X';
                    }
                }
            }
        })
    })

//Exercise 5 - Restart the game
let newGamebtn = document.querySelector('.btn'); //initializes the button

newGamebtn.addEventListener('click', () => {
        boardSquares.forEach(square =>{
            square.textContent = ''; //resets text content to nothing
            square.classList.remove('X','O'); 
        });

        game = Array(9).fill(null);
        currentPlayer = 'X'; //resets first player to X
        gameOver = false;
        status.classList.remove('you-won');
        status.textContent = "Move your mouse over a square and click to play an X or an O."; //puts back default status message
});

});

