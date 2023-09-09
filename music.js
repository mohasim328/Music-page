var play = document.getElementById("mysong");
var icon = document.getElementById("icon");
icon.onclick = function() {
    if (mysong.paused) {
        mysong.play();
        icon.src = "./picture/61039.png ";
    } else {
        mysong.pause();
        icon.src = "./picture/puse.png";
    }
}