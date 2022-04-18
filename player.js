
class Player {
  constructor() {
    this.r = 60
    this.x = 300;
    this.y = 300 - this.r;
    this.speed = 2
    this.direction = 'still';
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
    //rect(this.x, this.y, this.r, this.r);
  }

  move() {
    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
      //descrease y pos
        if (this.y - this.r / 2 > 0) {
          this.y -= this.speed;
        }
        break;
      case 'down':
        if (this.y < 600 - this.r / 2) {
        this.y += this.speed;
      }
        //increase y pos
        break;
      case 'right':
        //increasing x pos
        if (this.x < 600 - this.r / 2) {
          this.x += this.speed;
      }
        break;
      case 'left':
        //decresing x pos
        if (this.x - this.r / 2 > 0){
        this.x -= this.speed;
      }
        break;
        defeault:
        break;
    }

  }

}
