document.getElementById("start").onclick = function() {
  startGame();
  frames = 0;
};

function startGame() {
  draw(160, 460);
}

class Player {
  constructor() {
    this.width = 100;
    this.height = 150;
    this.x = 150;
    this.y = 400;
    this.imgsrc = 'images/Flat-Shaded-Business-Woman.png';
    this.ctx = document.getElementById('game-canvas').getContext('2d');
    }
  

drawPlayer() {
  let image = new Image();
  image.src = this.imgsrc;
  this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
}
}

var sec = 60;

class Game{
  constructor(){
    this.player = new Player();
  }
}

let game = new Game();
let allCats = [];
let allAngryCats = [];


var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
let w= 800;
let h=800;

var myGameArea ={
  stop: function() {
    clearInterval(this.interval);
  },
};

function collisionDetect(object1, object2){
  if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
		object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
  // The objects are touching
      console.log('colliding!!')
      return true

  } else{
    return false
  }
}

class Cat {
  constructor(width, height, x, y, direction, speed) {
    //this.startingPosition = [10, 70, 130, 190, 250, 310, 370, 430, 490, 550, 610, 670, 730, 790]
    this.width = 50;
    this.height = 70;
    this.x = Math.floor(Math.random()*w)//50;//this.startingPosition[Math.floor(Math.random()*this.startingPosition.length)];
    this.y = Math.floor(Math.random()*h);
    this.imgsrc = 'images/Architetto----Gatto.png';
    this.ctx = document.getElementById('game-canvas').getContext('2d');
    this.direction = {  x:1,  y:1 }
    this.speed = 3;
    }
}
function createCats(){
  console.log("creating cat <<<<<< ", allCats.length)
  //if(Math.floor(Math.random() * 24) % 6 === 0) {
    allCats.push(new Cat())
    console.log(allCats)

  //}
}
  // for(let i=0; i<100; i++){
     //allCats.push(new Cat())
  
  // }
  setInterval(() => {
    createCats()
  },1500)
//createCats() 
//makeCats()

// function makeCats(){
//   createCats();
//   createCats();
//   createCats();
//   createCats();
//    createCats();
//    //createCats();
//    //createCats();
//   // createCats();
//    //createCats();
//    //createCats();

// }
var theImage = new Image()
theImage.src = 'images/Architetto----Gatto.png'
theImage.onload = function(){
  //makeCats() 
}

function updateAndDrawCats(){

  //,'images/Architetto----Gatto.png','images/Cat-Pose-2-2015060816.png'
  //,'images/cat-silhouette.png', 'images/CatsLife11.png', 'images/missiridia-Black-and-White-Fluffy-Cat.png';
  
    console.log(allCats.length)
    for(let i=0; i<allCats.length; i++){


      let cats = allCats[i]
      //console.log(allCats.length)
      

      cats.y += cats.direction.y * cats.speed;
      cats.x += cats.direction.x * cats.speed;
      
      let didCatsColideWithPlayer = collisionDetect(game.player, cats)
      if(didCatsColideWithPlayer ===true) {
          allCats.splice(i, 1);
          score++;
      
      }
      //console.log(cats.x)
        //console.log(cats.y)

      if( cats.y>canvas.height - cats.height || cats.y<0  ){ //if the cat exceeds the canvas or is less then zero it's direction reverses
        return cats.direction.y = -1*cats.direction.y
      }

      if( cats.x>canvas.width - cats.width || cats.x<0  ){ 
        return cats.direction.x = -1*cats.direction.x 
      }
      
      //*(Math.floor(Math.random));
      // if(allCats[i].y > 850) {
      //   allCats.splice(i, 1);
      // }
      //console.log("cat array after the update >>>>>>>> ", allCats.length);
      //console.log(theImage)
      ctx.drawImage(theImage, cats.x, cats.y, cats.width, cats.height)
    }
}

class AngryCat extends Cat {
  constructor(width, height, x, y, direction, speed) {
    //this.width = 70;
    //this.height = 70;
    //this.x = Math.floor(Math.random()*w)
    //this.y = Math.floor(Math.random()*h);
    super(width, height, x, y, direction)
    this.imgsrc = 'images/black-cat.png';
    this.ctx = document.getElementById('game-canvas').getContext('2d');
    //this.direction = {  x:1,  y:1 }
    this.speed = 0.5;
    }
}
function createAngryCats(){

  // console.log("creating cat <<<<<< ", allAngryCats.length)
  
  allAngryCats.push(new AngryCat())
  //console.log(allAngryCats)
}
// let timer = 0

function startGame(){
  setInterval(() => {
    createAngryCats()
    // timer++
    // console.log(timer)
  },1500)
  createAngryCats() 
  makeAngryCats()
}
function makeAngryCats(){
  createAngryCats();
  createAngryCats();
  createAngryCats();
}
var otherImage = new Image()
otherImage.src = 'images/black-cat.png'
otherImage.onload = function(){
  makeAngryCats() 
}

function updateAndDrawAngryCats(){

  
    for(let i=0; i<allAngryCats.length; i++){


      let angryCats = allAngryCats[i]

      

      angryCats.y += angryCats.direction.y * angryCats.speed;
      angryCats.x += angryCats.direction.x * angryCats.speed;
      
      let didAngryCatsColideWithPlayer = collisionDetect(game.player, angryCats)
      if(didAngryCatsColideWithPlayer ===true) {
          allAngryCats.splice(i, 1);
          score--;
      
      }
    

      if( angryCats.y>canvas.height - angryCats.height || angryCats.y<0  ){ //if the cat exceeds the canvas or is less then zero it's direction reverses
        return angryCats.direction.y = -1*angryCats.direction.y
      }

      if( angryCats.x>canvas.width - angryCats.width || angryCats.x<0  ){ 
        return angryCats.direction.x = -1*angryCats.direction.x 
      }
      
      ctx.drawImage(otherImage, angryCats.x, angryCats.y, angryCats.width, angryCats.height)
    }
}

let score = 0;
      
function drawScore() {
  ctx.font = "50px Arial";
  ctx.fillStyle = "plum";
  ctx.fillText("Score: "+ score, 20, 40);
}



function setTimer(){     
        sec--;
        if (sec < 1) {
            clearInterval();
            setTimeout(() => {
              alert("Game Over!"+" Score:"+  score);
              location.reload()
              //console.log("you lost!!!!!!!!!!!!")
            }, 100)
            return;
        }     
      //   setTimer()   
      // }, 1000)
      //console.log("This is the timer ============> ", sec);
    // }, 1500/60)
      // return Math.floor(sec / 32)
    }
  
    function drawTimer() {
      // var sec = 1900;
      ctx.font = "50px Arial";
      ctx.fillStyle = "plum";
      ctx.fillText("Time: " + sec, 500, 40);
    }



document.onkeydown = function(e){
  //console.log("====", e)
  switch(e.keyCode){
    case 37: game.player.x-=5; console.log("moving left"); break;
    case 38: game.player.y-=5; console.log("moving up"); break;
    case 39: game.player.x+=5; console.log("moving right"); break;
    case 40: game.player.y+=5; console.log("moving down"); break;
  }
} 

function updateCanvas(){
  //console.log('update')
  ctx.clearRect(0,0,w,h)
  game.player.drawPlayer()
  updateAndDrawCats()
  updateAndDrawAngryCats()
  drawScore()
  drawTimer()
  window.requestAnimationFrame(updateCanvas)
  
}
//createCats()
//updateCanvas()
setInterval(() => {
  setTimer()
}, 1000);

document.getElementById('start').onclick= function(){
  startGame()
  updateCanvas()
}




