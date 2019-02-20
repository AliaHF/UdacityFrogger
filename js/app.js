// Enemies our player must avoid


var Enemy = function Enemy(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.startx=x;
    this.starty=y;
    this.speed=100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    this.x+=this.speed*dt;
    if(this.x>510)
        {this.x=this.startx}
    // which will ensure the game runs at the same speed for
    // all computers.

        if( player.x >= this.x -60 && player.x <=this.x + 60 ){
        if( player.y >= this.y -60 && player.y <=  this.y+60 ){
            player.reset();
            level.textContent=0;
            allEnemies.forEach(function(enemy) {
            enemy.reset();
            

        });
     }
 }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//reset all enemy to initial location
Enemy.prototype.reset = function() {

    this.x=this.startx;
    this.y=this.starty;
    this.speed=100;

};

//function to  increade all enemies speed depends on the level
function incSpeed() {

     allEnemies.forEach(function(enemy) {
            enemy.speed=enemy.speed+50;
           
        });


};

//player function
var player = function player(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.playerx=x;
    this.playery=y;
    this.sprite = "images/char-boy.png";
  
};

//update player with speed
 player.prototype.update = function(dt) {
     //multiply any movement by the dt parameter
     this.x=this.x+(this.speed*dt);
     // which will ensure the game runs at the same speed for
     // all computers.
    
 };
// render - create player on canvas 
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//controling player and level up 
player.prototype.handleInput=  function (keyPress){
  if(keyPress == 'up'){
    this.y=this.y-83;
   // console.log(this.y)

  }
if(keyPress == 'down' && this.y<390){
    this.y=this.y+83;
  //  console.log(this.y)
  }
  if(keyPress == 'left' && this.x>-2 ){
    this.x=this.x-101;
  //  console.log(`x= ${this.x}`)
  }
  if(keyPress == 'right' && this.x<402 ){
    this.x=this.x+101;
  //  console.log(`x= ${this.x}`)
  }
   if(keyPress == 'up' &&  this.y<58 && level.textContent!=5){
    level.textContent++;
    incSpeed();
    player.reset();
  }
  if(level.textContent == 5){
    Congratulation();
  }

}

//reset player to initial location x,y
player.prototype.reset =  function (){
     this.x=this.playerx;
     this.y=this.playery;

    }

// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//change the player image. 
function changeChar(num){

if(num==1){
    
      player.sprite ="images/char-boy.png";
  
     

}
if(num==2){
  player.sprite='images/char-horn-girl.png';
}
if(num==3){

player.sprite ='images/char-princess-girl.png';

}
}

//popip after reaching level 5 
function Congratulation() {
 console.log("we win!");

      swal({
      title: "Congratulation!!",
       confirmButtonText: 'Reset',
      showCancelButton: true
    }, function() {
      location.reload();
      
    });
  }

window.onload=function(){ 

// variables
  

  const Char1 = document.getElementById("char1");
  Char1.addEventListener("click", function(){ changeChar(1); console.log("clicke1"); });

  const Char2 = document.getElementById("char2");
  Char2.addEventListener("click", function(){ changeChar(2); console.log("cccc") });


  const Char3 = document.getElementById("char3");
  Char3.addEventListener("click", function(){ changeChar(3); });

  let level = document.querySelector('#level'); // moves
  level.textContent=0; // set number of the moves to zero 

}



