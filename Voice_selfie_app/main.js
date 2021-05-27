var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
      
    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie")    
    {
    console.log("I AM TAKING THE SEL- wait if you are taking a selfie then then... WHY THE HECK ARE YOU LOOKING AT THE CONSOLE!!?!?!?!?!??!?!")
    speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "I hope you are actually taking a selfie instead of looking AT that CONSOLE but yeah I took your selfie A few seconds ago like while I was talking and making a fool of myself";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        take_SELFIEOFDOOM();
        savetheWORLD();
    }, 5000);
}
Webcam.set({
   width:360,
   height:250,
   image_format : 'png',
   png_quality:90
});
camera = document.getElementById("camera");

function take_SELFIEOFDOOM()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>'
    });    
}

function savetheWORLD()
{
    link = document.getElementById('link');
    image = document.getElementById('selfie_image').src;
    link.href = image;
    link.click();
}