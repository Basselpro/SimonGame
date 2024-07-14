

var colorsArray = ["red" , "blue" , "yellow" , "green"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;



$(document).keypress(function () {

if(!started){
  $("#level-title").text("LeveL " + level)
  nextSequence();
  started = true;
}

});


$(".btn").click(function(){


var userChoosenColor = $(this).attr("id");

userClickedPattern.push(userChoosenColor);

playSound(userChoosenColor);

animatePress(userChoosenColor);

checkAnswer(userClickedPattern.length - 1);


})


function nextSequence(){

level++;
$("#level-title").text("LeveL " + level)
userClickedPattern = [];
var randomNumber = Math.floor(Math.random() * 4);

var randomChoosenColour = colorsArray[randomNumber];



gamePattern.push(randomChoosenColour);

$("#" +randomChoosenColour).fadeOut(100).fadeIn(100);


playSound(randomChoosenColour);

}


function checkAnswer(currentColor){
if (gamePattern[currentColor] === userClickedPattern[currentColor]) {
  if (userClickedPattern.length === gamePattern.length) {
    setTimeout( function () {
      nextSequence();
    } , 1000)
}

  }
  else {
    playSound("wrong");
    level = 0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
    $("#level-title").text("game over press any putton to start again  ");
  }
}



function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100)
}
