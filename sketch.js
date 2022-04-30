
let state = 'title';
let cnv;
let points = 0;
let player;
let pizzas = [];
let shirikens = [];
let playerImg;
let pizzaImg;
let shirikenImg;
let logoImg;
let eImg;
let ninjalogoImg;
let bgpImg;
let keysImg;

//let playerSS;
//let playerJSON;
//let playerAnimation = [];


function preload(){
  playerImg = loadImage('assets /ninja0.png');
  pizzaImg = loadImage('assets /pizza123.png');
  shirikenImg = loadImage('assets /shuri.png');
  logoImg = loadImage('assets /logo1.png');
  eImg = loadImage('assets /e.png');
  ninjalogoImg = loadImage('assets /logo45.png');
  bgpImg = loadImage('assets /bgp.png');
  keysImg = loadImage('assets /keys.png');

  //playerSS = loadImage('assets /spritesheet.png');
  //playerJSON = loadJSON('assets /spritesheet.json');

}

function setup() {
  cnv = createCanvas(600, 600);
  //frameRate(60);

  //console.log(playerJSON.frames[0].frame);
//  let playerFrames = playerJSON.frames;

//  for (let i = 0; i < playerFrames.length; i++){
  //  let pos = playerFrames[i].frame;
  //  let img = playerSS.get(pos.x, pos.y, pos.w, pos.h);
  //  playerAnimation.push(img);
  //  console.log(playerAnimation);
//  }

  //imageMode(CENTER);
  rectMode(CENTER);

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
    case 'instructions':
      instructions();
      cnv.mouseClicked(instructionsMouseClicked);
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
  image(logoImg, 60, 150, 480, 350);
  image(eImg, 10, 530, 40, 55);

  textFont('copperplate, papyrus, fantasy', 60);
  fill(237,12,17);
  text('NINJA ACADEMY', 52, 80);

  textFont('copperplate, papyrus, fantasy', 30);
  text('"This is where ninjas as made!"', 62, 130);

  textFont('copperplate, papyrus, fantasy', 20);
  fill(237, 123, 33);
  text('click anywhere to start', 180, 580);


}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'instructions'
}

function instructions(){
  background(0);
  image(ninjalogoImg, 250, 120, 300, 350);
  image(keysImg, 180, 440, 100, 80);

  fill(324);
  textFont('copperplate, papyrus, fantasy', 23);
  text('INSTRUCTIONS', 32, 23, 34);

  textSize(18);
  text('Collect The Pizza Slices To Win!', 10, 100);

  textSize(18);
  text('Get 10 Pizza Slices And You Win!', 10, 200);

  textSize(15);
  text('AVOID THE SHURIKENS AT ALL COSTS!', 10, 300);

  textSize(30);
  text('CONTROLS', 10, 400);

  textSize(18);
  text('Arrow keys', 10, 480);
}

function instructionsMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background(bgpImg);

  if (random(1) <= 0.02){
    pizzas.push(new Pizza());
  }

  if (random(1) <= 0.04){
    shirikens.push(new Shiriken());
  }

  player.display();
  player.move();


  for(let i = 2; i < pizzas.length; i++){
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
    shirikens.splice(i, 2);
  } else if (shirikens[i].x > 600){
    shirikens.splice(i, 1);
    console.log('shiriken is out');
  }
}
  fill(43, 29, 20);
  rect(10, 20, 30, 1200);

  fill(255, 255, 255);
  text(`points: ${points}`, 260, 590);

  if (points >= 10){
    state = 'you win';
  } else if (points <= -1){
    state = 'you lost';
  }
//  fill(43, 29, 20);
//  rect(10, 20, 30, 1200);

}

function level1MouseClicked(){
  //points++;
  //console.log('points = ' + points);
  //if (points >= 10){
    //state = 'you win'
  //}
}

function youWin(){
  background(0);
  textSize(56);
  fill(255,255,255);
  textFont('copperplate, papyrus, fantasy');
  text('YOU WIN', 180, 80);

  textSize(30);
  textFont('copperplate, papyrus, fantasy');
  text('Great Job Collecting the pizza!', 50, 250);

  textSize(30);
  textFont('copperplate, papyrus, fantasy');
  text('Your Ninja is all fueled up now!', 50, 400);


  textSize(30);
  textFont('copperplate, papyrus, fantasy',);
  text('Click Anywhere To Go To Home Page', 30, 530);
}

function youWinMouseClicked(){
  state = 'title';
  points = 0;
}

function youLost(){
  background(0);
  textSize(56);
  fill(255,255,255);
  textFont('copperplate, papyrus, fantasy');
  text('HAHA YOU LOST', 60, 80);

  textSize(30);
  textFont('copperplate, papyrus, fantasy');
  text('Come On Defeated By Some Shurikens', 10, 230);

  textSize(30);
  textFont('copperplate, papyrus, fantasy');
  text('Thought You Were A Better Ninja', 30, 380);

  textSize(30);
  textFont('copperplate, papyrus, fantasy',);
  text('Click Anywhere To Go To Home Page', 30, 530);
}

function youLostMouseClicked(){
  state = 'title';
  points = 0;
}
