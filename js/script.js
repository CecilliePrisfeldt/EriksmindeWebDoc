
function myLoadFunction() {
document.getElementById("knap").style.display = "none";
}

// video
window.onscroll = function() {
    var fag = document.getElementById("videofag");
    var interview = document.getElementById("video");


    if (fag.getBoundingClientRect().bottom < 250 || fag.getBoundingClientRect().top > 250)
        fag.pause();
    else
        fag.play();

    if (interview.getBoundingClientRect().bottom < 250 || interview.getBoundingClientRect().top > 250)
        interview.pause();
    else
        interview.play();
}

// kontakt formularen


var formvis = 0;
function myFunction() {
  
if (formvis == 0)
{
    document.getElementById("knap").style.display = "block";
    formvis = 1;
} 
else if (formvis == 1)
{
    document.getElementById("knap").style.display = "none";
    formvis=0;
}
}


/* window.onscroll = function() {
    var fag = document.getElementById("videofag");
    var interview = document.getElementById("video");
    var offsetTop = interview.getBoundingClientRect().top;
    var offsetBottom = interview.getBoundingClientRect().bottom;

    var topShown = offsetTop >= 0 && offsetTop < window.innerHeight - 350;
    var bottomShown = offsetBottom >= 350 && offsetBottom < window.innerHeight;

    if (topShown || bottomShown) {
        playVideo();
    } else {
        stopVideo();
    }

    function playVideo() {
        fag.play();
        interview.play();
    }

    function stopVideo() {
        interview.pause();
        fag.play();
    }


} */

