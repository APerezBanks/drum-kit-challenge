let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let cowBell = document.getElementById("cowBell");
let goat = document.getElementById("goat");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tom  = document.getElementById("tom");


    document.addEventListener("keypress",(e) => {
        if (e.key == "q"){
            boom.pause();
            boom.currentTime = 0;
            boom.play();
            document.querySelector("#Q").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#Q").style.border = "";
                }, 100);
                
        }  
        else if  (e.key === "w") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
        document.querySelector("#W").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#W").style.border = "";
                }, 100);
    }
    else if  (e.key == "e") {
        cowBell.pause();
        cowBell.currentTime = 0;
        cowBell.play();
        document.querySelector("#E").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#E").style.border = "";
                }, 100);
    }
    else if  (e.key == "r") {
        goat.pause();
        goat.currentTime = 0;
        goat.play();
        document.querySelector("#R").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#R").style.border = "";
                }, 100);
    }
    else if  (e.key == "t") {
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
        document.querySelector("#T").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#T").style.border = "";
                }, 100);
    }
    else if  (e.key == "y") {
        kick.pause();
        kick.currentTime = 0;
        kick.play();
        document.querySelector("#Y").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#Y").style.border = "";
                }, 100);
    }
    else if  (e.key == "u") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
        document.querySelector("#U").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#U").style.border = "";
                }, 100);
    }
    else if  (e.key == "i") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
        document.querySelector("#I").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#I").style.border = "";
                }, 100);
    }
    else if  (e.key == "o") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
        document.querySelector("#O").style.border = "3px solid #00fff2";
            setTimeout(function(){
                document.querySelector("#O").style.border = "";
                }, 100);
    
    }
    else if  (e.key == "p") {
        tom.pause();
        tom.currentTime = 0;
        tom.play();document.querySelector("#P").style.border = "3px solid #00fff2";
        setTimeout(function(){
            document.querySelector("#P").style.border = "";
            }, 100);
    }


});

const boomImage = document.querySelector(".drumKit div:nth-child(1)");
boomImage.addEventListener("click", () => {
    boom.pause();
    boom.currentTime = 0;
    boom.play();
});

const clapImage = document.querySelector(".drumKit div:nth-child(2)");
clapImage.addEventListener("click", () => {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
});

const cowBellImage = document.querySelector(".drumKit div:nth-child(3)");
cowBellImage.addEventListener("click", () => {
    cowBell.pause();
    cowBell.currentTime = 0;
    cowBell.play();
});

const goatImage = document.querySelector(".drumKit div:nth-child(4)");
goatImage.addEventListener("click", () => {
    goat.pause();
    goat.currentTime = 0;
    goat.play();
});

const hihatImage = document.querySelector(".drumKit div:nth-child(5)");
hihatImage.addEventListener("click", () => {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
});

const kickImage = document.querySelector(".drumKit div:nth-child(6)");
kickImage.addEventListener("click", () => {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
});

const openhatImage = document.querySelector(".drumKit div:nth-child(7)");
openhatImage.addEventListener("click", () => {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
});

const rideImage = document.querySelector(".drumKit div:nth-child(8)");
rideImage.addEventListener("click", () => {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
});

const snareImage = document.querySelector(".drumKit div:nth-child(9)");
snareImage.addEventListener("click", () => {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
});

const tomImage = document.querySelector(".drumKit div:nth-child(10)");
tomImage.addEventListener("click", () => {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
});





