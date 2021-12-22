var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
	.addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
    });
    function sound(key) {
        switch (key) {
            case "W":
            var sound1 = new Audio("sounds/crash.wav");
            sound1.play();
            break;
        
            case "A":
            var sound2 = new Audio("sounds/hihat.wav");
            sound2.play();
            break;
        
            case "S":
            var sound3 = new Audio("sounds/kick.wav");
            sound3.play();
            break;
        
            case "D":
            var sound4 = new Audio("sounds/openhat.wav");
            sound4.play();
            break;
        
            case "J":
            var sound5 = new Audio("sounds/ride.wav");
            sound5.play();
            break;
        
            case "K":
            var sound6 = new Audio("sounds/snare.wav");
            sound6.play();
            break;
        
            case "L":
            var sound7 = new Audio("sounds/tom1.wav");
            sound7.play();
            break;
        
            default: console.log(key);
        }
        }
           