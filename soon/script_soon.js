

let rippleOne;
let armyOfRipples = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    textAlign(CENTER);
    textSize(90);
    fill(90);
    text("soon ≻", width / 2, height / 2);

    rippleOne = new Ripple(mouseX, mouseY);
    rippleOne.renderRipple();

    if (mouseIsPressed) {
        armyOfRipples.push(new Ripple(mouseX, mouseY));
    }

    for (let i = 0; i < armyOfRipples.length; i++) {
        armyOfRipples[i].renderRipple();

        if (armyOfRipples[i].alpha < 0) {
            armyOfRipples.splice(i, 1);
            i--;
        }
    }
}

class Ripple {
    constructor(x, y) {
        this.xPos = x;
        this.yPos = y;
        this.radius = 12;
        this.alpha = 255;
        this.noiseScale = 0.005;
    }

    renderRipple() {
        noFill();
        strokeWeight(12);
        stroke(255, this.alpha);
        ellipse(this.xPos, this.yPos, this.radius, this.radius);

        let noiseVal = noise(this.xPos * this.noiseScale, this.yPos * this.noiseScale);
        this.radius += cos(radians(noiseVal * 360)) * 4;
        this.alpha -= 1.68;
    }
}
