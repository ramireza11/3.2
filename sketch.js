let state = 'title';
let cnv;
let points = 0;
let player;
let pizza;

function setup() {
  cnv = createCanvas(600, 600);

  textFont('Courier New Bold');

  player = new Player();

  pizza = new Pizza();

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
    default:
      break;
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
//text('click for points', 0, height - 30);

  player.display();

  pizza.display();
  pizza.move();
}

function level1MouseClicked(){
  points++;
  console.log('points = ' + points);
  if (points >= 10){
    state = 'you win'
  }
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


function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
