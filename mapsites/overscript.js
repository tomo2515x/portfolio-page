    function  closeGallery() {

        document.getElementById("screenshot").style.display = "none";
        document.body.style.overflow = "visible";
    
    }
    
    function showgallery(a) {
    
    imgscr = a.src;
    
    if (document.getElementById("screenshot").style.display == "flex") {
    
        closeGallery();

    }
    else {
    
        document.getElementById("screenshot").style.display = "flex";
        document.getElementById("screenshotimg").style.backgroundImage = "url('"+imgscr+"')";
        document.body.style.overflow = "hidden";
    
    }
    
}
    
window.onkeydown = function(event) {
            
    if(event.key == "Escape" || event.key == "X" || event.key == "x") {
                
        closeGallery();
    
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos <= window.innerHeight/1.3) {
        document.getElementById("menubar").style.top = "0";
    } else {
        document.getElementById("menubar").style.top = "-5vw";
    }
    prevScrollpos = currentScrollPos;
} 

function changeBackground(x) {

    document.body.style.backgroundImage = "url("+x+")";

}
    