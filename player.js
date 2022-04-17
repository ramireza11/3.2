
class Player {
  constructor(){
    this.r = 60
    this.x = 300;
    this.y = 300 - this.r;
  }

  display(){
    rect(this.x, this.y, this.r, this.r);
  }

}
