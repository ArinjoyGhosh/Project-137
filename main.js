status = "";
function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(520, 200);

    camera = createCapture(VIDEO);
    camera.position(520, 200);
    camera.size(500, 500);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    window.alert("Detecting Objects!");
}
function modelLoaded() {
    console.log("Model Loaded");
    status = "true";
}
function draw() {
    
}