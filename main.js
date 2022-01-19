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
}