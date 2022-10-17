noseX = "";
noseY = "";

function aiGameOpen() {
    window.location = "AiGame.html";

    function preload() {
        world_start = loadSound("world_start.wav");
        mario_die = loadSound("mariodie.wav");
        mario_gameover = loadSound("gameover.wav");
        coin = loadSound("coin.wav ");
        setSprites();
        MarioAnimation();

    }

    function setup() {
        canvas = createCanvas(1240, 336);
        canvas.parent('Game');
        instializeInSetup(mario);

        video = createCapture(VIDEO);
        video.size(600, 250);
        video.parent('Console');

        posenet = ml5.poseNet(video, modelLoaded);
        posenet.on('pose', gotPoses);
    }

    function modelLoaded() {
        console.log('modleLoaded');
    }

    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
        }
    }

    function draw() {
        game();
    }
}

function gameOpen() {
    window.location = "normalGame.html";
}