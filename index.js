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
class Game{
  constructor(){
    this.player = new Player();
  }
}

let game = new Game();
let allCats = [];


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
  constructor() {
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
  },450)
createCats() 
makeCats()

function makeCats(){
  createCats();
  createCats();
  //createCats();
   //createCats();
   //createCats();
   //createCats();
   //createCats();
  // createCats();
   //createCats();
   //createCats();

}
var theImage = new Image()
theImage.src = 'images/Architetto----Gatto.png'
theImage.onload = function(){
  makeCats() 
}

function updateAndDrawCats(){

  //,'images/Architetto----Gatto.png','images/Cat-Pose-2-2015060816.png'
  //,'images/cat-silhouette.png', 'images/CatsLife11.png', 'images/missiridia-Black-and-White-Fluffy-Cat.png';
  
    for(let i=0; i<allCats.length; i++){


      let cats = allCats[i]
      //console.log(allCats.length)
      

      cats.y += cats.direction.y * cats.speed;
      cats.x += cats.direction.x * cats.speed;
      
      let didCatsColideWithPlayer = collisionDetect(game.player, cats)
      if(didCatsColideWithPlayer ===true) {
          allCats.splice(i, 1);
      

      //console.log(cats.x)
        //console.log(cats.y)

      if( cats.y>canvas.height - cats.height || cats.y<0  ){ //if the cat exceeds the canvas or is less then zero it's direction reverses
        return cats.direction.y = -1*cats.direction.y
      }

      if( cats.x>canvas.width - cats.width || cats.x<0  ){ 
        return cats.direction.x = -1*cats.direction.x 
      }
      
    }
    }



      //*(Math.floor(Math.random));
      // if(allCats[i].y > 850) {
      //   allCats.splice(i, 1);
      // }
      //console.log("cat array after the update >>>>>>>> ", allCats.length);
      ctx.drawImage(theImage, cats.x, cats.y, cats.width, cats.height)
    }
  

/*let score = 0;
      
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
*/


document.onkeydown = function(e){
  console.log("====", e)
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
  //drawScore()
  window.requestAnimationFrame(updateCanvas)
  
}
//createCats()
updateCanvas()



