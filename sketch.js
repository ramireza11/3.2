
let state = 'title';
let cnv;
let points = 0;
let player;
let pizzas = [];
let shirikens = [];
let playerImg;
let pizzaImg;
let shirikenImg;

function preload(){
  playerImg = loadImage('assets /ninja.png');
  pizzaImg = loadImage('assets /pizza.png');
  shirikenImg = loadImage('assets /shuri.png');

}

function setup() {
  cnv = createCanvas(600, 600);
  frameRate(60);

  //imageMode(CENTER);
  rectMode(CENTER);
  textFont('Courier New Bold');

  player = new Player();

  pizzas.push(new Pizza());
  shirikens.push(new Shiriken());
}

function draw() {

  switch (state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'you lost':
      youLost();
      cnv.mouseClicked(youLostMouseClicked);
      break;
    default:
      break;
  }

}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right'
  } else if (keyCode == UP_ARROW){
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW){
    player.direction = 'down'
  } else if (key = ''){
    player.direction = 'still';
  }
}

function keyReleased() {

    let numberKeysPressed = 0;

    if (keyIsDown(LEFT_ARROW)){
      numberKeysPressed++;
    }
    if (keyIsDown(RIGHT_ARROW)){
      numberKeysPressed++;
    }
    if (keyIsDown(DOWN_ARROW)){
      numberKeysPressed++;
    }
    if (keyIsDown(UP_ARROW)){
      numberKeysPressed++;
    }


    if (numberKeysPressed == 0){
    player.direction = 'still';
  }
}

function title(){
  background(0);
  textSize(56);
  fill(255);
  text('NINJA ACADEMY', 80, 80);

  textSize(30);
  text('click here', 250, 500);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background(50, 150, 200);

  if (random(1) <= 0.04){
    pizzas.push(new Pizza());
  }

  if (random(1) <= 0.02){
    shirikens.push(new Shiriken());
  }

  player.display();
  player.move();


  for(let i = 0; i < pizzas.length; i++){
    pizzas[i].display();
    pizzas[i].move();
   }

   for(let i = 0; i < shirikens.length; i++){
     shirikens[i].display();
     shirikens[i].move();
    }


  for (let i = pizzas.length - 1; i >= 0; i--){
    if (dist(player.x, player.y, pizzas[i].x, pizzas[i].y) <= (player.r + pizzas[i].r) /2){
      points++;
      pizzas.splice(i, 1);
  } else if (pizzas[i].x > 600){
    pizzas.splice(i, 1);
    console.log('pizza is out');
  }
}

  for (let i = shirikens.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, shirikens[i].x, shirikens[i].y) <= (player.r + shirikens[i].r) /2){
    points--;
    shirikens.splice(i, 1);
  } else if (shirikens[i].x > 600){
    shirikens.splice(i, 1);
    console.log('shiriken is out');
  }
}

  text(`points: ${points}`, 0, 590);

  if (points >= 10){
    state = 'you win';
  } else if (points <= -1){
    state = 'you lost';
  }

}

function level1MouseClicked(){
  //points++;
  //console.log('points = ' + points);
  //if (points >= 10){
    //state = 'you win'
  //}
}

function youWin(){
  background(213,89,20);
  textSize(56);
  stroke(255);
  textFont('Courier New Bold');
  text('YOU WIN', 180, 80);

  textSize(30);
  textFont('Courier New Bold');
  text('click anywhere to restart', 150, 550);
}

function youLostMouseClicked(){
  state = 'title';
  points = 0;
}

function youLost(){
  background(213,89,20);
  textSize(56);
  stroke(255);
  textFont('Courier New Bold');
  text('YOU LOST', 180, 80);

  textSize(30);
  textFont('Courier New Bold');
  text('click anywhere to restart', 150, 550);
}

function youLostMouseClicked(){
  state = 'title';
  points = 0;
}
