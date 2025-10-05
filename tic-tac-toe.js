//Exercise 1 - Layout the board
document.addEventListener('DOMContentLoaded', () => { //for when the page loads
    
    //to get all the div inside the board
    const boardSquares = document.querySelectorAll("#board div");

    //applying the square class to each 
    boardSquares.forEach(square =>{
        square.classList.add('square');
    });
});

