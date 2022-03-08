const grid= document.querySelector('.grid');
const start=document.getElementById('start');
const score=document.getElementById('score');
let currentSnake=[2,1,0]
let squares=[];
let direction=1;
function createGrid(){
    for(i=0; i<400; i++){
        const square=document.createElement('div');
        // console.log(square);
         grid.appendChild(square);
         square.classList.add('square');
         squares.push(square);
    }

   
}
createGrid()
console.log(squares);
currentSnake.forEach(index=>squares[index].classList.add('snake'));
function move(){
    const tail=currentSnake.pop();
    console.log(tail);
    console.log(currentSnake);
    squares[tail].classList.remove('snake');
   currentSnake.unshift(currentSnake[0] +direction);
   console.log(currentSnake);
    squares[currentSnake[0]].classList.add('snake');

}
move();
