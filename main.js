var prediction_1 ="";
var prediction_2 ="";
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function Takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="Capture_image" src="'+data_uri+'"/>';
 });

}
console.log("ml5version:",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tg0_NuxtK/model.json",modelloaded);
 function modelloaded(){
     console.log("model_ loaded");
  }
  function speak(){
      var synth= window.speechSynthesis;
      speak_data_1= "The First Prediction is "+prediction_1;
      speak_data_2= "The Second Prediction is "+prediction_2;
      var Utter_this = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
      synth.speak(Utter_this);
    }

    function Check(){
        img=document.getElementById("Capture_image");
         classifier.classify(img,gotResult);
    }
     
    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML=results[0].label;
            document.getElementById("result_emotion_name2").innerHTML=results[1].label;
            prediction_1=results[0].label;
            prediction_2=results[1].label;
            speak();
            if(results[0].label=="happy"){
               document.getElementById("update_emoji").innerHTML="&#128522;";
               console.log("happy1");
            }
            if(results[0].label=="sad"){
                document.getElementById("update_emoji").innerHTML="&#128532;";
                console.log("sad1");
             }
             if(results[0].label=="angry"){
                document.getElementById("update_emoji").innerHTML="&#128548;";
                console.log("angry1");
             }
             if(results[1].label=="happy"){
                document.getElementById("update_emoji2").innerHTML="&#128522;";
                console.log("happy2");
             }
             if(results[1].label=="sad"){
                 document.getElementById("update_emoji2").innerHTML="&#128532;";
                 console.log("sad2");
              }
              if(results[1].label=="angry"){
                 document.getElementById("update_emoji2").innerHTML="&#128548;";
                 console.log("angry2")
              }
              }
        }
