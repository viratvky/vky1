export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = document.getElementById("img_ball");
    this.position = { x: 10, y: 10 };
    this.speed = { x: 4, y: 2 };
    this.size = 16;
    this.game = game;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    let bottomofball = this.position.y + this.size;
    let topofpaddle = this.game.paddle.position.y;
    let leftsideofpaddle = this.game.paddle.position.x;
    let rightsideofpaddle =
      this.game.paddle.position.x + this.game.paddle.width;
    if (bottomofball >= topofpaddle) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position - this.size;
    }
  }
}
