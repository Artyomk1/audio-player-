var data = {
    title :[
        "miyagi-endshipil_-_god-bless",

        "miyagi-endshipil_-_hustle",

        "miagi-endshipil_-_kapitan",

        "miagi-endshipil_-_tamada"
],
song:[
    "music audioJS/god-bless.mp3",
    "music audioJS/hustle.mp3",
    "music audioJS/kapitan.mp3", 
    "music audioJS/tamada.mp3"  
    
],
poster:[
    "https://i.gifer.com/Mwgb.gif",
    "https://media2.giphy.com/media/WQIeiETO0wHDCUbvs4/giphy.gif",
    "https://i.pinimg.com/originals/31/70/5f/31705f12b811463ca33d4372042ed484.gif ",
    "https://i.pinimg.com/originals/fd/72/09/fd7209271a72923cab552878e97edcdb.gif   "
]

}

var song  = new Audio();
window.onload = function (){
    playSong()
}

var currentSong = 0;

function playSong(){
    song.src = data.song[currentSong];
    
    
    let soncTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    
    
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url("+ data.poster[currentSong] +")"

    let main = document.getElementById("main")
    main.style.backgroundImage = "url("+ data.poster[currentSong] +")"
    song.play();
}


function playOrPauseSong() {
    let play = document.getElementById("play")

    
    if (song.paused) {
        song.play();
        play.src = "images/pause.png"  //pause
       
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"  //play
    }
}


song.addEventListener("timeupdate",function(){
     console.log(song.currentTime);
     console.log(song.duration);

     let fill = document.getElementById("fill")
     //console.log(fill)
     let position = song.currentTime / song.duration;
     fill.style.width = position * 100 + "%";
     convertTime(song.currentTime)
     if(song.ended){
        next()  
     }

} )


function convertTime (seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    
    currentTime.textContent = min + ":" + sec


    totalTime(Math.round(song.duration))


    // console.log(seconds);
    // console.log(min);
    
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ?  "0" + min : min;
    sec = (sec < 10) ?  "0" + sec : sec;
    
    currentTime.textContent += "/" + min + ":" + sec;
}
  
     
function next(){
    currentSong++;
    if (currentSong >= data.song.length){
        currentSong > 0 
    }
    playSong();
    play.src = "images/pause.png"
}

function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}

function muted(){
    var mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    }else{
        song.muted = true;
        mute.src = "images/volume-mute.png";
    }

}

function durase() {
    song.volume -= 0.2
    
}

function incrase() {
    song.volume += 0.2
}

