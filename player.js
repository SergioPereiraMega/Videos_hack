const myVideo = document.getElementById('myVideo');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const timeOut = document.getElementById('timeOut');
const vidNumOut = document.getElementById('vidNum');
let timer = null;

btnPlay.addEventListener('click', vidAction);
btnPause.addEventListener('click', vidAction);
btnStop.addEventListener('click', vidAction);
// btnNext.addEventListener('click', nextVideo);
myVideo.addEventListener('ended', vidEnded);
btnNext0.addEventListener('click', nextVideo);
btnNext1.addEventListener('click', nextVideo);
btnNext2.addEventListener('click', nextVideo);
//Vids
const vids = ["elpadre.mp4", "elhijo.mp4", "vulkem.mp4"];
let vidPlaying = 0;

function vidAction(event){
    switch(event.target.id){
        case "btnPlay":
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "btnPause":
            myVideo.pause();
            break;
        case "btnStop":
            myVideo.pause();
            myVideo.currentTime = 0;
            break;
    }
}

function playVideo(){
    myVideo.play();
    timer = setInterval(update, 100);
}

function update(){
    timeOut.innerHTML = "Time: " + myTime(myVideo.currentTime) + "/" + myTime(myVideo.duration);
}

function myTime(time) {
    var hr = ~~(time / 3600);
    var min = ~~((time % 3600) / 60);
    var sec = time % 60;
    var sec_min = "";
    if (hr > 0) {
        sec_min += "" + hrs + ':' + (nin < 10 ? "0" : "" );
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + Math.round(sec);
    return sec_min;
}

function vidEnded() {
    clearInterval(timer);
    timeOut.innerHTML = "Time: 0";
    nextVideo();
    playVideo();
}

function nextVideo(event) {
    // if(vidPlaying < 2){
    //     vidPlaying++;
    // } else {
    //     vidPlaying = 0;
    // }
    switch(event.target.id){
        case "btnNext1":
            myVideo.src = "videos/" + vids[1];
            vidNum.innerHTML = "2/3";        
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "btnNext0":
            myVideo.src = "videos/" + vids[0];
            vidNum.innerHTML = "1/3";        
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "btnNext2":
            myVideo.src = "videos/" + vids[2];
            vidNum.innerHTML = "3/3";        
            playVideo();
            timer = setInterval(update, 100);
            break;
    }


    // myVideo.src = "videos/" + vids[vidPlaying];
    // vidNum.innerHTML = (vidPlaying+1) + "/3";
}








