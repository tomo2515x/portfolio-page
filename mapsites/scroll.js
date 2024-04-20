function moveBody(y) {
    document.querySelector(".parallax-bg").style.transform = "translate(0%, "+ -parseFloat(y-1) +"%)";
}

window.addEventListener('scroll', () => {
    

    const y = 1 + (window.scrollY || window.pageYOffset) / 50;

    document.querySelector(".parallax-bg").animate(moveBody(y), 2000);
    

});
