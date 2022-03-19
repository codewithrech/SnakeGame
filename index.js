const grid= document.querySelector('.grid');
const start=document.getElementById('start');
const score=document.getElementById('score');
let currentSnake=[2,1,0]
let squares=[];
let direction=1; 
let width=20;
let appleIndex=0;
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
    if(
        (currentSnake[0] + width>=100 && direction===width)||
        (currentSnake[0] % width ===width-1 && direction==1)||
        (currentSnake [0] % width ===0 && direction===-1)||
        (currentSnake[0]- width<0 && direction ===-width)||
        squares[currentSnake[0]+direction].classList.contains('snake')


    )
     
    return clearInterval(timerId)
    const tail=currentSnake.pop();
    console.log(tail);
    console.log(currentSnake);
    squares[tail].classList.remove('snake');
   currentSnake.unshift(currentSnake[0] +direction);
   console.log(currentSnake);
    squares[currentSnake[0]].classList.add('snake');
}

// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow
move();
let timerId=setInterval(move,500);
function generateApples() {
    do {
        //generate a random number
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
generateApples()
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
document.addEventListener('keydown',control);
