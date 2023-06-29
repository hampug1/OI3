img = "";
Status = "";
objects = [];
function preload(){
  img = loadImage('TV and AC.jpg');  
}

function setup(){
  canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded)
    document.getElementById("status").innerHTML = "Status = detecting objects";
  }

  function modelloaded(){
  console.log("Model Loaded!!");
  Status = true;
  objectDetector.detect(img, gotResults)
  }

function gotResults(error, results){
  if(error){
    console.log(error);
  }
  console.log(results);
}


function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV and AC", 45, 75);
    
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

function back(){
  window.location = "index.html"
}