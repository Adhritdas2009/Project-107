function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
   classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9L_oiw_Ho/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}