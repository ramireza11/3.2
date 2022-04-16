let state = 'title';


function setup() {
  createCanvas(600, 600);
}

function draw() {

  if(state ==='title') {
    title();
  } else if (state === 'level 1'){
    level1();
}

function title(){
  background(220);
  textSize(56);
  stroke(255);
  text('NINJA ACADEMY', 80, 80);
}

function level1(){
  background(50, 150, 200);
}
