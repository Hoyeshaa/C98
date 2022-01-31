var stot = window.webkitSpeechRecognition;
var spt = new stot();
function start(){
    document.getElementById("textbox").innerHTML = "";
    spt.start();
}
spt.onresult = function run(event){
    console.log(event);
    result = event.results[0][0].transcript
    console.log(result)
    document.getElementById("textbox").innerHTML = result;
    if(result=="take my selfie"){
        speak();
    }
}
function speak(){
    sp = window.speechSynthesis;
    data = "taking your selfie in 5 seconds";
    utter = new SpeechSynthesisUtterance(data);
    sp.speak(utter);
    Webcam.attach(cam);
    setTimeout(function(){
        pics();
        save();
    },5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
})
cam = document.getElementById("camera");
function pics(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='pic'src='"+data_uri+"'>";
    })
}
function save(){
   link =  document.getElementById("link");
   src = document.getElementById("pic").src;
   link.href = src;
   link.click();
}