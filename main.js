var stot = window.webkitSpeechRecognition;
var spt = new stot();
function start(){
    document.getElementById("textbox").innerHTML = "";
    spt.lang = "fr";
    spt.start();
}
spt.onresult = function run(event){
    console.log(event);
    result = event.results[0][0].transcript
    console.log(result)
    document.getElementById("textbox").innerHTML = result;
    speak();
}
function speak(){
    sp = window.speechSynthesis;
    data = document.getElementById("textbox").value;
    utter = new SpeechSynthesisUtterance(data);
    sp.speak(utter);
    Webcam.attach(cam);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
})
cam = document.getElementById("camera");
