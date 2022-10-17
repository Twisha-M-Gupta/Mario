function gameOpen() {
    window.location = "normalGame.html";
}

function preload() {
    world_start = loadSound("world_start.wav");
    mario_die = loadSound("mariodie.wav");
    mario_gameover = loadSound("gameover.wav");
    reward = loadSound("coin.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    instializeInSetup(mario);

}

function draw() {
    game();
}