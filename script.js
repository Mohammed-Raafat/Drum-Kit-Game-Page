
// This function plays the sound depending on which keyboard is pressed, or button is clicked
function makeSound(key)
{
    switch (key) {
        case "w":
            var aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;

        case "a":
            var aud = new Audio('sounds/tom-2.mp3');
            aud.play();
            break;
        case "s":
            var aud = new Audio('sounds/tom-3.mp3');
            aud.play();
            break;
        case "d":
            var aud = new Audio('sounds/tom-4.mp3');
            aud.play();
            break;
        case "j":
            var aud = new Audio('sounds/snare.mp3');
            aud.play();
            break;
        case "k":
            var aud = new Audio('sounds/crash.mp3');
            aud.play();
            break;
        case "l":
            var aud = new Audio('sounds/kick-bass.mp3');
            aud.play();
            break;
        default: break;
    }
    buttonAnimation(key);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", hundleClick);
}

document.addEventListener("keypress", pressKey);

// This function for keyboard press
function pressKey(event)
{
    makeSound(event.key);
}

// This function for mouse click
function hundleClick()
{
    makeSound(this.innerHTML);
}


function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){activeButton.classList.remove("pressed");}, 100);
}