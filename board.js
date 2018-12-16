     
// create a canavs
 var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d"); 
  
        
// Size of tile, columns and rows
var tileSize = 100;      
var cols = 5;
var rows = 6; 
 
 // define x and y position   
var x = 0;
var y = (rows - 1) * tileSize ;
var dir = 1;
var columnNr = 1
var position = 0
       
// define color
var colorA = "green";
var colorB = "white"
        
// create player array 
var tiles=[];

var players = [{ position: 0, color: "gold"},
                 { position: 0, color: "blue"}];
                
 var  ladders = [{start: 7, end: 23},
                 {start: 9,end: 12},
                 {start: 25,end: 27}];

var  snakes = [{ start: 9, end: 1},
                 {start: 29,end: 18}];

  
 
        
// set player position 
        
var totalSteptakenByPlayers= 0;     
 
        
 // roll dice

function rollDice(){
    var die1 = document.getElementById("die1");
    var randomDiceResult = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = randomDiceResult;
      console.log("You rolled", randomDiceResult);

    
    var currentPlayer = players[totalSteptakenByPlayers];
    currentPlayer.position += randomDiceResult;
  
  
      ladders.forEach(ladder=>{
    if (ladder.start === currentPlayer.position) {
      console.log("You stepped on a ladder!" + currentPlayer.position);
      currentPlayer.position = ladder.end;
    }
  });
       
  snakes.forEach(snake=>{
    if (snake.end === currentPlayer.position) {
      console.log("You stepped down!"+ + currentPlayer.position);
      currentPlayer.position = snake.start;
    }
  });
    
    
    if(randomDiceResult===6){
       currentPlayer==currentPlayer;
        console.log("roll again")
   }
          
      if (currentPlayer.position >=30) {
          
        clearInterval(movePlayer);
          gameOver();
          

    }
    else{
     totalSteptakenByPlayers ++;
}
   
  if (totalSteptakenByPlayers>= players.length) {
         totalSteptakenByPlayers = 0;
   
            
   }  
  drawPlayer()
    
    
    
     }         
 var movePlayer=setInterval(rollDice, 1000)
 
 
 // game over
 
 function gameOver(){
     var  img = new Image;
     img.src = "image/gameOverCover.svg";
     var x = 0; var y = 200; 
     
     function draw(){
         canvas.width = 900
         context.fillRect(0,0,canvas.width,canvas.height);
         context.fillStyle="#2a3f70";
         context.font= "100px Verdana";
         context.textAlign="center";
         context.strokeStyle="#52ce90";
         context.strokeText("Game Over", x, y);
         context.fill();
         context.drawImage(img, x, 100);
         if (x== canvas.width/3){
             clearInterval(moveText);
         } else {
             x++;  
         }
     }
     var moveText = setInterval( draw, 20)
     }            
        
  
                
// create Tiles  array      

for(c=0;c<cols;c++){
    var row = [];
    tiles.push(row);
    for(r=0;r<rows;r++){ 
        row.push({x,y,position, status:1});
        position++
    } 
}

          
 // draw plyer           

function drawTiles(){
    for(c=0;c<cols;c++){
        for(r=0;r<rows;r++){ 
            
            var tile =  tiles[c][r]
            tile.r = x
            tile.c = y 
            
            if (columnNr % 2 == 0) 
            {
                context.fillStyle = colorA;
            }
            else {
                context.fillStyle = colorB;
            }
            
            context.fillRect(x,y, tileSize , tileSize )
           
           
           context.font = "18px tahoma";
           context.textBaseline="4";
           context.fillStyle = "black"
           context.fillText(columnNr, x,y+tileSize ) 
            columnNr++
            
            
            // Move along a winding path up the rows
            x = x + (tileSize  * dir);
            if (x >= canvas.width || x <= -tileSize ) {
                dir *= -1;
                x += tileSize  * dir;
                y -= tileSize ;
            } 
        }    
    } 
}
      
drawTiles()
  

// draw Player


function drawPlayer(){
    players.forEach(player=>{
        var square = null
            
    tiles.forEach(row=>{
        
        row.forEach(square=>{
            
            if (square.position === player.position){
                
                context.beginPath();
                context.arc(square.r+50,square.c+50,30, 0, Math.PI*2);
                context.fillStyle = (player.color);
                context.fill();
                context.closePath();
                context.stroke();
            }
        });
    });
    
    });
}


            
// draw snake and Ladder         


function SnakeAndLadders() {
    
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 7, 23);
    };
    img.src = "image/largeLadder.svg";
    
    var img1 = new Image();
    img1.onload = function () {
        
        context.drawImage(img1, 9, 12);
    };
    img1.src = "image/smallLadder.svg";
    
    var img2 = new Image();
    img2.onload = function () {
        context.drawImage(img2, 9, 1);
    };
    img2.src = "image/snake1.svg";
    
    var img3 = new Image();
    img3.onload = function () 
    {
        context.drawImage(img3, 29, 18);
    };
    img3.src = "image/snake2.svg";   

    var img4 = new Image();
    img4.onload = function () 
    {
        context.drawImage(img4, 25, 27);
    };
    img4.src = "image/mediumLadder.svg";   


}

    SnakeAndLadders();