const backgroundColor = 255;
const strokeAlpha = 70;
const strokeColor = 225;

const noiseZoom = 0.005;
const noiseOctaves = 4;
const noiseFalloff = 0.5;

const zOffsetChange = 0;
const individualZOffset = 0;

const lineSpeed = 8;

const newPointsCount = 12;

let seed;
let points = [];

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('interactive');
    fill(backgroundColor, 0);
    stroke(strokeColor, strokeAlpha);
    colorMode(HSB, 300);
    noiseDetail(noiseOctaves, noiseFalloff);
    seed = floor(random(1000000));
    randomSeed(seed);
    noiseSeed(seed);

    points = [];
    for (let i = 0; i < newPointsCount; i++) {
        let angle = random(TAU);
        let magnitude = randomGaussian() * ((newPointsCount - 1) ** 0.5 * 3);
        let newPoint = {
            x: windowWidth / 2 + magnitude * cos(angle),
            y: windowHeight / 2 + magnitude * sin(angle),
            zOffset: random(),
        };
        points.push(newPoint);
    }
}

function draw() {
    for (let pt = 0; pt < points.length; pt++) {
        let p = points[pt];
        let noiseX = p.x * noiseZoom;
        let noiseY = p.y * noiseZoom;
        let noiseZ = frameCount * zOffsetChange + p.zOffset * individualZOffset;
        let newPX = p.x + map(noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
        let newPY = p.y + map(noise(noiseX, noiseY, noiseZ + 214), 0, 1, -lineSpeed, lineSpeed);
        line(p.x, p.y, newPX, newPY);
        p.x = newPX;
        p.y = newPY;
    }
}

function mouseDragged() {
    for (let i = 0; i < newPointsCount; i++) {
        let angle = random(TAU);
        let magnitude = randomGaussian() * ((newPointsCount - 1) ** 0.5 * 3);
        let newPoint = {
            x: mouseX + magnitude * cos(angle),
            y: mouseY + magnitude * sin(angle),
            zOffset: random(),
        };
        points.push(newPoint);
    }
}

function windowResized() {
    let cnv = resizeCanvas(windowWidth, windowHeight);
    cnv.parent('interactive');
}
