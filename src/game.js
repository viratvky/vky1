import Paddle from "/src/paddle";

import InputHandeler from "/src/input";

import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObjects = [this.ball, this.paddle];
    new InputHandeler(this.paddle);
  }
  update(deltatime) {
    this.gameObjects.forEach(object => object.update(deltatime));
  }
  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
