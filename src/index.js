import Paddle from "/src/paddle";

import InputHandeler from "/src/input";

let canvas = document.getElementById("screen");

let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
new InputHandeler(paddle);
let lasttime = 0;

function gameloop(timestamp) {
  let deltatime = timestamp - lasttime;
  lasttime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltatime);
  paddle.draw(ctx);
  requestAnimationFrame(gameloop);
}
gameloop();
