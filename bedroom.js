img = "";
Status = "";
objects = [];
function preload(){
  img = loadImage('bedroom.jpg');  
}

function setup(){
  canvas = createCanvas(640, 420);
    canvas.position(360,180);
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




function back(){
  window.location = "index.html"
}


function draw(){
image(img, 0, 0, 640, 420);
if(Status != ""){
 for(i = 0; i < objects.length; i++){
  document.getElementById("status").innerHTML = "Status : Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height );
}
}




}