const grid= document.querySelector('.grid');
const start=document.getElementById('start');
const score=document.getElementById('score');
let currentSnake=[2,1,0]
let squares=[];
let direction=1; 
let width=20;
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
let timerId=setInterval(move,500);
function control(event){
    if(event.keyCode===39){
    console.log("right");
    direction=1;
}
else if(event.keyCode===38){
console.log("up");
direction=-width;
}
else if (event.keyCode===37){
    console.log("left");
    direction=-1;

}
else if (event.keyCode===40){
    console.log("down");
    direction=+width;
}
}
document.addEventListener('keyup',control);