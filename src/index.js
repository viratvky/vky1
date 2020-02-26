import Game from "/src/game";

let canvas = document.getElementById("screen");

let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
//paddle.draw(ctx);

let lasttime = 0;

function gameloop(timestamp) {
  let deltatime = timestamp - lasttime;
  lasttime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltatime);
  game.draw(ctx);
  requestAnimationFrame(gameloop);
}
requestAnimationFrame(gameloop);
