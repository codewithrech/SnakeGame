const grid= document.querySelector('.grid');
const startButton=document.getElementById('start');
const scoreDisplay=document.getElementById('score');
let currentSnake=[2,1,0]
let squares=[];
let direction=1; 
let width=20;
let appleIndex=0;
let score=0;
let intervalTime=1000;
let speed =0.5;
let timerId=0;
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

function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(timerId)
    currentSnake = [2,1,0]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 1000
    generateApple()
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)
}
function move(){
    if(
        (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
        // (currentSnake[0] + width>=100 && direction===width)||
        // (currentSnake[0] % width ===width-1 && direction==1)||
        // (currentSnake [0] % width ===0 && direction===-1)||
        // (currentSnake[0]- width<0 && direction ===-width)||
        // squares[currentSnake[0]+direction].classList.contains('snake')


    
     
    return clearInterval(timerId)
    const tail=currentSnake.pop();
    console.log(tail);
    console.log(currentSnake);
    squares[tail].classList.remove('snake');
   currentSnake.unshift(currentSnake[0] +direction);
   console.log(currentSnake);
   // deal with snake head gettinng the apple
   // deal with snake head fets apple 

   if (squares[currentSnake[0]].classList.contains("apple")){


// remove the class of apple 
squares[currentSnake[0]].classList.remove('apple');
// growing our snake by adding class of snake to it 
squares[tail].classList.add("snake");
// grow our snake array 
currentSnake.push(tail);
//generate new apple
generateApples();
// add one to the score 
score++;
//diplay our score
scoreDisplay.textContent=score;
// speed up our snake
clearInterval(timerId);
intervalTime = intervalTime * speed;
timerId = setInterval(move, intervalTime);
   }
squares[currentSnake[0]].classList.add('snake');
}

// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

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
startButton.addEventListener('click', startGame)
generateApples() 
function control(event){
    if(event.keyCode===39){
    console.log("right");
    direction=1;
}
else if(event.keyCode===38){
console.log("up");
direction=-width;