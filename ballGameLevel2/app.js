var timer = new Stroke(1000, 20, "30px arial", "time: ", 300);
var extraJump = new Stroke(1000, 55, "20px arial", "you got extra jump:", 30, 200, 50, "green", 1000, 33);
var dragon = new Dragon(25, 1000, 500, 2, ["red", "green", "yellow", "blue", "black", "red", "green", "yellow", "blue", "black", "red", "green", "yellow", "blue", "black", "red", "green", "yellow", "blue", "black", "red", "green", "yellow", "blue", "black"], 40, 550, true, false, 50, 1100, true, false);
var man = new Man(600, 450, 200, 200);
var ball = new Ball(100, 589, 15, "blue");
ball.dragon = dragon;
var gravityBall = new GravityAttraction(785, 270, "yellow", 10, 1);
ball.boundry = new Array(21);
var lines = new Array(2);
lines[0] = new Line(900, 300, false, 100, true, false, 2, 1);
lines[1] = new Line(950, 410, false, 100, true, false, 2, 1);
lines[2] = new Line(1000, 510, false, 100, true, false, 2, 1);
ball.lines = new Array(lines.length);
for (var i = 0; i < lines.length; i++) {
    ball.lines = lines;
}
ball.waves = new Array(60);
var id;
var ballenemy = new BallEnemy(150, 140, 20, 0);
var ballShoot = new Array(3);
var fireWorks = new Array(ballShoot.length);
var bonusBallFireWorks = new FireWorks(10, 10, 5, 10);
for (var i = 0; i < bonusBallFireWorks.x.length; i++) {
    bonusBallFireWorks.x[i] = gravityBall.x;
    bonusBallFireWorks.y[i] = gravityBall.y;
    bonusBallFireWorks.fire = true;
}
for (var i = 0; i < fireWorks.length; i++) {
    fireWorks[i] = new FireWorks(10, 5, 10, 50);
}
for (var i = 0; i < ballShoot.length; i++) {
    ballShoot[i] = new BallShoot(ballenemy.x, ballenemy.y, 10, "red");
}
var ballShootArr = [];
var moveBaondryToLeft = false;
var moveBaondryToRight = true;
var baondries = new Array(ball.boundry.length);
baondries[0] = new Baondries(100, 550, 60, 15, false);
baondries[1] = new Baondries(200, 550, 60, 15, false);
baondries[2] = new Baondries(300, 550, 60, 15, false);
baondries[3] = new Baondries(150, 490, 60, 15, false);
baondries[4] = new Baondries(250, 490, 60, 15, false);
baondries[5] = new Baondries(350, 490, 60, 15, false);
baondries[6] = new Baondries(100, 440, 60, 15, false);
baondries[7] = new Baondries(200, 440, 60, 15, false);
baondries[8] = new Baondries(300, 440, 60, 15, false);
baondries[9] = new Baondries(100, 390, 60, 15, false);
baondries[10] = new Baondries(200, 390, 60, 15, false);
baondries[11] = new Baondries(300, 390, 60, 15, false);
baondries[12] = new Baondries(150, 390, 60, 15, false);
baondries[13] = new Baondries(250, 320, 60, 15, false);
baondries[14] = new Baondries(350, 320, 60, 15, false);
baondries[15] = new Baondries(100, 320, 60, 15, false);
baondries[16] = new Baondries(200, 320, 60, 15, false);
baondries[17] = new Baondries(300, 270, 60, 15, false);
baondries[18] = new Baondries(100, 200, 60, 15, false);
baondries[19] = new Baondries(200, 200, 60, 15, false);
baondries[20] = new Baondries(300, 250, 60, 15, false);
var waves = new Array(ball.waves.length);
for (var i = 0; i < waves.length; i++) {
    waves[i] = new Baondries(1 + (i * 21), 600, 20, -100 + (i * 30), false);
    waves[i].short = true;
    waves[i].long = false;
}
for (var n = 0; n < baondries.length; n++) {
    ball.boundry[n] = baondries[n];
}
for (var n = 0; n < waves.length; n++) {
    ball.waves[n] = waves[n];
}
function renderLevel1() {
    ballenemy.doSumPer += 10;
    var canvas = document.getElementById("canvasGame");
    var canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle = "aqua";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    if (extraJump.stroke && extraJump.secCounter <= 300) {
        extraJump.rect();
        extraJump.strokeStr(canvasContext);
        extraJump.secCounter++;
        if (extraJump.secCounter > 300) {
            extraJump.secCounter = 0;
            extraJump.stroke = false;
        }
    }
    ball.dragon.drowDragon();
    timer.strokeStr(canvasContext);
    if (timer.points % 100 == 0) {
        timer.points -= 40;
    }
    timer.points -= 0.01;
    for (var i = 0; i < lines.length; i++) {
        lines[i].drowLines();
    }
    for (var i = 0; i < waves.length; i++) {
        ball.waves[i].drowBaondries();
        ball.waves[i].shortLongBaondry();
    }
    gravityBall.drowBall();
    bonusBallFireWorks.drowFireWorks(canvasContext);
    canvasContext.fillStyle = ballenemy.changeColor(ballenemy.doSumPer);
    canvasContext.beginPath();
    canvasContext.arc(ballenemy.x, ballenemy.y, ballenemy.radios, 0, Math.PI * 2, true);
    canvasContext.fill();
    for (var i = 0; i < baondries.length; i++) {
        ball.boundry[i].drowBaondries();
        if (ball.boundry[i].x <= 100) {
            moveBaondryToLeft = false;
            moveBaondryToRight = true;
        }
        if (ball.boundry[i].x >= 600) {
            moveBaondryToRight = false;
            moveBaondryToLeft = true;
        }
        if (moveBaondryToRight) {
            ball.boundry[i].x++;
        }
        if (moveBaondryToLeft) {
            ball.boundry[i].x--;
        }
    }
    if (BallShoot.persec % 1500 == 0 && BallShoot.counter < ballShoot.length) {
        ballShootArr.push(ballShoot[BallShoot.counter]);
        BallShoot.counter++;
        BallShoot.counter2++;
    }
    BallShoot.persec += 10;
    for (var i = 0; i < ballShootArr.length; i++) {
        ballShootArr[i].drowBall(canvasContext);
        ballShootArr[i].y++;
    }
    for (var i = 0; i < ballShootArr.length; i++) {
        if (ballShootArr[i].y >= canvas.height - 30) {
            for (var f = 0; f < fireWorks[i].x.length; f++) {
                fireWorks[i].x[f] = ballShootArr[i].x;
                fireWorks[i].y[f] = ballShootArr[i].y;
            }
            fireWorks[i].fire = true;
        }
        if (fireWorks[i].fire) {
            fireWorks[i].drow(canvasContext);
        }
    }
    for (var i = 0; i < ballShootArr.length; i++) {
        if (ballShootArr[i].y >= canvas.height - 30) {
            ballShootArr[i].y = ballenemy.y;
            ballShootArr[i].x = ballenemy.x;
            ballShootArr[i].maxX = ball.x;
        }
        if (ballShootArr[i].x < ballShootArr[i].maxX) {
            ballShootArr[i].x += 0.5;
        }
        if (ballShootArr[i].x > ballShootArr[i].maxX) {
            ballShootArr[i].x -= 0.5;
        }
    }
    if (ballShootArr[BallShoot.counter2].firstShoot) {
        ballShootArr[BallShoot.counter2].maxX = ball.x;
        ballShootArr[BallShoot.counter2].firstShoot = false;
    }
    ball.moveBall();
    ball.drowBall();
    for (var i = -20; i <= 20; i++) {
        for (var y = -20; y <= 20; y++) {
            if (Math.round(ball.x) + i == ballenemy.x && ball.y + y == ballenemy.y) {
                alert("winner");
                clearInterval(id);
                ball.x = 100;
                ball.y = 590;
                Ball.onBaondry = false;
                Ball.wasOnBaondry = false;
                Ball.right = false;
                Ball.left = false;
                Ball.m = 5;
                Ball.reverse = false;
                Ball.up = false;
                Ball.ground = 585;
                Ball.jump = 90;
                Ball.topjump = Ball.ground - Ball.jump;
            }
        }
    }
    for (var index = 0; index < ballShootArr.length; index++) {
        Math.round(ballShootArr[index].x);
        Math.round(ballShootArr[index].y);
        for (var i = -ball.radios; i < ball.radios; i++) {
            for (var r = -ball.radios; r < ball.radios; r++) {
                if (Math.round(ball.x) + i == ballShootArr[index].x && ball.y + r == ballShootArr[index].y) {
                    alert("you lose!");
                    ball.x = 100;
                    ball.y = 590;
                    Ball.onBaondry = false;
                    Ball.wasOnBaondry = false;
                    Ball.right = false;
                    Ball.left = false;
                    Ball.m = 5;
                    Ball.reverse = false;
                    Ball.up = false;
                    Ball.ground = 585;
                    Ball.jump = 90;
                    Ball.topjump = Ball.ground - Ball.jump;
                }
            }
        }
    }
    var brk = false;
    for (var x = -gravityBall.radios - ball.radios; x < gravityBall.radios + ball.radios; x++) {
        if (!brk) {
            if (Math.round(ball.x) + x == gravityBall.x) {
                for (var y = -gravityBall.radios - ball.radios; y < gravityBall.radios + ball.radios; y++) {
                    if (ball.y + y == gravityBall.y) {
                        extraJump.stroke = true;
                        Ball.jump += 30;
                        ball.x = 100;
                        ball.y = 590;
                        Ball.onBaondry = false;
                        Ball.wasOnBaondry = false;
                        Ball.right = false;
                        Ball.left = false;
                        Ball.m = 5;
                        Ball.reverse = false;
                        Ball.up = false;
                        Ball.ground = 585;
                        Ball.topjump = Ball.ground - Ball.jump;
                        brk = true;
                        break;
                    }
                }
            }
        }
    }
}
id = setInterval(renderLevel1, 10);
//between Levels
//# sourceMappingURL=app.js.map