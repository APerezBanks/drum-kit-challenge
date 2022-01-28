let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let cowBell = document.getElementById("cowBell");
let goat = document.getElementById("goat");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
// let tink = document.getElementById("tink");
let tom  = document.getElementById("tom");

document.addEventListener("keypress", (e) => {
    if (e.key == "q"){
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    }    
        else if  (e.key == "w") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    }
    else if  (e.key == "e") {
        cowBell.pause();
        cowBell.currentTime = 0;
        cowBell.play();
    }
    else if  (e.key == "r") {
        goat.pause();
        goat.currentTime = 0;
        goat.play();
    }
    else if  (e.key == "t") {
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
    }
    else if  (e.key == "y") {
        kick.pause();
        kick.currentTime = 0;
        kick.play();
    }
    else if  (e.key == "u") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    }
    else if  (e.key == "i") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
    }
    else if  (e.key == "o") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
    
    // else if  (e.key == "p") {
    //     tink.pause();
    //     tink.currentTime = 0;
    //     tink.play();
    }
    else if  (e.key == "p") {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    }










})