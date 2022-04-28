let mediaElem = document.querySelector("video");
let timePicker = document.getElementById('timer');

let togglePlay = () => {
    if (mediaElem.paused) {
        mediaElem.play();
    } else {
        mediaElem.pause();
    }
}
mediaElem.addEventListener('ended', function () {
    mediaElem.currentTime = 0;
}, false);

mediaElem.addEventListener('timeupdate', function () {
    timePicker.innerHTML = secondsToTime(mediaElem.currentTime);
}, false);

let secondsToTime = (time) => {
    let h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);
    if (s === 60) {
        s = 0;
        m = m + 1;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h === 0) {
        fulltime = m + ':' + s;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
}