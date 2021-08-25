classifier = ml5.imageClassifier('MobileNet', modelloaded);

function modelloaded(){
console.log("Model Loaded");
}

function testImage(){
classifier.classify('#water', gotResults);
}

function gotResults(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("img1"). innerHTML = results[0].label;
}
}