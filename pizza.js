
class Pizza {
  constructor(){
    this.r = 50;
    this.x = 0 - this.r;
    this.y = random(width);
    this.speed = 2;
  }

  display(){
    rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.x += this.speed;
  }
}
