var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback,1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
    //Checks to see if jQuery is defined. This is to ensure that there is corrections for any possible issues. 
    if(typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top<=0 && rect.bottom >=0) || (rect.bottom >= (window.innerHeight || document.documentEleemnt.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clinetHeight))
        || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}